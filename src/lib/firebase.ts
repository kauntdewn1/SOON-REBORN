// Importe as funções que você precisa dos SDKs necessários
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Se você planeja usar Autenticação do Firebase
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Configuração do Firebase para seu aplicativo web
// Para SDKs do Firebase para JS v7.20.0 e posteriores, measurementId é opcional
const firebaseConfig = {
    apiKey: "AIzaSyBfzGkJ8HjbKIYoGde2g-1u3t3b2jFm6KQ",
    authDomain: "soon-freborn.firebaseapp.com",
    databaseURL: "https://soon-freborn-default-rtdb.firebaseio.com",
    projectId: "soon-freborn",
    storageBucket: "soon-freborn.firebasestorage.app",
    messagingSenderId: "244612573479",
    appId: "1:244612573479:web:003d7aecdbe47af23aa102",
    measurementId: "G-SN3NH4XH52"
  };

  // Inicialize o Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicialize o App Check
if (typeof window !== 'undefined') {
    initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'), // Substitua pela sua chave reCAPTCHA v3
        isTokenAutoRefreshEnabled: true
    });
}

// Exporte os serviços do Firebase
const db = getFirestore(app);
const auth = getAuth(app); // Exporte auth se precisar dele

export { app, db, auth };