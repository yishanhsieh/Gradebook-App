import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//get students data
export const FirebaseFetcher = () => {
  const [gradebook, setGradebook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbCol = collection(db, "students"); //get collection `students`
      const dbDocs = await getDocs(dbCol); //get documents
      const studentData = [];
      dbDocs.forEach((doc) => {
        studentData.push(doc.data());
      });
      //dbDocs.forEach((doc) => console.log(doc.data()));
      //dbDocs.docs.forEach((doc) => console.log(doc.data())); //why it's the same???
      setGradebook(studentData);
    };

    fetchData();
  }, []);

  console.log(gradebook);
};
