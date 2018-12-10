var config = {
    apiKey: "AIzaSyApZDfXVQPLujt2yPP2JeLHlV-6JEHkqcs",
    authDomain: "train-activity-661b6.firebaseapp.com",
    databaseURL: "https://train-activity-661b6.firebaseio.com",
    projectId: "train-activity-661b6",
    storageBucket: "train-activity-661b6.appspot.com",
    messagingSenderId: "427734489298"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

// Initial values
var currentTime = "";
var gameName = "";
var gameDest = "";
var gameTime = "";
var gamenFreq = 0;
var timeDiff = 0;
var timeRemainder = 0;
var nextArrival = 0;
var minAway = 0;
var newTrain = {
    name: gameName,
    dest: gameDest,
    freq: gameFreq,
    firstGame: gameTime,
}
