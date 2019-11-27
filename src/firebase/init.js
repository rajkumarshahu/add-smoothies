import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDNqiZNZoPMJ0ar-zAqu3SlTPHtoILYkyg",
    authDomain: "add-smoothies.firebaseapp.com",
    databaseURL: "https://add-smoothies.firebaseio.com",
    projectId: "add-smoothies",
    storageBucket: "add-smoothies.appspot.com",
    messagingSenderId: "624891806595",
    appId: "1:624891806595:web:ab365cfa2e247da604ecb6",
    measurementId: "G-P7EVV3XQJN"
  };

  const firebaseApp = firebase.initializeApp(config)
  firebaseApp.firestore().settings({ timestampsInSnapshots : true })

  export default firebaseApp.firestore()