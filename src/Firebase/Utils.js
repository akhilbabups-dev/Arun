import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './Config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile= async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const {uid}=userAuth;
    const userRef=firestore.doc(`users/${uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
        const {displayname,email}=userAuth;
        const timeStamp= new Date();
        try{
            await userRef.set({
                displayname,
                email,
                createdDate:timeStamp,
                ...additionalData
            });
        }catch(err){
            console.log(err);
        }
    }
    return userRef;
};