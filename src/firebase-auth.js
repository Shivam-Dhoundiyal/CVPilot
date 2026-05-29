import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDocs,
    query,
    where,
    serverTimestamp
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Check if all required environment variables are defined and not placeholders
const hasFirebaseConfig = 
    Object.values(firebaseConfig).every(Boolean) && 
    !Object.values(firebaseConfig).some(val => val.includes('your_firebase') || val.includes('your-project-id'));

const socialAuthButtonSelector = '[data-auth-provider]';

function notify(message) {
    if (window.CVPilotAuthUI?.showToast) {
        window.CVPilotAuthUI.showToast(message);
        return;
    }
    console.info(message);
}

function waitForAuthUi() {
    return new Promise((resolve) => {
        if (window.CVPilotAuthUI) {
            resolve(window.CVPilotAuthUI);
            return;
        }

        window.addEventListener('cvpilot:auth-ui-ready', () => resolve(window.CVPilotAuthUI), { once: true });
    });
}

function setSocialButtonsLoading(activeButton, isLoading, providerName = 'account') {
    document.querySelectorAll(socialAuthButtonSelector).forEach((button) => {
        button.disabled = isLoading;
    });

    if (!activeButton) return;

    activeButton.dataset.originalLabel ??= activeButton.innerHTML;
    activeButton.innerHTML = isLoading
        ? `Connecting to ${providerName}...`
        : activeButton.dataset.originalLabel;

    if (!isLoading) {
        document.querySelectorAll(socialAuthButtonSelector).forEach((button) => {
            button.disabled = false;
        });
    }
}

function getProvider(providerId) {
    if (providerId === 'github') {
        const provider = new GithubAuthProvider();
        provider.addScope('read:user');
        provider.addScope('user:email');
        return {
            label: 'GitHub',
            provider
        };
    }

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return {
        label: 'Google',
        provider
    };
}

function bindSocialAuthButtons(signInWithProvider) {
    document.querySelectorAll(socialAuthButtonSelector).forEach((button) => {
        button.addEventListener('click', async () => {
            const providerId = button.dataset.authProvider || 'google';
            const { label } = getProvider(providerId);

            try {
                setSocialButtonsLoading(button, true, label);
                notify(`Connecting to ${label} secure sign-in...`);
                await signInWithProvider(providerId);
            } catch (error) {
                notify(mapAuthError(error));
            } finally {
                setSocialButtonsLoading(button, false, label);
            }
        });
    });
}

// Cleanly map Firebase errors to clear, user-friendly messages
function mapAuthError(error) {
    console.error('Firebase Auth Error details:', error);
    switch (error?.code) {
        case 'auth/email-already-in-use':
            return 'This email address is already registered. Please log in instead.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/weak-password':
            return 'Password is too weak. It must be at least 6 characters.';
        case 'auth/wrong-password':
        case 'auth/user-not-found':
        case 'auth/invalid-credential':
            return 'Incorrect email or password. Please verify your credentials.';
        case 'auth/popup-closed-by-user':
            return 'The secure sign-in window was closed before completing.';
        case 'auth/popup-blocked':
            return 'The browser blocked the secure sign-in popup. Allow popups for this site and try again.';
        case 'auth/unauthorized-domain':
            return 'This domain is not authorized for Firebase Auth. Check your console.';
        case 'auth/operation-not-allowed':
            return 'This Firebase sign-in provider is not enabled yet.';
        case 'auth/account-exists-with-different-credential':
            return 'This email is already linked to another sign-in method. Use the original method first.';
        default:
            return error?.message || 'Authentication failed. Please try again.';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const authUi = await waitForAuthUi();

    // Expose configuration status to app.js
    window.CVPilotFirebaseAuth = {
        isConfigured: hasFirebaseConfig,
        signUpWithEmail: async () => { throw new Error("Firebase is not configured."); },
        signInWithEmail: async () => { throw new Error("Firebase is not configured."); },
        logout: async () => {}
    };

    window.CVPilotFirebaseDB = {
        isConfigured: false,
        saveResume: async () => { throw new Error("Database is not configured."); },
        getUserResumes: async () => { throw new Error("Database is not configured."); }
    };

    if (!hasFirebaseConfig) {
        document.querySelectorAll(socialAuthButtonSelector).forEach((button) => {
            button.addEventListener('click', () => {
                notify('Firebase is not configured yet. Add Firebase web config values before using login.');
            });
        });
        return;
    }

    try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        const signInWithProvider = async (providerId) => {
            const { provider } = getProvider(providerId);
            return signInWithPopup(auth, provider);
        };

        // Bind operational methods
        window.CVPilotFirebaseAuth = {
            isConfigured: true,
            auth,
            signUpWithEmail: async (email, password, name) => {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name });
                return userCredential.user;
            },
            signInWithEmail: async (email, password) => {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                return userCredential.user;
            },
            signInWithProvider,
            logout: () => signOut(auth)
        };

        // Bind Firestore database methods
        window.CVPilotFirebaseDB = {
            isConfigured: true,
            db,
            saveResume: async (resumeId, resumeData) => {
                const docRef = doc(db, "resumes", resumeId);
                const completeData = {
                    ...resumeData,
                    updatedAt: serverTimestamp()
                };
                await setDoc(docRef, completeData, { merge: true });
                return resumeId;
            },
            getUserResumes: async (userId) => {
                const q = query(collection(db, "resumes"), where("ownerId", "==", userId));
                const querySnapshot = await getDocs(q);
                const list = [];
                querySnapshot.forEach((docSnap) => {
                    list.push({ id: docSnap.id, ...docSnap.data() });
                });
                return list;
            }
        };

        window.firebaseAuth = {
            signOut: () => signOut(auth)
        };

        bindSocialAuthButtons(signInWithProvider);

        onAuthStateChanged(auth, (user) => {
            if (!user) {
                authUi.renderSignedOut?.({ silent: true, skipFirebase: true });
                return;
            }

            authUi.renderSignedIn?.({
                uid: user.uid,
                name: user.displayName || user.email?.split('@')[0] || 'CVPilot User',
                email: user.email || '',
                photoURL: user.photoURL || '',
                provider: 'Google',
                persistLocal: true // Retain session
            });
        });

    } catch (err) {
        console.error("Firebase Initialization Failed:", err);
        notify('⚠️ Failed to initialize Firebase Auth. Check console logs for errors.');
    }
});
