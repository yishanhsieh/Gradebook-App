import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function StudentProfile({ route, navigation }) {
  const { stuName, stuImg, stuGrade, stuAbsence, bonusPoints } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7, justifyContent: "flex-end" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Student Profile
        </Text>
      </View>

      <View style={{ flex: 1.5, justifyContent: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 10 }}>
            <Image
              style={{ width: 120, height: 120, borderRadius: 16 }}
              source={{ uri: stuImg }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>
              Name: {stuName}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>
              Grade: {stuGrade}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>
              Absence: {stuAbsence}
            </Text>
            <Text style={{ fontSize: 16 }}>Bonus: {bonusPoints}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Text>Go back by clicking the 'Back' button</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
