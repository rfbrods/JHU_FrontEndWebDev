// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 
               "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var first_letter = (name.charAt(0)).toLowerCase();

    if (first_letter === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

  // define a function which returns the correct greeting given a name
  // "Good Bye" if name starts with J
  // "Hello" if name does not start with J
  function greeting(name) {    
    var first_letter = (name.charAt(0)).toLowerCase();
    
    if (first_letter === 'j') {
      return byeSpeaker.speakSimple(name);
    } else {
      return helloSpeaker.speakSimple(name);
    }
  }; 

  // create a new array using the above mapping function
  var namesGreeting = names.map(greeting);

  // print out the 
  for (var i = 0; i < namesGreeting.length; i++) {
    console.log(namesGreeting[i]);
  }

})(window);


// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1
//for (var i = 0; i < names.length; i++) {

  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  // var firstLetter =

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
 // if (first_letter === 'j') {
    // byeSpeaker.xxxx
 // } else {
    // helloSpeaker.xxxx
//  }
//}
