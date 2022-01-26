import * as React from "react";

import { Login } from "../../screens/Login/LoginScreen";
import { Register } from "../../screens/Register/RegisterScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function TopMenu() {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}
