import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyDO1p9-UXQamSs5FyxEfg3Riwbhet8Yc5U",
    authDomain: "my-project-1494926905457.firebaseapp.com",
    databaseURL: "https://my-project-1494926905457.firebaseio.com",
    projectId: "my-project-1494926905457",
    storageBucket: "my-project-1494926905457.appspot.com",
    messagingSenderId: "960349712042",
    appId: "1:960349712042:web:235584fb29dd9e0bddaad3",
    measurementId: "G-S5E5FYCK1H"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
export  default app ;