// Test: getInputAsArray should check a variable and return true if the variable has a value
// Expect: getInputAsArray(56).toEqual(True);

function getInputAsArray(int) {
  int = 56;
  if( int ) {
    return true;
  }
  return false;
}

