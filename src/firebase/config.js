import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyBuPibl2dm-xKn0eU6ePQJ0QzqUkGI9bRg",
    authDomain: "userapp-7515e.firebaseapp.com",
    databaseURL: "https://userapp-7515e.firebaseio.com",
    projectId: "userapp-7515e",
    storageBucket: "userapp-7515e.appspot.com",
    messagingSenderId: "967414304254",
    appId: "1:967414304254:web:18e9c2aa2e4960feb7c4af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;