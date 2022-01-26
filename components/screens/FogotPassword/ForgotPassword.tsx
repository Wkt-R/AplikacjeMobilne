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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const ForgotPassword = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Register: undefined;
      Login: undefined;
      Main: undefined;
    }>
  >();

  const [userEmail, setUserEmail] = useState("");
  const auth = getAuth();

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
            <FormControl.Label>
              Please, write your e-mail to reset password
            </FormControl.Label>
            <Input value={userEmail} onChangeText={setUserEmail} />
          </FormControl>
          <FormControl>
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
                await sendPasswordResetEmail(auth, userEmail),
                  navigation.push("Login");
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
