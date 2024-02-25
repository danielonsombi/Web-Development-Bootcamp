// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick() {
//     alert("I got clicked");
// }

//The below code will be executed for just the first button.
// document.querySelector("button").addEventListener("click", function() {
//     alert("Meehn, I got clicked");
// });

//Use for loop

//Detect button click:
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        drumPlay(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    var keypressed = event.key;
    drumPlay(keypressed);

    buttonAnimation(keypressed);
});

function drumPlay(key) {    
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        default: 
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");

    //The class however needs to be removed after a delay of some few seconds. We can do this by:
    setTimeout (function() {
        activeButton.classList.remove("pressed");
    }, 100);
}