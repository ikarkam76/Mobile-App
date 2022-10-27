import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useRoute } from "../router";
import { authChangeStateUser } from "../redux/auth/authOperations";

export const Main = () => {
    const { stateChange } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authChangeStateUser());
    }, []);

    const routing = useRoute(stateChange);

    return (
      <NavigationContainer>
        {routing}
        <StatusBar style="auto" backgroundColor="transparent" />
      </NavigationContainer>
    );
}