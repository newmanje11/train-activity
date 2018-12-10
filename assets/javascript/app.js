var config = {
    apiKey: "AIzaSyApZDfXVQPLujt2yPP2JeLHlV-6JEHkqcs",
    authDomain: "Train-activity-661b6.firebaseapp.com",
    databaseURL: "https://Train-activity-661b6.firebaseio.com",
    projectId: "Train-activity-661b6",
    storageBucket: "Train-activity-661b6.appspot.com",
    messagingSenderId: "427734489298"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

// Initial values
var currentTime = "";
var gameName = "";
var gameDest = "";
var gameTime = "";
var gameFreq = 0;
var timeDiff = 0;
var timeRemainder = 0;
var nextArrival = 0;
var minAway = 0;
var newGame = {
    name: gameName,
    dest: gameDest,
    freq: gameFreq,
    firstGame: gameTime,
}

var firstGameInput = "";


$("#add-data").on("click", function (event) {
    event.preventDefault();

    firstGameInput = moment($("#game-time").val().trim(), "HH:mm").format("HH:mm");

    // Error handler when First Train Time is outside of the 24h military time
    if (firstGameInput !== 'Invalid date') {
        // Grabs values from textboxes
        newGame.name = $("#game-name").val().trim();
        newGame.dest = $("#game-destination").val().trim();
        newGame.firstGame = firstGameInput;
        newGame.freq = $("#game-freq").val().trim();
    } else {
        alert("Please enter a valid Game Time");
        clearInput();
    }
    database.ref().push(newGame);

    // Clears all input boxes
    clearInput();
})

function clearInput() {
    $("#game-name").val("");
    $("#game-destination").val("");
    $("#game-time").val("");
    $("#game-freq").val("");
}


database.ref().on("child_added", function (snapshot) {
    // Error handler for when First Train Time is outside the 24h military time
    if (firstGameInput !== 'Invalid date') {
        gameName = snapshot.val().name;
        gameDest = snapshot.val().dest;
        gameTime = moment(snapshot.val().firstGame, "HH:mm");
        gameFreq = snapshot.val().freq;

    }

    var gameTimeConverted = moment(gameTime, "HH:mm").subtract(1, "years");

    currentTime = moment().format("HH:mm");
    console.log("Current Time: " + currentTime);

    timeDiff = moment().diff(moment(gameTimeConverted), "minutes");
    console.log("Time remaining: " + timeDiff);

    timeRemainder = timeDiff % gameFreq;
    console.log("Remaining Time: " + timeRemainder);

    minAway = gameFreq - timeRemainder;
    console.log(minAway);

    nextArrival = moment().add(minAway, "minutes").format("HH:mm");

    $(".GameInfo").append("<tr><td>" + gameName + "</td><td>" + gameDest + "</td><td>" + gameFreq + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td></tr>");


}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
