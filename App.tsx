import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getShops } from "./src/lib/firebase";

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  };

  const shopItems = shops.map((shop, i) => (
    <View key={i.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.location}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text>{shopItems}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
