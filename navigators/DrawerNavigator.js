import "react-native-gesture-handler";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../components/HomePage";
import StackNavigator from "./StackNavigator";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="GradeBook" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
