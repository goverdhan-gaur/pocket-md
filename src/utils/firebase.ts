
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBcQ35iNy71zoiLeT835ABm0SueEOpip98',
    authDomain: 'pocket-md-test.firebaseapp.com',
    projectId: 'pocket-md-test',
    storageBucket: 'pocket-md-test.appspot.com',
    messagingSenderId: '650699528253',
    appId: '1:650699528253:web:caf4b263868d3fa967f254',
    measurementId: 'G-E8YQZKQFF1',
    databaseURL: 'https://pocket-md-test-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const database = getDatabase(app);

export { app, database, storage }