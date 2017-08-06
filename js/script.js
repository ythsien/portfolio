$(document).ready(function () { // jQuery
    
    // loader
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
    
   // change the text color in projects when hover
    $(".work").hover(function(){
        $(this).children().css("color", "#FFFFFF"); 
    }, function(){
        $(this).children().css("color", "#464646");
    });
    
    // hover effect for article button
    $(".article button").hover(function(){
        $(this).css("box-shadow", "none");
        $(this).css("background-color", "rgba(0,0,0,0.7)");
        $(this).css("color", "#F2F2F2");
    },function(){
        $(this).css("box-shadow", "3px 3px 6px rgba(0,0,0,0.15)");
        $(this).css("background-color", "transparent");
        $(this).css("color", "#202020");
    });

});





