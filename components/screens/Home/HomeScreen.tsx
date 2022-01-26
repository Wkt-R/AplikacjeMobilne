import {
  Button,
  Center,
  Code,
  HStack,
  Heading,
  Image,
  Link,
  Switch,
  Text,
  VStack,
  View,
  useColorMode
} from "native-base";

import { Login } from "../Login/LoginScreen";
import React from "react";
import { Register } from "../Register/RegisterScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Login: undefined;
    }>
  >();
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Center>
          <Image
            size={300}
            resizeMode={"contain"}
            source={require('./../../layout/logo.png')}
            alt="Logo"
          />
        </Center>
        <Heading size="lg">Welcome to BlikV2</Heading>
        <Button
          mt="2"
          colorScheme="gray"
          onPress={() => {
            navigation.push("Login");
          }}
        >
          Go to App!
        </Button>
      </VStack>
    </Center>
  );
};
