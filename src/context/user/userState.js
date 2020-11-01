import React, { useReducer } from "react";

import UserContext from "./userContext";
import UserReducer from "./userReducer";
import {
  SET_USER,
  SET_TOAST,
  SET_LOADING,
  REMOVE_TOAST,
  SET_TOKEN,
} from "../types";
import { getAuthUser, getAuthToken } from "../../services/auth";
import { registerUser } from "../../services/user";

const UserState = ({ children }) => {
  const initialState = {
    user: {},
    token: "",
    toast: "",
    isToast: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Set dispatch and interact with useReducer
  const setDispatch = (type, payload) => dispatch({ type, payload });

  /********  Helper function to interact with useReducer   ******/
  const setLoadingDispatch = () => setDispatch(SET_LOADING, true);
  const removeLoadingDispatch = () => setDispatch(SET_LOADING, false);
  const setToastDispatch = (toast) => setDispatch(SET_TOAST, toast);
  const removeToastDispatch = () => setDispatch(REMOVE_TOAST, "");
  const setTokenDispatch = (token) => setDispatch(SET_TOKEN, token);
  const removeTokenDispatch = () => setDispatch(SET_TOKEN, "");
  const setUserDispatch = (user) => setDispatch(SET_USER, user);
  const removeUserDispatch = () => setDispatch(SET_USER, {});

  /*****  Main functions that interact with Components and states   *****/
  const handleSetUser = async (token) => {
    const { user, error } = await getAuthUser(token);

    if (error) {
      console.log(error);
      return;
    }

    setUserDispatch(user);
  };

  const handleLoginUser = async (values) => {
    removeToastDispatch();
    setLoadingDispatch();

    const { token, error } = await getAuthToken(values);

    removeLoadingDispatch();
    if (error) {
      setToastDispatch(error);
      return null;
    }

    setTokenDispatch(token);

    return token;
  };

  const handleResgisterUser = async (values) => {
    removeToastDispatch();
    setLoadingDispatch();

    const { token, error } = await registerUser(values);

    removeLoadingDispatch();

    if (error) {
      setToastDispatch(error);
      return null;
    }

    setTokenDispatch(token);

    return token;
  };

  const handleClearUserState = () => {
    // removeTokenFromLocalStorage();
    removeUserDispatch();
    removeTokenDispatch();
    removeLoadingDispatch();
    removeToastDispatch();
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        toast: state.toast,
        loading: state.loading,
        isToast: state.isToast,
        onRemoveToast: removeToastDispatch,
        onSetUser: handleSetUser,
        onLoginUser: handleLoginUser,
        onRegisterUser: handleResgisterUser,
        onClearUserState: handleClearUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
