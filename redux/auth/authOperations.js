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

const { updateUserProfile, authStateChange, authSingOut} = authSlice.actions;

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
      dispatch( updateUserProfile(userUpdateProfile) );
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
        dispatch( updateUserProfile({
            userId: user.uid,
            login: user.displayName,
          })
        );
        dispatch( authStateChange({
            stateChange: true,
          })
        );
      } else {
        dispatch( authStateChange({
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
      dispatch(authSingOut());
    } catch (error) {
      console.log(error.message);
    }
  };