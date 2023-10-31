import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAECNngNrYTyyo-pCN0XR-6ZHyyM2S3DNU",
    authDomain: "cp3-hybrid.firebaseapp.com",
    projectId: "cp3-hybrid",
    storageBucket: "cp3-hybrid.appspot.com",
    messagingSenderId: "998436154571",
    appId: "1:998436154571:web:8d55f1516e720fd1fbff4e"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export async function login(user) {
    await signInWithEmailAndPassword(auth, user["email"], user["password"])
        .then((userCredentials) => {
            console.debug("Logando usuário com o email: " + JSON.stringify(userCredentials["user"]["email"]))
        })
        .catch(async (error) => {
            console.debug("Error " + error.code + ": " + error.message)

            await register(user)
        }) 
}

async function register(user) {
    await createUserWithEmailAndPassword(auth, user["email"], user["password"])
        .then(async (userCredentials) => {
            console.debug("Criando usuário com o email: " + JSON.stringify(userCredentials["user"]["email"]))

            await login(user)
        })
        .catch((error) => {
            console.debug("Error " + error.code + ": " + error.message)
        })
}

export function getUser() {
    return auth["currentUser"]
}


const db = getFirestore(app)

export async function insert(data) {
    await addDoc(collection(db, "tasks"), data)
    .catch((error) => {
        console.debug(error)
    })
}

export async function select() {
    const snapshot = await getDocs(query(
        collection(db, "tasks"), 
        where("user_email", "==", auth["currentUser"]["email"])
    ))
    const tasks = []

    snapshot.forEach((doc) => {
        tasks.push(doc)
    })

    return tasks
}
