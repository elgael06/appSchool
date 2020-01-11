

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig ={
    apiKey: "AIzaSyBMtaReonYkuDkw9vVmH4Q16MQf_FKRYYw",
    authDomain: "schoolapp-2234b.firebaseapp.com",
    databaseURL: "https://schoolapp-2234b.firebaseio.com",
    projectId: "schoolapp-2234b",
    storageBucket: "schoolapp-2234b.appspot.com",
    messagingSenderId: "555369032295",
    appId: "1:555369032295:web:d440e04b7e17e8fa8f42c2",
    measurementId: "G-LY8F3GYWCG"
}



firebase.initializeApp(firebaseConfig);

export default firebase;