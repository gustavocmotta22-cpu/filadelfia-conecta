// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAz8bWXxXmAmowcTRc_jOLclEB4LMIPEmQ",
  authDomain: "filadelfia-conecta.firebaseapp.com",
  projectId: "filadelfia-conecta",
  storageBucket: "filadelfia-conecta.firebasestorage.app",
  messagingSenderId: "805912319328",
  appId: "1:805912319328:web:7a1401be7e60c53a413a05",
  measurementId: "G-SJ5T02S2GB"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth    = getAuth(app)
export const db      = getFirestore(app)
export const storage = getStorage(app)
export default app
