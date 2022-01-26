import * as React from "react";

import { Button, Center, Heading, VStack, View } from "native-base";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export const Payment = ({ route }) => {
  const [number, setNumber] = React.useState("");
  const {
    data: { amount, name },
  } = route.params;
  const navigation = useNavigation<
    StackNavigationProp<{
      Payment: undefined;
      Approved: undefined;
      Declined: undefined;
      data: { amount: Number; name: String };
    }>
  >();

  return (
    <VStack>
      <SafeAreaView>
        <Center>
          <Heading>
            Kwota do zaplaty to: {amount} za {name}
          </Heading>
        </Center>
        <TextInput
          style={styles.input}
          textAlign="center"
          value={number}
          placeholder="PIN Number"
          keyboardType="numeric"
          maxFontSizeMultiplier={2}
          maxLength={4}
          onChangeText={(number) => setNumber(number)}
        />

        <View>
          <Button
            mt="2"
            colorScheme="gray"
            onPress={() => {
              if (number == "1111") {
                navigation.push("Approved");
              } else navigation.push("Declined");
            }}
          >
            Pay
          </Button>
        </View>
      </SafeAreaView>
    </VStack>
  );
};
