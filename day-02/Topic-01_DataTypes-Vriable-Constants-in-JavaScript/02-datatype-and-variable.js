/* 
  DataTypes: 
    
    i.) String (A set of characters)
    ii.) Number
    iii.) Boolean

    iv.) BigInt

    v.) Undefined
    vi.) null

    vii.) Symbol

    viii.) Object
  
*/

/*
  Variable:

    Variable can be declared in 3 ways in JavaScript

    i.) var
    ii.) let
    iii.) const

/* 
  i.) String (A set of characters)
*/
var userName = "Azlan Siddiqui";

/* 
  ii.) Number
*/
let userAge = 23;

/*
  iii.) Boolean
*/
const userRegistered = true;

/*
  viii.) Object
*/
let userSubject = ["HTML, CSS, JavaScript"];
let userMarks = {
  HTML: 38,
  CSS: 50,
  JavaScript: 45,
};

console.log(
  `User name is: ${userName}, he is ${userAge} years old, he is ${userRegistered}, he is enrolled in ${userSubject}.
  His HTML marks is ${userMarks.HTML}, 
  CSS marks is ${userMarks.CSS},
  And JavaScript marks is ${userMarks.JavaScript}`
);
