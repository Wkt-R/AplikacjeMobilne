import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Main } from '../screens/Main/Main';
import { Scan } from '../screens/Scan/Scan';


const Tab = createMaterialBottomTabNavigator();

export default function TabMenu() {
  return (
    <Tab.Navigator>
            <Tab.Screen name="Main" component={Main} options={{tabBarLabel: "Main",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )}}></Tab.Screen>
            <Tab.Screen name="Scan" component={Scan} options={{tabBarLabel: "Kod QR",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            )}}></Tab.Screen>
    </Tab.Navigator>
  );
}