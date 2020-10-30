$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    let intArray = $("input#numberInputBox").val().split("");
    
    console.log(intArray);

    event.preventDefault();
  });
});