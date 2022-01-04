import {
    Center,
    VStack,
    Heading,
    HStack,
    Code,
    Link,
    Text,
    Switch,
    useColorMode,
    Button,
    View,
  } from "native-base";
  import React from "react";


  import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";

  export const Main = () => {
    return (
      <>
        <Center
          _dark={{ bg: "gray.900" }}
          _light={{ bg: "gray.50" }}
          px={4}
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <Heading size="lg">Welcome to Main Screen</Heading>
          </VStack>
        </Center>
      </>
    );
  };