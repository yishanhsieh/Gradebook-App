import "react-native-gesture-handler";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GradeBookBonus from "../components/GradeBookBonus";
import { createStackNavigator } from "@react-navigation/stack";
import StudentProfile from "../components/StudentProfile";

export default function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GradeBookBonus"
        component={GradeBookBonus}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentProfile"
        component={StudentProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
