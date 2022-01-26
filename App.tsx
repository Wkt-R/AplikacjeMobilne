import "react-native-gesture-handler";

import * as React from "react";

import { NativeBaseProvider, extendTheme } from "native-base";

import { Approved } from "./components/screens/Approved/ApprovedScreen";
import { ChangePassword } from "./components/screens/ChangePassword/ChangePasswordScreen";
import { Declined } from "./components/screens/Declined/DeclinedScreen";
import { ForgotPassword } from "./components/screens/FogotPassword/ForgotPassword";
import { Home } from "./components/screens/Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Payment } from "./components/screens/Payment/PaymentScreen";
import { QRGenerator } from "./components/screens/QRGenerator/QRGeneratorScreen";
import TabMenu from "./components/menu/TabMenu/TabMenu";
import TopMenu from "./components/menu/TopMenu/TopMenu";
import { Wallet } from "./components/screens/Wallet/WalletScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={TopMenu} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Main" component={TabMenu} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Approved" component={Approved} />
          <Stack.Screen name="Declined" component={Declined} />
          <Stack.Screen name="QRGenerator" component={QRGenerator} />
          <Stack.Screen name="Wallet" component={Wallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
