$(document).ready(function() {
  function getInputAsArray(input) {
    const intArray = [input];
    const contains1 = (/1/);
    const contains2 = (/2/);
    const contains3 = (/3/);
    for(let i = (intArray[0] - 1); i >= 0; i -= 1) {
      if(contains3.test(i) === true) {
        intArray.unshift(", ");
        intArray.unshift("Won't you be my neighbor?");
      }else if(contains2.test(i) === true) {
        intArray.unshift(", ");
        intArray.unshift("Boop!");
      }else if(contains1.test(i) === true) {
        intArray.unshift(", ");
        intArray.unshift("Beep!");
      } else {
        intArray.unshift(", ");
        intArray.unshift(i);
      }
    }
  
    if(contains3.test(intArray[intArray.length - 1]) === true) {
      intArray[intArray.length - 1] = ("Won't you be my neighbor?");
    }else if(contains2.test(intArray[intArray.length - 1]) === true) {
      intArray[intArray.length - 1] = ("Boop!");
    }else if(contains1.test(intArray[intArray.length - 1]) === true) {
      intArray[intArray.length - 1] = ("Beep!");
    } else {
    }
    return intArray;
  }

  $("form#inputForm").submit(function(event) {
    $("#robogersResponse").append(getInputAsArray($("input#numberInputBox").val()));
    $("#response").show();
    event.preventDefault();
  });
});