import "react-native-gesture-handler";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import GradeBookEntry from "./GradeBookEntry";
import { db } from "./../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function GradeBookBonus({ navigation }) {
  /* let students = ["Squidward", "Patrick", "Sandy", "SpongeBob", "Krab"]; */
  const [totalBonusPoints, setTotalBonusPoints] = useState(0);
  const [gradebook, setGradebook] = useState([]); // set students data from firestore

  useEffect(() => {
    const fetchData = async () => {
      const dbCol = collection(db, "students"); //get collection `students`
      const dbDocs = await getDocs(dbCol); //get documents
      const studentData = [];
      dbDocs.forEach((doc) => {
        studentData.push(doc.data());
        /*  dbDocs.forEach((doc) => console.log(doc.data())); */
      });
      setGradebook(studentData);
    };

    fetchData();
  }, []);

  console.log("gradebook", gradebook); // make sure we can get data from firebase

  //Class Bonus Message logic
  let BonusMsg = "No rewards.";
  if (totalBonusPoints === 5) {
    BonusMsg = "Candy for everyone!";
  }

  if (totalBonusPoints === 10) {
    BonusMsg = "Lambos for everyone!";
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "lightblue",
          justifyContent: "center",
        }}
      ></View>

      <View style={{ alignItems: "center", margin: 10, flex: 0.3 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: "red",
            justifyContent: "center",
          }}
        >
          Announcement
        </Text>
        <Text>Class's total bonus is {totalBonusPoints}</Text>
        <Text>{BonusMsg}</Text>
      </View>

      <View style={{ flex: 3 }}>
        <FlatList
          data={gradebook}
          renderItem={({ item }) => (
            <GradeBookEntry
              stuName={item.name}
              stuAbsence={item.absence}
              stuGrade={item.grade}
              stuImg={item.imgUrl}
              setTotalBonusPoints={setTotalBonusPoints}
              navigation={navigation}
            />
          )}
        />
      </View>
    </View>
  );
}
