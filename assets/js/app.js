$( document ).ready(function() {

  $(".menu-div").mouseover(function(){
    $(this).children(".menu-items").css({"background-color": "#748bb2", "color": "white"});
    $(this).children(".slidies").animate({right: "90px"}, 25);
  })
  $(".menu-div").mouseleave(function(){
    $(this).children(".menu-items").css({"background-color": "white", "color": "#748bb2"});
    $(this).children(".slidies").animate({right: "0px"}, 20)
  })

  var timer;
  $(".connect").click(function(){
    // $(".slidy-social").css("visibility", "visible");
    if($(".slidy-social").css("right") === "0px"){
      $(this).children(".menu-items").css({"background-color": "#748bb2", "color": "white"});
      $(".slidy-social").animate({right: "200px"}, 250);
      timer = setTimeout(function(){
        if($(".slidy-social").css("right") !== "0px"){
          $(".slidy-social").animate({right: "0px"}, 250)
        }
      }, 7000)
    }
    else{
      clearTimeout(timer);
      $("#social").animate({right: "0px"}, 300);
      $(this).children(".menu-items").css({"background-color": "white", "color": "#748bb2"});
    }

  })

  // $(".connect").mouseleave(function(event){
  //     event.stopPropagation()
  //   // $(".slidy-social").css("visibility", "hidden");
  //   $("#social").animate({right: "0px"}, 300);
  //   $(this).children(".menu-items").css({"background-color": "white", "color": "#748bb2"});

  // })


});

function openNav() {
  document.getElementById("mySidenav").classList.toggle("menu-toggle");
}


$(window).on("load", function() {
    $(".loader").fadeOut("slow");
  })


// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }