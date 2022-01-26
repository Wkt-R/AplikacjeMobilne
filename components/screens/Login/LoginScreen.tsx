import * as React from "react";

import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  VStack,
} from "native-base";

import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "../../config/Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const Login = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Register: undefined;
      Main: undefined;
      ForgotPassword: undefined;
    }>
  >();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Center>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={login} onChangeText={setLogin} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={setPassword}
            />
          </FormControl>

          <Button
            mt="2"
            colorScheme="gray"
            onPress={async () => {
              try {
                await signInWithEmailAndPassword(auth, login, password);
                navigation.push("Main");
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Login
          </Button>
          <Button
            mt="2"
            colorScheme="gray"
            onPress={() => {
              navigation.push("ForgotPassword");
            }}
          >
            Forgot password?
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
