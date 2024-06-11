// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//   we declared a variable (name) and set it to 'Dane' as a string
//    we check if "name" is equal to 'Mary'. "name" isnt equal to 'Mary' so
//    we conosole.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  We declared a variable without a value (secret)
// We declared a Variable (code) and assigned it to A number (123)
//  A conditional that checks if code equals to 123
// We assigned the variable of 'secret' To a 'super' Inside the conditional statement.
// We multiply the value of variable 'code' By two.
// We checked a conditional check check if the new value of 'code' Is greater than 250
// If the conditional statement is true, then the code output is 'duper'
// The program prints out whether the variable (secret) Output 'super' or 'duper'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//   we create the variable (isStudent) and set it to the boolean value (true)
//   we create the variable (age) and set it to 34 the number
//   we create the variable (zip) and set it to 55407 the number
//    we check a condtional statment if (isStudent) is equal to (true) while also checking if zip is greater than the value 80,000. then we assigned console.log(' You're a student on the West Coast!') if that condition isnt met then
//    else we check another Conditional statements that if 'isStudent' Is equal to false or age is less than 30 then within that statement Console Is equal to false or age is less than 30 then within that statement Console.log('what are your hobbies')
// we check a another conditional statement that if isStudent Is equal to true then console.log('welcome to Prime!') but
// if none of the previous statemmets are fulfilled then it will console.log('how about the weather?'). Annd because isStudent is (true) then it will print (Welcome to Prime!)
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;


// swap the values for colorOne and colorTwo;

let colorOne = 'blue';
let colorTwo = 'red';


if (mix === true) {
  colorOne = 'purple';


  one colorOne is set to purple
fix;
if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';


}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

fix; the code is if temp is greater then 39 OR if time is greater than or equal to 4

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}


*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
  this code will console.log 'no entry' so in order to fix it( also it had no mention of an else part so i removed it)

      if(minAge <= age) {
     console.log('entry');
        }

}
*/ 
