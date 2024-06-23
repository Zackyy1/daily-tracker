import { auth } from '@/config/firebase';
import { Button } from '../buttons/Button';
import {
	LoginWithGoogle,
	getCurrentUser,
	logout,
} from '@/utils/authentication/AuthenticationUtils';

export const LoginScreen = () => {

  console.log(auth)
	return (
		<div>
			{!!getCurrentUser() ? (
				<Button onClick={() => logout(auth)} text='Logout' />
			) : (
				<Button onClick={LoginWithGoogle} text='Login' />
			)}
		</div>
	);
};
