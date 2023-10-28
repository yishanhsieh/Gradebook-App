import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// data should come from students table in Firestore
/* let gradebook = {
  squidward: {
    grade: "80",
    absence: "7",
    imgUrl:
      "https://yt3.googleusercontent.com/YaJHh5SnF1sCzOnWvyXv2oF9aNZCHBBa6yBiqq_2OBF6zF2xM0_n60Y2nBe5tRQU_2qmXpr2=s900-c-k-c0x00ffffff-no-rj",
  },
  patrick: {
    grade: "76",
    absence: "5",
    imgUrl:
      "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:5232d654-03b3-458e-b30e-37a09e7492bd?quality=0.7&gen=ntrn&legacyStatusCode=true",
  },
  sandy: {
    grade: "90",
    absence: "4",
    imgUrl:
      "https://www.sosyncd.com/wp-content/uploads/2022/07/Celebrity-Database-ESTP-2.png",
  },
  spongebob: {
    grade: "79",
    absence: "8",
    imgUrl:
      "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
  },
  krab: {
    grade: "79",
    absence: "9",
    imgUrl:
      "https://cdn.costumewall.com/wp-content/uploads/2017/10/mr-krabs.jpg",
  },
}; */

export default function GradeBookEntry({
  stuName,
  stuImg,
  stuGrade,
  stuAbsence,
  setTotalBonusPoints,
}) {
  const navigation = useNavigation();
  const [bonusPoints, setBonusPoints] = useState(0);

  return (
    <View style={styles.gradebook}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 16 }}
          source={{ uri: stuImg }}
        />
        <Text>Name:</Text>
        <Text style={{ fontWeight: "bold" }}>{stuName}</Text>
      </View>

      {/*  manage right part of the gradebook, including grade, absense, bonus points, and addBonus button */}
      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "azure",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Text>Grade: {stuGrade}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "lightgoldenrodyellow",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "white",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderBottomLeftRadius: 5,
              borderWidth: 1,
              borderColor: "white",
              backgroundColor: "pink",
            }}
          >
            <Text>Absence:</Text>
            <Text>{stuAbsence}</Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Bonus: {bonusPoints}</Text>
            <Button
              title="+ 1p"
              onPress={() => {
                setBonusPoints(bonusPoints + 1);
                setTotalBonusPoints((prev) => prev + 1);
              }}
            />
          </View>
        </View>
      </View>

      <Button
        title="more"
        onPress={() => {
          navigation.navigate("StudentProfile", {
            stuName,
            stuImg,
            stuGrade,
            stuAbsence,
            bonusPoints,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gradebook: {
    backgroundColor: "navajowhite",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flex: 1,
  },
});
