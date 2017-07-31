$( document ).ready(function() {

  $(".menu-div").mouseover(function(){
    $(this).children(".menu-items").css({"background-color": "#748bb2", "color": "white"});
    $(this).children(".slidies").animate({right: "90px"}, 25);
  })
  $(".menu-div").mouseleave(function(){
    $(this).children(".menu-items").css({"background-color": "white", "color": "#748bb2"});
    $(this).children(".slidies").animate({right: "0px"}, 3)
  })

});

function openNav() {
  document.getElementById("mySidenav").classList.toggle("menu-toggle");
}



// $('#house').click(function () {
//     if($("#home").is(':visible')){
//     $('#home').fadeOut(function () {
//         $('#categories').toggle('slide', {
//             direction: 'left'
//         }, 1000);
//     });
//     }
//     else{
//         $('#categories').toggle('slide', {
//             direction: 'left'
//         }, 1000, function(){ $('#cat_icon').fadeIn();});
//     }
// });


$(window).on("load", function() {
    $(".loader").fadeOut("slow");
  })


// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }