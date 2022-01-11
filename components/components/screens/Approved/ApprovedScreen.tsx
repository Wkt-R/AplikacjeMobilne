import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Center, VStack, Heading, HStack, Code, Link, Text, Switch, useColorMode, Button, View, CheckIcon } from "native-base";
import React from "react";



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
