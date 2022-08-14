import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDZMIe9otoN6ap9fAC_2rOeGMgOZ3SSiNg",
  authDomain: "react-auth-8499b.firebaseapp.com",
  projectId: "react-auth-8499b",
  storageBucket: "react-auth-8499b.appspot.com",
  messagingSenderId: "208379520088",
  appId: "1:208379520088:web:a201999fe5080dda6d962d",
  measurementId: "G-87H8XZCVRH"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
