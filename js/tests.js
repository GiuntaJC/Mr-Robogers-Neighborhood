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

// Test: getInputAsArray should check a variable convert it to an array
// Expect: getInputAsArray(inputNumber).toEqual([9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  return intArray;
}

// Test: getInputAsArray should check a variable convert it to an array,then add 0 to the front
// Expect: getInputAsArray(inputNumber).toEqual([9]);
const inputNumber = parseInt("9");
function getInputAsArray(input) {
  const intArray = [input];
  intArray.unshift(0);
  return intArray;
}

