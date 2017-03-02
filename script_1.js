//ASSIGNMENT 3 PART 1

//Practice with Arrays (5 points)

//STEP 1
/*
var myFavs = new Array("La Femme Nikita", "Aliens", "Mary Poppins", "Vitus");
window.console.log(myFavs[1]);
*/

//STEP 2
/*
var movies = ["La Femme Nikita", "Chinatown", "Aliens", "Mary Poppins", "Vitus"];
window.console.log(movies[0]);
*/

//STEP 3
/*
var movies = ["La Femme Nikita", "Chinatown", "Casablanca", "Aliens", "Mary Poppins", "Vitus"];
window.console.log(movies.length);
*/

//STEP 4
/*
var movies = ["La Femme Nikita", "Chinatown", "Aliens", "Mary Poppins", "Vitus"];
delete movies[0];
for (var index in movies){
    window.console.log(movies[index]);
}
*/

//STEP 5 & 6
/*
var movies = ["La Femme Nikita", "Chinatown", "Aliens", "Mary Poppins", "Vitus", "Casablanca", "Raiders of the Lost Ark"];

for (var i = 0; i < movies.length; i++){
    window.console.log(movies[i]);
}
for (var index in movies){
    window.console.log(movies[index]);
}
*/

//STEP 7
/*
var movies = ["La Femme Nikita", "Chinatown", "Aliens", "Mary Poppins", "Vitus", "Casablanca", "Raiders of the Lost Ark"];

for (var index in movies){
    movies.sort();
    window.console.log(movies[index]);
}
*/

//STEP 8
/*
var i = 0;
var favMovies = ["La Femme Nikita", "Chinatown", "Aliens", "Mary Poppins", "Vitus", "Casablanca", "Raiders of the Lost Ark"];
var moviesList = [1, 2, 3, 4, 5, 6, 7];
var leastFavoriteMovies = ["Free Willy", "Warcraft", "PsychoII"];
var leastList = [1, 2, 3];
window.console.log("Movies I like:");
for(var i =0; i < favMovies.length; i++) 
    for(var i =0; i < moviesList.length; i++){
    window.console.log(favMovies[i] + " " + moviesList[i]); 
}
window.console.log("Movies I regret watching:");
for(var i =0; i < leastFavoriteMovies.length; i++) 
    for(var i =0; i < leastList.length; i++){        
    window.console.log(leastFavoriteMovies[i] + " " +leastList[i]);
    }
*/

//STEP 9
/*
var favMovies = [["Movies I like", ":"],["La Femme Nikita", 1],["Chinatown", 2],["Aliens", 3],["Mary Poppins", 4], ["Vitus", 5], ["Casablanca", 6],["Raiders of the Lost Ark", 7]];
var leastFavs = [["Movies I regret watching", ":"],["Free Willy", 1], ["Warcraft", 2], ["PsychoII", 3]];
window.console.log("Concat list reverse sort:");
var movies = favMovies.concat(leastFavs);
movies.reverse();
movies.forEach(function(item) {	
    window.console.log(item[0] + " " + item[1]);}
);
*/

//STEP 10
/*
var favMovies = [["Movies I like", ":"],["La Femme Nikita", 1],["Chinatown", 2],["Aliens", 3],["Mary Poppins", 4], ["Vitus", 5], ["Casablanca", 6],["Raiders of the Lost Ark", 7]];
var leastFavs = [["Movies I regret watching", ":"],["Free Willy", 1], ["Warcraft", 2], ["PsychoII", 3]];
var movies = favMovies.concat(leastFavs);
var lastItem = movies.pop();
    for(var index in lastItem){
    window.console.log(lastItem[0].toString());
}
*/

//STEP 11
/*
var favMovies = [["La Femme Nikita", 1],["Chinatown", 2],["Aliens", 3],["Mary Poppins", 4], ["Vitus", 5], ["Casablanca", 6],["Raiders of the Lost Ark", 7]];
var leastFavs = [["Movies I regret watching", ":"],["Free Willy", 1], ["Warcraft", 2], ["PsychoII", 3]];
var movies = favMovies.concat(leastFavs);
var firstItem = movies.shift();
for(var index in firstItem){
    window.console.log(firstItem[0].toString());
}
*/

//STEP 12
/*
var favMovies = ["La Femme Nikita", "Chinatown", "Aliens", "Mary Poppins", "Vitus", "Casablanca", "Raiders of the Lost Ark"];
var leastFavs = ["Free Willy", "Warcraft", "PsychoII"];
var movies = favMovies.concat(leastFavs);
movies.splice(7, 8,  "The Killers", "My Life as a Dog", "Star Wars");
for(var index in movies){
    window.console.log(movies[index].toString());}                                       
*/

//STEP 13
/*
var employee1 = [];
employee1[0] = 3982;
employee1[1] = "John Smith";
employee1[2] = "Gardener";
employee1[3] = "Grounds Keeping";
employee1[4] = true;

var employee2 = [];
employee2[0] = 4565;
employee2[1] = "Jane Doe";
employee2[2] = "Scientist";
employee2[3] = "Biology";
employee2[4] = true;

var employees = employee1.concat(employee2);
    window.console.log(employees[6]);
*/


//STEP 14
/*
var employee1 = [];
employee1[0] = 3982;
employee1[1] = "John Smith";
employee1[2] = "Gardener";
employee1[3] = "Grounds Keeping";
employee1[4] = true;

var employee2 = [];
employee2[0] = 4565;
employee2[1] = "Jane Doe";
employee2[2] = "Scientist";
employee2[3] = "Biology";
employee2[4] = true;

var employees = employee1.concat(employee2);
for (index in employees){
    window.console.log(employees[1] + "," + " " + employees[6]);
}
*/

//STEP 15
/*
var employee1 = [];
employee1[0] = 3982;
employee1[1] = "John Smith";
employee1[2] = "Gardener";
employee1[3] = "Grounds Keeping";
employee1[4] = "true";

var employee2 = [];
employee2[0] = 4565;
employee2[1] = "Jane Doe";
employee2[2] = "Scientist";
employee2[3] = "Biology";
employee2[4] = "true";

var employee3 = [];
employee3[0] = 4565;
employee3[1] = "Mary Jane";
employee3[2] = "Chemist";
employee3[3] = "Science";
employee3[4] = "false";

var employees = employee1.concat(employee2, employee3);
for (index in employees)
window.console.log(employees[1] + "," + " " + employees[11]);
*/

//STEP 16 - filter function
/*
var movieRank = ["Jaws", 1, "Repo Man", 2, "Office Space", 3,"Clash of the Titans", 4, "Kill Bill", 5];
var movieTitle = movieRank.filter(function(item){
    return typeof item == "string";
    for(var index in movieTitle){    
    }
});window.console.log(movieTitle);
*/


//Practice with Functions (5 points)

//STEP 1
/*
var displayMessage = function (name){
     window.console.log("Hi, my name is" + " " + name);
    
}
  displayMessage("Leah"); 

*/

//STEP 2
/*
function calculate(num1, num2){
    window.console.log(num1 * num2);
    
}
calculate(10, 2);
*/


//STEP 3
/*
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
function showEmployee(employees){
    
}
*/









