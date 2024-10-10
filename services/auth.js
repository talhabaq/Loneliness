// import auth from '@react-native-firebase/auth';

// const registerUser = async (email, password) => {
//     try {
//         const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        
//         // Send email verification
//         await userCredential.user.sendEmailVerification();

//         return userCredential.user;
//     } catch (error) {
//         let errorMessage;
//         switch (error.code) {
//             case 'auth/email-already-in-use':
//                 errorMessage = "This email is already in use.";
//                 break;
//             case 'auth/invalid-email':
//                 errorMessage = "This email is invalid.";
//                 break;
//             case 'auth/weak-password':
//                 errorMessage = "This password is too weak.";
//                 break;
//             default:
//                 errorMessage = "An unknown error occurred.";
//                 break;
//         }
//         console.error(errorMessage); // Log the error message
//         throw new Error(errorMessage); // Optionally rethrow to handle it in your component
//     }
// };

// export default registerUser;
