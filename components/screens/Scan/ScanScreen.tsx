import * as React from "react";

import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function Scanner() {

  const navigation = useNavigation<StackNavigationProp<{
    Payment: {data: String},
    data: String,
  }>>()

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Bar code has been scanned successfully!`)
    navigation.push('Payment', {data: JSON.parse(data)});
  };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned &&  <Button title={'Tap to Scan Again'} color='gray'  onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
