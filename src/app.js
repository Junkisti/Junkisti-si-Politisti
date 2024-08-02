// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { adjustFontColor, glow } from "./utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuBFKbE4HzrDdAcYhyfMSfvSChC5SfuFM",
    authDomain: "junkisti.firebaseapp.com",
    databaseURL: "https://junkisti-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "junkisti",
    storageBucket: "junkisti.appspot.com",
    messagingSenderId: "1020524932976",
    appId: "1:1020524932976:web:4e4e905cf19a302d09e9b5",
    measurementId: "G-BYXXPBQXEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// User variables
let user
let uid
let uref

onAuthStateChanged(auth, (user) => {
    if (user) {
        uid = user.uid;
    } else {
        console.log('out');
    }
});

signInAnonymously(auth)
    .then((userCredential) => {
        user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });

adjustFontColor()
glow()

function enterGame() {
    const start_page = document.getElementById('start-page')
    const game_page = document.getElementById('game-page')
    start_page.classList.add('hidden')
    game_page.classList.remove('hidden')
}
document.getElementById("start-button").onclick = enterGame;
document.getElementById("pregame-form").onsubmit = enterGame;