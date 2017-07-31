$( document ).ready(function() {

  $(".menu-items").mouseover(function(){
    $(this).next(".slidies").animate({right: "90px"}, 25)
  })
  $(".menu-items").mouseleave(function(){
    $(this).next(".slidies").animate({right: "0px"}, 3)
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