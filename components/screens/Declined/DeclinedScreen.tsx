import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Center, VStack, Heading, HStack, Code, Link, Text, Switch, useColorMode, Button, View, CloseIcon } from "native-base";
import React from "react";



export const Declined = () => {
  const navigation = useNavigation<StackNavigationProp<{
    Main: undefined,
  }>>()
  return (
    <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <CloseIcon size="10" mt="0.5" color="error.500" />
              <Heading size="lg" color="error.500">Payment was declined, please try again :C</Heading>
              <Button mt="2" colorScheme="gray"
               onPress={() => {
                navigation.push('Main')
              }}>Go to Main</Button>
            </VStack>
          </Center>

)};
