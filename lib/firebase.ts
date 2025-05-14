// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "votre_apiKey",
  authDomain: "le nom de votre projet.firebaseapp.com",
  projectId: "le nom de votre projet",
  storageBucket: "le nom de votre projet.firebasestorage.app",
  messagingSenderId: "...",
  appId: "...",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
