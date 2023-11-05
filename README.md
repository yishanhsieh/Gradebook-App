# INFO-I400/590 Gradebook Application
Made in React Native and Firebase

### Firebase hosted web url: https://fir-1ee6c.web.app/
- Notes: there should be a drawer menu icon on the upper left side, but I haven't figured out why the icon disappears, but it can be clicked.
  
![image](https://github.com/yishanhsieh/Gradebook-App/assets/47290910/2b20bacb-b0c9-4254-b30c-acb00eccef1b)

### Intialize a Firestore project
- Firestore setup
  1. Navigate to your Firebase Console.
  2. Go to the `Firestore Database` section and click on `Create Database`.
  3. Choose `Start in test mode` and `Enable`.
  4. After the database is ready, navigate to it and click on `Start Collection`.
  5. Enter `students` as the Collection ID and hit `Next` to create the collection.


### Add FirestoreConfig 
- create a .env, and save the apiKey in it.
- use EXPO_PUBLIC_API_KEY or dotenv
- use `expo-constants` package.
  ```
  npx expo install expo-constants
  ```
  and import ```import Constants from 'expo-constants'; ```


### Add/set data to Firestore
- reference: https://firebase.google.com/docs/firestore/manage-data/add-data
- setDoc:If the document does not exist, it will be created. If the document does exist, its contents will be overwritten with the newly provided data.



### Fetch data from Firestore
- resource: https://firebase.google.com/docs/firestore/query-data/get-data
- sample code:
```
useEffect(() => {
    const fetchData = async () => {
      const dbCol = collection(db, "students"); //get collection `students`
      const dbDocs = await getDocs(dbCol); //get documents
      const studentData = [];
      dbDocs.forEach((doc) => {
        studentData.push(doc.data());
      });
      setGradebook(studentData);
    };

    fetchData();
  }, []);
```


  

### Expo export as a web
- resource: https://docs.expo.dev/workflow/web/
- Install:
```npx expo install react-dom react-native-web @expo/webpack-config```
- SUPER IMPORTANT!!!! add the following config in App.json:
```
"web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro"
    }
```
- start the dev server, and you are supposed to get a web generated automatically.
```npx expo start --web ```
- Publish your web. Run the following code and you are supposed to have a new folder called `dist`
```npx expo export -p web ```


### Host your React Native app on Firebase
- resource:https://docs.expo.dev/distribution/publishing-websites/#firebase-hosting
- Install the Firebase CLI by running ```npm install -g firebase-tools ```
- run ```firebase init``` and choose host, or run ```firebase init hosting```, and MUST TYPE `dist` when the prompt asks the pbulic path.
- Then the following prompts questions: NO, NO, NO. (No overwrite, or your web will always be the dafault Firebase page)
- Deploy: run ```npm run deploy-hosting``` or ``` firebase deploy```




