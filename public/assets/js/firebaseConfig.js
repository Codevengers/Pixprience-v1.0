/////////////////////////////////////////////// /* Firebase Setup */ //////////////////////////////////////////////////////////
var config = {
  apiKey: "AIzaSyAbMMApgdIfqkCMFhkmxVktyntvZtPweCM",
  authDomain: "pixprience.firebaseapp.com",
  databaseURL: "https://pixprience.firebaseio.com",
  projectId: "pixprience",
  storageBucket: "pixprience.appspot.com",
  messagingSenderId: "706748982586"
};


firebase.initializeApp(config);
console.log("Firebase config initialized ...");
// Firebase Upload Files
// let upload = document.getElementById('file-input');
// // console.log("Upload is : "+ upload);
// upload.addEventListener('change', uploadToFirebase, false);
