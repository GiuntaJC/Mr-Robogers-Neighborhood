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