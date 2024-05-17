
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.SERVER_SIDE_FIREBASE_API_KEY,
    authDomain: process.env.SERVER_SIDE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.SERVER_SIDE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.SERVER_SIDE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.SERVER_SIDE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.SERVER_SIDE_FIREBASE_APP_ID,
    measurementId: process.env.SERVER_SIDE_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const database = getDatabase(app);

export { app, database, storage }