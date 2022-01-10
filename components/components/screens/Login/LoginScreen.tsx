import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Main } from "../Main/MainScreen";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase/firebase";

export const Login = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Register: undefined;
      Main: undefined;
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
            <Input type="password" value={password} onChangeText={setPassword} />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "gray.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
            </Link>
          </FormControl>

          <Button
            mt="2"
            colorScheme="gray"
            onPress={async () => {
              try {

                console.log(await signInWithEmailAndPassword(auth, login, password))

                navigation.push("Main");
              } catch (error) {
                console.error(error)
              }
            }}
          >
            Login
          </Button>

          <HStack mt="6" justifyContent="center">
            {/* <Button mt="2" colorScheme="gray"
               onPress={() => {
                navigation.push('Register')
              }}>Sing up</Button> */}
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
