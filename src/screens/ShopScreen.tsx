import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamLis } from "../types/navigtion";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamLis, "Shop">;
  route: RouteProp<RootStackParamLis, "Shop">;
};

const ShopScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  return (
    <View>
      <Image source={{ uri: shop.imageUrl }} style={styles.image} />
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 200,
  },
});
