import { Shop } from "./shops";

export type RootStackParamLis = {
  Home: undefined;
  Shop: { shop: Shop };
};
