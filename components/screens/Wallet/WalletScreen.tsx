import * as React from "react";

import { Button, Center, Heading, VStack, View } from "native-base";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";

import { AsyncStorage } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export const Wallet = () => {
  const [funds, setFunds] = useState("");
  const [getFunds, setGetFunds] = useState("");
  const STORAGE_KEY = "@save_funds";

  const saveFundsFunction = () => {
    if (funds) {
      AsyncStorage.setItem("@save_funds", funds);

      setFunds("");

      alert("Funds Saved");
    } else {
      alert("Please fill field with funds");
    }
  };

  const getFundsFunction = () => {
    AsyncStorage.getItem("@save_funds").then((value) => setGetFunds(value));
  };

  useEffect(() => {
    getFundsFunction()
  })

  const navigation = useNavigation<
    StackNavigationProp<{
      Approved: undefined;
      Declined: undefined;
      Main: undefined;
    }>
  >();

  return (
    <VStack>
      <SafeAreaView>
        <Center>
          <Heading size="lg">Balance of your wallet is {getFunds} $</Heading>
          <Heading></Heading>
          <Heading>Add funds to your wallet</Heading>
        </Center>
        <TextInput
          style={styles.input}
          textAlign="center"
          value={funds}
          placeholder="Field to add your funds"
          keyboardType="numeric"
          maxFontSizeMultiplier={2}
          maxLength={9}
          onChangeText={(funds) => setFunds(funds)}
        />

        <View>
          <Button mt="2" colorScheme="gray" onPress={saveFundsFunction}>
            Save funds
          </Button>


          <Button
            mt="2"
            colorScheme="gray"
            onPress={() => {
              navigation.push("Main");
            }}
          >
            Go to Main
          </Button>
        </View>
      </SafeAreaView>
    </VStack>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 40,
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
