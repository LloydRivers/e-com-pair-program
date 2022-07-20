import { initializeApp } from 'firebase/app'

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'



import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    writeBatch,
    query,
    getDocs,

} from 'firebase/firestore'

// const { 
// REACT_APP_FIREBASE_API_KEY,
// REACT_APP_FIREBASE_AUTH_DOMAIN,
// REACT_APP_FIREBASE_PROJECT_ID,
// REACT_APP_FIREBASE_STORAGE_BUCKET,
// REACT_APP_FIREBASE_SENDER_ID ,
// REACT_APP_FIREBASE_APP_ID ,} = process.env

const firebaseConfig = {
    apiKey: 'AIzaSyBXXze2f-x7StTABGFNRrpl853IPZ2nAkQ',//the mock key just enables firebase to work  as m providing an   string instead of an empty value
    authDomain:'ecom-pair-programming.firebaseapp.com',
    projectId:'ecom-pair-programming,',
    storageBucket:'ecom-pair-programming.appspot.com',
    messagingSenderId:'705240421548',
    appId:'1:705240421548:web:3af5c04e66e0c2bd03fb09'
}


// console.log(firebaseConfig.apiKey)
// console.log(firebaseConfig.authDomain)
// console.log(firebaseConfig.projectId)
// console.log(firebaseConfig.storageBucket)
// console.log(firebaseConfig.messagingSenderId)
// console.log(firebaseConfig.appId)

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


//creating a new instance of the provider class
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
});



export const auth = getAuth()

//sign in with popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const SignInWithGoogleRedirect = () => signInWithRedirect(auth, provider)




//initializing our firestore db

export const db = getFirestore();
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);


    })

    await batch.commit()
    console.log('done')
}


//helper function to isolate our app from 3rd part libraries that has data that might change
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}
export const createUserDocumentFromAuth = async (

    userAuth,

    //additional information object enable us to collect information tha is not passes to the  createUserWithEmailAndPassword method.
    additionalInformation = {},


) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot.exists())

    //check if the data exits
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {

                displayName,
                email,
                createdAt,
                ...additionalInformation
            }

            )
        } catch (error) {
            console.log('error creating document', error.message)
        }
    }

    return userDocRef;
}




export const createAuthUserWithEmailAndPassword = async (email, password) => {

    ///condition to check if email and password exists

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(email, password)
}




export const signAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(email, password)
}



//auth keeps the value of the current user
export const signOutUser = () => signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
