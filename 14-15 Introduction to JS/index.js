/*Section 14 and 15 - Introduction to Javascript all code: */

// var maxCharacters = 140;
// var enteredCharacters = prompt("Type your Tweet below:");

// enteredCharacters = enteredCharacters.slice(0,140);

// var characterlength = enteredCharacters.length;

// var remCharacters = maxCharacters - characterlength;

// alert("You have written " + characterlength + ", you have " + remCharacters + " Characters left.")

//var yourName = prompt("Enter Your name: ")

//alert("Hello " + yourName.slice(0,1).toUpperCase() + yourName.slice(1,yourName.length).toLowerCase());

// var dogAge = prompt("Please enter the age of your dog: ")

// humanAge = (dogAge - 2) * 4 + 21.

// alert('The equivalent himan Age for your dog is ' + humanAge + " Years!");


// function getMilk(Amount) {  
//     var cost = 1.5;
//     var bottles =Math.floor(Amount / 1.5);
    
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("buy " + calcBottles(Amount, 1.5) + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return Amount % 1.5; //Remainder of this division
// }

// var change = getMilk(5);

// console.log(change);

// function calcBottles(startingMoney, costPerBottle) {
//   var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//   return numberOfBottles;
// }


// var crusher = prompt('Hello Lover, Enter your name:');
// var crushie = prompt("Enter the crushie name: ");

// var probMapenzi = Math.floor((Math.random() * 100)) + 1;

// if (probMapenzi > 70) {
//     alert("You Mapenzi probability is " + probMapenzi + "%. You love each other like crazy");
// } else if (probMapenzi > 30 && probMapenzi <= 70){
  
// } else {
//     alert("You Mapenzi probability is " + probMapenzi + "%. Just give up simp!");
// }


// function bmiCalculator (weight, height) {
//     var BMI = weight/(height * height)
    
//     if (BMI < 18.5) {
//        interpretation = "Your BMI is "+ BMI +", so you are underweight."; 
//     } else if (BMI >= 18.5 && BMI <= 24.9) {
//         interpretation = "Your BMI is "+ BMI +", so you have a normal weight."
//     } else if (BMI > 24.9) {
//         interpretation = "Your BMI is "+ BMI +", so you are overweight."
//     }
//     return interpretation;
// }

// bmiCalculator(60,2);

// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

// var guestName = prompt("Enter your name: ");

// if (guestList.includes(guestName)) {
//     alert("Welcome " + guestName);
// } else {
//     alert("Sorry, "+ guestName + " maybe next time!");
// }

//Fizz Buzz Trial 1:

//var number = prompt("Enter a number between 1 and 100:");
// function printFizzBuzz(number) {
//     var div3 = Boolean;
//     var div5 = Boolean;
    
//     if (number < 1 || number > 100) {
//         alert("number must be between 1 and 100");
//     } else {
//          div3 = false;
//          div5 = false;
        
//         if ((number % 3) === 0) {
//             div3 = true;
//         }
//         if ((number % 5) === 0) {
//             div5 = true;
//         }
    
//         if (div3 && div5) {
//             console.log("FizzBuzz");
//         } else if (div3) {
//             console.log("Fizz")
//         } else if (div5) {
//             console.log("Buzz")
//         }  else
//             console.log(number);
//     }
// }



//FizzBuzz Challenge:
// var number = 1;
// var output = [];

// function fizzBuzz()
// {   
//     var div3 = Boolean;
//     var div5 = Boolean;
    
//     if (number < 1 || number > 100) {
//         alert("number must be between 1 and 100");
//     } else {
//          div3 = false;
//          div5 = false;
        
//         if ((number % 3) === 0) {
//             div3 = true;
//         }
//         if ((number % 5) === 0) {
//             div5 = true;
//         }
    
//         if (div3 && div5) {
//             output.push("FizzBuzz");
//         } else if (div3) {
//             output.push("Fizz")
//         } else if (div5) {
//             output.push("Buzz")
//         }  else
//             output.push(number);
//     }

//     number++;
//     console.log(output);
// }



// var output = [];
// var number = 1;

// function fizzBuzz() {
//     while(number <= 100) {
//         if (number % 3 === 0 && number % 5 === 0)
//         {
//             output.push("FizzBuzz");
//         } else if (number % 3 === 0) {
//             output.push("Fizz");
//         } else if (number % 5 === 0) {
//             output.push("Buzz");
//         } else {
//             output.push(number);
//         }
//        number++; 
//     }

//     console.log(output);
// }


// var bottles = 99;
// var bottleWord = " "

// function beer()
// {
//     while (bottles > 0) {
//         if (bottles > 1) { 
//             bottleWord = " bottles";
//         } else {
//             bottleWord = " bottle"
//         }
        
//         console.log(bottles + bottleWord+" of beer on the wall, "+ bottles + bottleWord+" of beer.");
//             bottles--;

//         console.log("Take one down and pass it around, "+ bottles + bottleWord+" of beer on the wall.");
//     }

//     console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
// }


// var output = [];

// function fizzBuzz() {
//     for(var number = 1; number <= 100; number++) {
//         if (number % 3 === 0 && number % 5 === 0)
//         {
//             output.push("FizzBuzz");
//         } else if (number % 3 === 0) {
//             output.push("Fizz");
//         } else if (number % 5 === 0) {
//             output.push("Buzz");
//         } else {
//             output.push(number);
//         }
       
//     }
//     console.log(output);
// }

var prevNo = 0;
var output = [];
var NewVal = 0;

function fibonacciGenerator(n)
{       
    if (n === 1) {
       output = [0]; 
    } else if (n === 2) {
       output = [0, 1]; 
    } else {
        output = [0, 1]; 
        prevNo = 1;
        
        for(var i = 2; i< n; i++) {
            NewVal = prevNo + output[output.length-2];
            output.push(NewVal);
            prevNo = NewVal;
        } 
    }
    return output;
}