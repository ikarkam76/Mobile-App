import {firebase} from "../../fireBase/config";
import { authSlice } from "./authReduser";

const { updateUserProfile, authStateChange, authSingOut} = authSlice.actions;

export const authSingUPUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = await firebase.auth().currentUser;
      await user.updateProfile({ displayName: login });
      const { uid, displayName } = await firebase.auth().currentUser;
      dispatch( updateUserProfile({userId:uid, login:displayName}) );
    } catch (error) {
      console.log(error.message);
    }
        };
  
export const authSingInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await firebase.auth().signInWithEmailAndPassword( email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authChangeStateUser = () =>
  async (dispatch, getState) => {
  try {
    await firebase.auth().onAuthStateChanged((user) => {
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
      await firebase.auth().signOut();
      dispatch(authSingOut());
    } catch (error) {
      console.log(error.message);
    }
  };