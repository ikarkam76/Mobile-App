import db from "../../fireBase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { authSlice } from "./authReduser";

const auth = getAuth(db);

export const authSingUPUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });
      const userUpdateProfile = await {
        userId: auth.currentUser.uid,
        login: auth.currentUser.displayName,
      };
      dispatch( authSlice.actions.updateUserProfile(userUpdateProfile) );
    } catch (error) {
      console.log(error.message);
    }
        };
  
export const authSingInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword( auth, email, password );
    } catch (error) {
      console.log(error.message);
    }
  };

export const authChangeStateUser = () =>
  async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            login: user.displayName,
          })
        );
        dispatch(
          authSlice.actions.authStateChange({
            stateChange: true,
          })
        );
      } else {
        dispatch(
          authSlice.actions.authStateChange({
            stateChange: false,
          })
        );
      }
    });
  } catch (error) {
    console.log(error.message);
  }
  };

export const authSingOutUser = () =>
  async (dispatch, getState) => {
    try {
      await signOut(auth);
      dispatch(authSlice.actions.authSingOut());
    } catch (error) {
      console.log(error.message);
    }
  };