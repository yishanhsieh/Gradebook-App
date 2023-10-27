import { Text, View, StyleSheet, Image } from "react-native";
import { FirebaseFetcher } from "../FirebaseFetcher";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.heading}>Z101-Driving under Sea</Text>
        <Image
          style={{ width: 150, flex: 0.7 }}
          source={{
            uri: "https://static.wikia.nocookie.net/spongebob/images/9/95/Prehibernation_Week_083.png/revision/latest?cb=20200803180753",
          }}
        />
      </View>

      <View style={{ flex: 1, paddingLeft: 24, paddingRight: 24 }}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          Navigation instruction:
        </Text>
        <Text style={{ fontSize: 16 }}>
          The gradebook has two pages - homepage and gradebook page. These two
          main pages are navigated by DrawerNavigator. On gradebook page, click
          `more`button, student's profile page will show. Students' profile page
          and the gradebook page is navigated by StackNavigation.
        </Text>
        <FirebaseFetcher />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
