import * as  React from "react";

import { Button, Center, CheckIcon, Code, HStack, Heading, Link, Switch, Text, VStack, View, useColorMode } from "native-base";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export const Approved = () => {
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
              <CheckIcon size="10" mt="0.5" color="emerald.500" />
              <Heading size="lg" color="emerald.500">Payment was approved :)</Heading>
              <Button mt="2" colorScheme="gray"
               onPress={() => {
                navigation.push('Main')
              }}>Go to Main</Button>
            </VStack>
          </Center>

)}
