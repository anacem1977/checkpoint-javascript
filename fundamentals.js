// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:

var foods = ["French Fries", "Tacos", "Hamburguer"];
console.log(foods);

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

var last = foods[2];
console.log(last);

// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:

var favoriteFoods = [];
console.log(favoriteFoods);

// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:

for (i=0; i<foods.length; i++) {
    favoriteFoods.push(foods[i]);
    console.log(favoriteFoods)
;}

// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:

var instructor = {inst1:"David",inst2:"Casey", inst3:"Leo"};
console.log(instructor);

// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:

instructor.hasofficehours = "true";
console.log(instructor);