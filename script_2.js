//COMM644 Assignment 3, Part 2

//The Rock, Paper, Scissors Game (10 points)
/*
var computer = Math.random();
var result = computer;
var userChoice = prompt("Enter rock, paper or scissors.");
var choice = userChoice.toLowerCase();
//computer 
if (result < 0.34) {
    result = "rock";
    //console.log(result);
}else if (result <= 0.67){
     result = "paper";
     //console.log(result);
}else {
    result = "scissors";
}
window.console.log(result);

//compare user - computer
if (choice === result){
    window.alert("I'ts a tie!");   
}
else if (choice === "rock"){
    if (result === "scissors"){
        window.alert("You won!");
      }
      else {
          window.alert("Paper wins!");
      }  
}else if (choice === "paper"){
    if (result === "rock"){
        window.alert("You win!");
      }
      else {
          window.alert("Scissors wins!");
      }  
}else if (choice === "scissors"){
    if (result === "paper"){
        window.alert("You win!");
      }
      else {
          window.alert("Rock wins!");
      }  
}
else if (choice != "rock" || "paper" || "scissors"){
    window.confirm("How about you try that again? Click OK then refresh the page to play again.  Good Luck!");
}
*/

//The Basic Calculator (10 points)
/*
var ask1 = prompt("Enter a number");
var ask2 = prompt("Enter another number");
var toDo = prompt("Enter 'add', 'subtract' 'multiply' or 'divide'");
var num1 = parseFloat(ask1);
var num2 = parseFloat(ask2);
var choice = toDo.toLowerCase();
function calculate (num1, num2) {
    var val1 = num1 + num2;
    var val2 = num1 - num2;
    var val3 = num1 * num2;
    var val4 = num1 / num2;
switch (choice){
    case "add":
        window.alert(val1);
        break;
    case "subtract":
        window.alert(val2);
        break;
        case "multiply":
        window.alert(val3);
        break;
        case "divide":
        window.alert(val4);
        break;
    default:
    case choice !== "add" || "subtract" || "multiply" || "divide":
        alert("Does not compute! Please refresh the page and try again."); 
}
}calculate(num1, num2);
*/


//Death by JavaScript (4 points each for 20 points total)
/*
//STEP 1

var myFunction1 = function wordScramble(scramble){  
return scramble.split('').sort().join(''); 
};  
window.console.log(myFunction1("supercalifragilisticexpialidocious"));  

//STEP 2

var myFunction2 = function firstLetter(upper){  
  var myString = upper.split(' ');  
  var newString = [];        
  for(var i = 0; i<myString.length; i++){        newString.push(myString[i].charAt(0).toUpperCase()+myString[i].slice(1)); 
  }  
  return newString.join(' '); 
}; 
console.log(myFunction2("hello world here i am again"));


//STEP 3

var myFuntion3 = function sometimesY(myPhrase)
{
  var vowels = "aeiou";
  var numVowels = 0;
  for(var i = 0; i < myPhrase.length ; i++)
  {
    if (vowels.indexOf(myPhrase[i]) !== -1)
    {
      numVowels += 1;
    }
  
  }
  return numVowels;
};
window.console.log(myFuntion3("how many vowels in this phrase?"));

//STEP 4
var myFunction4 = function random(password)
{
var myText = "";
var toChooseFrom = "0123456789*&^%$#@!>+=aAbBcCdDeEfFgGhH";
for(var i=0; i < password; i++ )
{  
myText += toChooseFrom.charAt(Math.floor(Math.random() * toChooseFrom.length));
}
return myText;
};
window.console.log(myFunction4(8));

//STEP 5
var myFunction5 = function strLength(name)
  {
  return name.reduce(function(x, y) 
  {
    return x.length > y.length ? x : y;
  });
};
window.console.log(myFunction5(["Iceland", "China", "France", "Cuba", "United Kingdom"]));
*/