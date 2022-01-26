import * as React from "react";

import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  NativeBaseProvider,
  VStack,
} from "native-base";

import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "../../config/Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const Register = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Login: undefined;
    }>
  >();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Center>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
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
                await createUserWithEmailAndPassword(auth, login, password);
                navigation.push("Login");
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Register
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
