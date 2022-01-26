import * as React from "react";

import { Main } from "../../screens/Main/MainScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Scan from "../../screens/Scan/ScanScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function TabMenu() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#78716c' }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: "Main",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarLabel: "Kod QR",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
