import firebase from "firebase/app"
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA19XXcMRDBoTp1Ob8adKEBeDssB_YZ0bY",
    authDomain: "tesisappgas.firebaseapp.com",
    databaseURL: "https://tesisappgas.firebaseio.com",
    projectId: "tesisappgas",
    storageBucket: "tesisappgas.appspot.com",
    messagingSenderId: "800966370931",
    appId: "1:800966370931:web:c79242a8a0789fb0d4ac06"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//firebase.analytics()

export default firebase
