import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBpEEtbj_NZ_H_6ndTFtpPisrbk2_CrW1k",
  authDomain: "auth-f425e.firebaseapp.com",
  projectId: "auth-f425e",
  storageBucket: "auth-f425e.appspot.com",
  messagingSenderId: "332294173725",
  appId: "1:332294173725:web:2ba09a6be2b392a70342f4",
  measurementId: "G-2ZBR7898BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
