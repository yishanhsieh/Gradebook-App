import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function App() {
  // add data to firebase
  /*  useEffect(() => {
    const addData = async () => {
      await addDoc(collection(db, "students"), {
        name: "Gary",
        grade: 100,
        absence: 3,
        imgUrl:
          "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Gary-the-Snail.SpongeBob-SquarePants.webp",
      });

      await addDoc(collection(db, "students"), {
        name: "Squidward",
        grade: 80,
        absence: 7,
        imgUrl:
          "https://yt3.googleusercontent.com/YaJHh5SnF1sCzOnWvyXv2oF9aNZCHBBa6yBiqq_2OBF6zF2xM0_n60Y2nBe5tRQU_2qmXpr2=s900-c-k-c0x00ffffff-no-rj",
      });
      await addDoc(collection(db, "students"), {
        name: "Patrick",
        grade: 76,
        absence: 5,
        imgUrl:
          "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:5232d654-03b3-458e-b30e-37a09e7492bd?quality=0.7&gen=ntrn&legacyStatusCode=true",
      });
      await addDoc(collection(db, "students"), {
        name: "Sandy",
        grade: 90,
        absence: 4,
        imgUrl:
          "https://www.sosyncd.com/wp-content/uploads/2022/07/Celebrity-Database-ESTP-2.png",
      });
      await addDoc(collection(db, "students"), {
        name: "Spongebob",
        grade: 79,
        absence: 8,
        imgUrl:
          "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
      });
      await addDoc(collection(db, "students"), {
        name: "krab",
        grade: 79,
        absence: 9,
        imgUrl:
          "https://cdn.costumewall.com/wp-content/uploads/2017/10/mr-krabs.jpg",
      });
    };

    addData();
  }, []); */

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
