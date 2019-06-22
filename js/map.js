$(function() {
    $('.map1').click(function(e) {
        $(this).find('div.map1').css('pointer-events', 'all');
    }).mouseleave(function(e) {
        $(this).find('div.map1').css('pointer-events', 'none');
    });
})




//when you hover the div element for at least 1 second (works best for me - set it to whatever you like)
//and clears the timeout/set it to "none" again when the mouse leaves the element.

// var maptimer;

// $(".google-maps").hover(function(){
//     maptimer = setTimeout(function(){
//         $(".google-maps").find("iframe").css("pointer-events", "auto");
//     },1000);
// },function(){
//     clearTimeout(maptimer);
//     $(".google-maps").find("iframe").css("pointer-events", "none");
// });