import * as React from "react";

import {
  Button,
  Center,
  Divider,
  FormControl,
  Input,
  NumberInput,
  ScrollView,
  Text,
} from "native-base";
import { Image, SafeAreaView, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import SvgQRCode from "react-native-qrcode-svg";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const QRGenerator = () => {
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigation = useNavigation<
    StackNavigationProp<{
      Main: undefined;
      Wallet: undefined;
    }>
  >();

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Center>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Input
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="0"
              ></Input>
              <FormControl.HelperText>
                Give your product an amount
              </FormControl.HelperText>
            </FormControl>
            <Divider />
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={name}
                onChangeText={setName}
                placeholder="Name of the product"
              ></Input>
              <FormControl.HelperText>
                Give your product a name
              </FormControl.HelperText>
            </FormControl>
            <Text></Text>
            <SvgQRCode size={300} value={JSON.stringify({ amount, name })} />
            <Text></Text>
            <Button
              mt="2"
              colorScheme="gray"
              onPress={() => {
                navigation.push("Main");
              }}
            >
              Go to Main
            </Button>
          </Center>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
