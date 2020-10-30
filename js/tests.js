// The tests below were made out of misunderstanding the instructions and are only kept to document my progress
  
  // Test: getInputAsArray should check a variable and return true if the variable has a value
  // Expect: getInputAsArray(56).toEqual(True);

    function getInputAsArray(int) {
      int = 56;
      if( int ) {
        return true;
      }
      return false;
    }

    // Test: getInputAsArray should check a variable and split it into an array
    // Expect: getInputAsArray("56").toEqual(["5"], ["6"]);

    function getInputAsArray(int) {
      int = "56";
      const intArray = int.split("");
      return intArray;
    }

    // Test: getInputAsArray should take an external variable and convert it to an array
    // Expect: getInputAsArray("56").toEqual(["5"], ["6"]);

    const inputNumber = "56";
    function getInputAsArray(int) {
      const intArray = int.split("");
      return intArray;
    }
    getInputAsArray(inputNumber);

// The tests below this point were done after I figured out my mistake

// Test: getInputAsArray should check a variable and convert it to an array
// Expect: getInputAsArray(inputNumber).toEqual([9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  return intArray;
}

// Test: getInputAsArray should check a variable for a number, convert it to an array,then add 0 to the front
// Expect: getInputAsArray(inputNumber).toEqual([0, 9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  intArray.unshift(0);
  return intArray;
}

// Test: getInputAsArray should check a variable for a number, convert it to an array,then add 0 to the front 3 times
// Expect: getInputAsArray(inputNumber).toEqual([0, 0, 0, 9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  for(let i = 1; i <= 3; i += 1) {
    intArray.unshift(0);
  }
  return intArray;
}

// Test: getInputAsArray should check a variable for a number, convert it to an array,then add zeroes to the front equal to the input number - 1
// Expect: getInputAsArray(inputNumber).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  for(let i = (intArray[0] - 1); i >= 0; i -= 1) {
    intArray.unshift(0);
  }
  return intArray;
}

// Test: getInputAsArray should check a variable for a number, convert it to an array,then add numbers to the front to count down from the starting value
// Expect: getInputAsArray(inputNumber).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  for(let i = (intArray[0] - 1); i >= 0; i -= 1) {
    intArray.unshift(i);
  }
  return intArray;
}

// Test: getInputAsArray should check a variable for a number, convert it to an array,then add numbers to the front to count down from the starting value, and convert single digit numbers to the right phrases
// Expect: getInputAsArray(inputNumber).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11]);
const inputNumber = parseInt("11");
function getInputAsArray(input) {
  const intArray = [input];
  for(let i = (intArray[0] - 1); i >= 0; i -= 1) {
    if(i === 3) {
      intArray.unshift("Won't you be my neighbor?");
    }else if(i === 2) {
      intArray.unshift("Boop!");
    }else if(i === 1) {
      intArray.unshift("Beep!");
    } else {
    intArray.unshift(i);
    }
  }
  return intArray;
}