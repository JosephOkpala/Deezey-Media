import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDAwuDsl-SzgY1MKCWbaupVahChbvHE2lI',
  authDomain: 'deezey-media.firebaseapp.com',
  projectId: 'deezey-media',
  storageBucket: 'deezey-media.appspot.com',
  messagingSenderId: '894970967755',
  appId: '1:894970967755:web:4d2c6b7493ff1aa6da8d4e',
  measurementId: 'G-2PXK7WJRN8',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
