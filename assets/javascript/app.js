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

var firstGameInput = "";


$("#add-data").on("click", function (event) {
    event.preventDefault();

    firstTrainInput = moment($("#train-time").val().trim(), "HH:mm").format("HH:mm");

    // Error handler when First Train Time is outside of the 24h military time
    if (firstGameInput !== 'Invalid date') {
        // Grabs values from textboxes
        newGame.name = $("#train-name").val().trim();
        newGame.dest = $("#train-destination").val().trim();
        newGame.firstGame = firstGameInput;
        newGame.freq = $("#train-freq").val().trim();
    } else {
        alert("Please enter a valid Game Time");
        clearInput();
    }
    database.ref().push(newGame);

    // Clears all input boxes
    clearInput();
})
