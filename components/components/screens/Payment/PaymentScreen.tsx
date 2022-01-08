import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { VStack } from "native-base";
import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";

export const Payment = () => {
  const [number, onChangeNumber] = React.useState();
  const navigation = useNavigation<
    StackNavigationProp<{
      Payment: undefined;
      Approved: undefined;
    }>
  >();

  return (
    <VStack>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          textAlign="center"
          value={number}
          placeholder="PIN Number"
          keyboardType="numeric"
          maxFontSizeMultiplier={2}
          maxLength={4}
        />
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
