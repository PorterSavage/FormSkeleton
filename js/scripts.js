$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var name = $("#nameInput").val();
    var age = $("#ageInput").val();
    $(".output").text(name);
    $(".output").append(age);

  });
});
