import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Shop } from "../types/shops";
import { Stars } from "./Stars";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

type Props = {
  shop: Shop;
};

const ShopReveiwItems: React.FC<Props> = ({ shop }: Props) => {
  const { name, place, imageUrl, score } = shop;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.placeText}>{place}</Text>
      <Stars score={score} />
    </View>
  );
};

export default ShopReveiwItems;

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
  },
  image: {
    height: IMAGE_WIDTH * 0.7,
    width: IMAGE_WIDTH,
  },
  nameText: {
    fontSize: 16,
    color: "#000",
    marginTop: 8,
    fontWeight: "bold",
  },
  placeText: {
    fontSize: 12,
    color: "#888",
    marginVertical: 8,
  },
});
