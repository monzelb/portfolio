$( document ).ready(function() {

  $(window).on('resize', function(event){
    var windowSize = $(window).width(); // Could've done $(this).width()
      if(windowSize < 600){
        $("#mySidenav").hide();
      }
      else{
        $("#mySidenav").show();
      }
  });

  setTimeout(function(){
    openNav();
  }, 1000)

  $(".menu-div").mouseover(function(){
    $(this).children(".menu-items").css({"background-color": "#748bb2", "color": "white"});
    $(this).children(".slidies").animate({right: "120px"}, 25);
  })
  $(".menu-div").mouseleave(function(){
    $(this).children(".menu-items").css({"background-color": "white", "color": "#748bb2"});
    $(this).children(".slidies").animate({right: "0px"}, 20)
  })





  var timer;
  $(".connect, #coffee").click(function(){
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

  $('.proj').hover(
        function(){
            $(this).find('.caption').fadeIn(250).css("display","inline-block"); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').fadeOut(250); //.fadeOut(205)
        }
    ); 

    $('.scroll').on('click',function (e) {
      e.preventDefault();
      console.log(this)
      console.log(this.hash)

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
        });
    });

  // $(".connect").mouseleave(function(event){
  //     event.stopPropagation()
  //   // $(".slidy-social").css("visibility", "hidden");
  //   $("#social").animate({right: "0px"}, 300);
  //   $(this).children(".menu-items").css({"background-color": "white", "color": "#748bb2"});

  // })


});

$(function() {
    Pace.on("done", function(){
        $("#contents").fadeIn(1000);
        console.log("Sdf");
    });
});




function openNav() {
  document.getElementById("mySidenav").classList.toggle("menu-toggle");
}


$(window).on("load", function() {
    $(".loader").fadeOut("slow");
  })

