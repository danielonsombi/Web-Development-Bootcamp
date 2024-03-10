var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
})

//Select the id of the clicked button:
$(".btn").click(function(){
    //Get the ID of the clicked button
    var userChosenColour = $(this).attr("id");

    //Add the selected id to the click pattern array.
    userClickedPattern.push(userChosenColour);   

    //Play chosen color sound:
    playSound(userChosenColour);

    //Animate the pressed button with a set timeout:
    animatePress(userChosenColour);

    //Check the answer by passing the last item in the:
    checkAnswer(userClickedPattern.length-1);
});


//3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success!");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
    } else {
        console.log("wrong");

        //Play wrong.mp3 sound;
        playSound("wrong");

        //Add the game over class.
        $("body").addClass("game-over");

        //Remove the class after 200 ms
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)

        $("#level-title").text("Game Over, Press Any Key to Restart");

        //Call StartOver Function:
        startOver();
    }
}


function nextSequence() {
    userClickedPattern = [];
    //Increament level by 1;
    level += 1;

    //Change the h1 title
    $("#level-title").text("Level "+level);   

    //Generate a random number in between 0 and 3.
    var randomNumber = (Math.floor(Math.random() * 4));

    //Chose a random color using the random generated number
    var randomChosenColour = buttonColours[randomNumber];

    //Push the random number to the gamePattern;
    gamePattern.push(randomChosenColour);

    //Select a button using jQuery:
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //Play random color chosen sound:
    playSound(randomChosenColour); 
}

function playSound(name) {
    //Play a sound for the submitted name:
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

