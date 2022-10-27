import db from "../../fireBase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authSlice } from "./authReduser";


export const authSingUPUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const auth = await getAuth(db);
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: auth.currentUser.uid,
          login: auth.currentUser.displayName
        })
      );
    } catch (error) {
      console.log(error.message);
    }
        };
  
        export const authSingInUser =
          ({ email, password }) =>
          async (dispatch, getState) => {
            try {
              const auth = await getAuth(db);
              const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
              );
              console.log(user);
            } catch (error) {
              console.log(error.message);
            }
          };
