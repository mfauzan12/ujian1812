import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBgvCD9BNrCUy5G7Sv8nybwOvmfT7kaVFE",
    authDomain: "ujian1812.firebaseapp.com",
    databaseURL: "https://ujian1812-default-rtdb.firebaseio.com",
    projectId: "ujian1812",
    storageBucket: "ujian1812.appspot.com",
    messagingSenderId: "388498189082",
    appId: "1:388498189082:web:e5bb8484be6f8ade5b1aa3",
    measurementId: "G-LWY7144X10"
};
let app = Firebase.initializeApp(config);
export const db = app.database();