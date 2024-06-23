import { FB_GoogleProvider, auth } from '@/config/firebase';
import {
	type User,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	type Auth,
} from 'firebase/auth';

export type TAuthState = {
	uid: string;
	name: string;
};

export const LoginWithGoogle = () => {
	signInWithPopup(auth, FB_GoogleProvider).then((result) => {});
};

const extractAuthData = (authUser: User) => {
	return {
		name: authUser.displayName ?? 'friend',
		uid: authUser.uid,
	};
};

export const logout = (auth: Auth) => {
	signOut(auth)
		.then((result) => {
			console.log('Logged out', result);
		})
		.catch((err) => console.error(err));
};

export const getCurrentUser = () => {
	if (!auth.currentUser?.uid) return false;
	return extractAuthData(auth.currentUser);
};

export const onAuthChanged = () =>
	onAuthStateChanged(auth, (user): TAuthState | undefined => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/auth.user
			const uid = user.uid;
			// ...
			return extractAuthData(user);
		} else {
			// User is signed out
			// ...
			console.log('Auth changed: logged out', user);
			return;
		}
	});
