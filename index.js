$("h1").addClass("big-title margin-50")
$("a").attr("herf", "https://www.yahoo.com");
$("h1").click(function() {
  $("h1").css("color","purple")
});

$("button").click(function(){
  $("h1").css("color", "purple")
});

$("input").keydown(function(key){
  console.log(event.key)
});

$("body").keydown(function(key){
  $("h1").html(event.key)
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "yellow")
});
