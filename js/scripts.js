$(document).ready(function() {
  $("form#inputForm").submit(function(event) {


    $("#response").show();
    event.preventDefault();
  });
});