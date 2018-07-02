
playerFlag = 0;
playerOne = "Add Player One";
playerTwo = "Add Player Two";
inputP1 = "";
inputP2 = "";

var config = {
    apiKey: "AIzaSyCEich3779kwUmBlQUaWP8y_GJTZfAODYM",
    authDomain: "rps-multiplayer-dfece.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-dfece.firebaseio.com",
    projectId: "rps-multiplayer-dfece",
    storageBucket: "",
    messagingSenderId: "809330832954"
  };
  firebase.initializeApp(config);

var database = firebase.database(); 



function addPlayer() {
    //currently set up with flag that toggles back and forth, may need a better solution for this. 
    if (playerFlag === 0) {
        var playerOne = $("#name-input").val().trim();
        $("#p1Note").text(playerOne);
        playerFlag++; 
        $("#name-input").val("");
        database.ref().update({
            player1: playerOne
        });
        
    } else { 
        var playerTwo = $("#name-input").val().trim();
        $("#p2Note").text(playerTwo); 
        $("#name-input").val("");
        $(".selection").css("visibility", "visible");
        database.ref().update({
            player2: playerTwo
        });
        playerFlag = 0; 
        
    }
    
};


$("#nameInputBtn").on("click", function() {
    // if player 1 add to player 1 
    event.preventDefault(); 
    addPlayer(); 
});

$(".selection").on("click", function() {
    inputP1 = $(this).attr("value");
    console.log("inputP1: " + inputP1); 
    database.ref().update({
        p1Move: inputP1
    });
    turnCounter++; 
})

//create user picks 





//on submit button add P1 name to Player Slot and log to Firebase

//on submit button if flag is up, then add to P2 slot and log to firebase. 

//once both players are added
//give options for RPS

//once both players have chosen, run RPS function to see who wins
//log winner and log loser

//function { if player disconnects 
//switch toggle off and allow customer to rechoose

//function {}

//need to write a RPS function
// if wins
//if looses
//if ties

//if your player one you see this


//if youre player two you see this

// database.ref().on("value", function(snapshot) {

//     // if players already exists
//     if (snapshot.child("player1").exists()) {
//         playerOne = snapshot.val().player1; 
//     //change the HTML to reflect the player
//         $("#p1Note").html(playerOne);
//         } else { $("#p1Note").html(playerOne);

//         }; 
//     // if player two exists 
//     if (snapshot.child("player2").exists()) {
//         playerTwo = snapshot.val().player2;
//         $("#p2Note").html(playerTwo);
//         } else { $("#p2Note").html(playerTwo);
//         };

// }); 