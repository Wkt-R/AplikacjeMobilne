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
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";

import { AsyncStorage } from "react-native";
import { Main } from "../Main/MainScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "../../config/Firebase/firebase";
import { firebase } from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const ChangePassword = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Register: undefined;
      Login: undefined;
      Main: undefined;
    }>
  >();

  const [userProvidedPassword, setuserProvidedPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(
    user.email,
    userProvidedPassword
  );

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
            <FormControl.Label>Old password</FormControl.Label>
            <Input
              value={userProvidedPassword}
              onChangeText={setuserProvidedPassword}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>New Password</FormControl.Label>
            <Input
              type="password"
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "gray.500",
              }}
              alignSelf="flex-end"
              mt="1"
            ></Link>
          </FormControl>

          <Button
            mt="2"
            colorScheme="gray"
            onPress={async () => {
              try {
                console.log(
                  await reauthenticateWithCredential(user, credential),
                  await updatePassword(user, newPassword)
                );

                navigation.push("Main");
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
