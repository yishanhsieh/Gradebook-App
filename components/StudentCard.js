import { StyleSheet, Text, View, Image } from "react-native";

export default function StudentCard() {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: "https://b.thumbs.redditmedia.com/Bj7tvLWpeJ_tesAypjLbZmk-PqXE1rDOxOtWlS3vZHo.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
