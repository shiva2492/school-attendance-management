const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("SSMS-73c85ad6ea00.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ssms-57461.firebaseio.com"
});

var db = admin.database()
var ref = db.ref('/users');

ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
