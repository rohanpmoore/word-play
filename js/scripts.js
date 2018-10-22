$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var inputString = $("#input").val();
    var inputArray = inputString.split(' ');
    console.log(inputArray);
    var longWordArray = [];
    for (i = 0; i < inputArray.length; i++) {
      var word = inputArray[i];
      if(word.length >=3) {
        longWordArray.push(word);
      }
    };
    console.log(longWordArray);
    longWordArray.reverse();
    var finalString = inputString + " " + longWordArray.join(' ') + ".";
    $("#response").text(finalString);
    $("#hidden-things").show();
    $("#input").val('');
  });
});
