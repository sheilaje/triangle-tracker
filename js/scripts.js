$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var input1 = parseInt($("#side1").val());
    var input2 = parseInt($("#side2").val());
    var input3 = parseInt($("#side3").val());

    // if (input1<=0 || input2<=0 || input3<=0){
    //   $(".result").empty().append("Please enter a positive number!");
    // }

    if ((input1 + input2) <= input3 || (input2 + input3) <= input1 || (input3 + input1) <= input2) {
      $(".result").empty().append("Oops, this isn't a triangle.");
    } else if (input1 === input2 &&  input2 === input3  && input3 === input1){
      $(".result").empty().append("It is an Equilateral Triangle.");
    } else if (input1 === input2 || input2 === input3 || input3 === input1) {
      $(".result").empty().append("That's an isoceles triangle!");
    } else if (input1 !== input2 && input2 !== input3  && input3 !== input1) {
      $(".result").empty().append("This is a scalene triangle!");
    } else {
      $(".result").empty().append("There was an error. Try again!");
    }
  });
});
