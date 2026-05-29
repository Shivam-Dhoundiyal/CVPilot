import { initializeApp } from 'firebase/app';
import {
    getAuth,
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

const googleButtonSelector = '[data-auth-provider="google"]';

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

function setGoogleButtonsLoading(isLoading) {
    document.querySelectorAll(googleButtonSelector).forEach((button) => {
        button.disabled = isLoading;
        button.dataset.originalLabel ??= button.innerHTML;
        button.innerHTML = isLoading ? 'Connecting to Google...' : button.dataset.originalLabel;
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
            return 'Google secure sign-in window was closed before completing.';
        case 'auth/unauthorized-domain':
            return 'This domain is not authorized for Firebase Auth. Check your console.';
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
        document.querySelectorAll(googleButtonSelector).forEach((button) => {
            button.addEventListener('click', () => {
                notify('⚠️ Firebase is not configured yet. Add real credentials to your local .env file.');
            });
        });
        return;
    }

    try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

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

        document.querySelectorAll(googleButtonSelector).forEach((button) => {
            button.addEventListener('click', async () => {
                try {
                    setGoogleButtonsLoading(true);
                    notify('⚡ Connecting to Google secure gateway...');
                    await signInWithPopup(auth, provider);
                } catch (error) {
                    notify(`⚠️ ${mapAuthError(error)}`);
                } finally {
                    setGoogleButtonsLoading(false);
                }
            });
        });

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
