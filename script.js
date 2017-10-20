var width = window.screen.availWidth;

$(document).ready( function()
{
  if(width<=460)
  {
    var right = $("#main-bar").css("right");
    $("#main-bar").css({"right" : right-5+"px"});
    $(".kbd").css({"font-size" : "50%"});
    $(".kbd-holder").css({"font-size" : "50%"});
  }
});
console.log(width);
