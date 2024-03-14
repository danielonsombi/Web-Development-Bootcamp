//Native/Common js approach
//var generateName = require("sillyname");

//ECMAScript approach: 
import generateName from "sillyname";
import superheroes  from "superheroes";

var sillyname = generateName();

console.log(`My name is ${sillyname}.`);

//Superhero name:
var superHero = superheroes.random();
console.log(`I am ${superHero}!`);