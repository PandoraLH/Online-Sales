import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC8a4wj13Em3Q_ynoMtO0d9dDIYDg7OEdo",
	authDomain: "csdlnc-4170d.firebaseapp.com",
	projectId: "csdlnc-4170d",
	storageBucket: "csdlnc-4170d.appspot.com",
	messagingSenderId: "414427686063",
	appId: "1:414427686063:web:05bfb0106e3247ba76e05a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const setUserInfo = async (userID, info) => {
	const userRef = doc(firestore, `users/${userID}`);
	await setDoc(userRef, info);
};

export const checkUserInfoExist = async (uid) => {
	const userRef = doc(firestore, `users/${uid}`);
	const snapshot = await getDoc(userRef);
	return snapshot.exists();
};

export const getUserRole = async (uid) => {
	const userRef = doc(firestore, `users/${uid}`);
	const snapshot = await getDoc(userRef);
	return snapshot.get('role')
}

export const getUserData = async (uid) => {
	const userRef = doc(firestore, `users/${uid}`);
	const snapshot = await getDoc(userRef);
	const fullData = snapshot.data()
	delete fullData.uid
	return fullData
}

export const popUpWithGoogle = async () => {
	const { user } = await signInWithPopup(auth, googleProvider);
	const { uid } = user;
	const isExist = await checkUserInfoExist(uid);
	return { user, isExist };
};

export const popUpWithFacebook = async () => {
	const { user } = await signInWithPopup(auth, facebookProvider);
	const { uid } = user;
	const isExist = await checkUserInfoExist(uid);
	return { user, isExist };
}

export const createUserUsingEmailPassword = async ({ email, password, role, province, username }) => {
	if (!email || !password || !role) return;
	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	const { uid } = user;
	await setUserInfo(uid, { uid, role, province, username });
	return user;
};

export const signInUsingEmailPassword = async (email, password) => {
	if (!email || !password) return;
	const { user } = await signInWithEmailAndPassword(auth, email, password);
	return user;
};

export const signOutUser = async () => {
	await signOut(auth);
};