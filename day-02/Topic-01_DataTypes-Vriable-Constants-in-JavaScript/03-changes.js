let userName = "Azlan Siddiqui";
console.log(userName);

userName = "Azlan Nasim Siddiqui";
console.log(userName);

const userAge = 21;
console.log(userAge);

userAge = 26;
console.log(userAge);
/*
  The above log will give an error as 
    TypeError: Assignment to constant variable.

  Because the variables declared by `const` keyword can't be re-declared and re-assigned.
*/
