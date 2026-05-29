# CVPilot

CVPilot is a static HTML/CSS/JS web app with Firebase email/password, Google, and GitHub Sign-In support.

## Firebase Auth setup

Create a Firebase project, add a Web App, and enable these providers in **Authentication → Sign-in method**:

- Email/Password
- Google
- GitHub

Add these authorized domains in Firebase Authentication settings:

```text
localhost
127.0.0.1
shivam-dhoundiyal.github.io
```

## Local development

Install dependencies:

```bash
npm install
```

Create a local env file:

```bash
cp .env.example .env.local
```

Fill `.env.local`:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...firebaseapp.com
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
```

Run locally:

```bash
npm run dev
```

## GitHub Pages deployment

Add these repository secrets in GitHub:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

The deploy workflow builds the app with Vite and publishes `dist/` to the `gh-pages` branch.

## Security

Do not commit Gmail passwords, GitHub tokens, Firebase service account JSON, private keys, or other secrets. This app only uses public Firebase Web App config through `VITE_FIREBASE_*` environment variables.
