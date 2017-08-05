var slideIndex = 1; 
    
function plusDivs(n) {
    slideIndex += n;
    showDivs(slideIndex);
}

function showDivs(n) {
        
    var i;
    var x;
    var y;
    x = document.getElementsByClassName("slides");
    y = document.getElementsByClassName("caption");
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) {slideIndex = x.length; }
    for (i = 0 ; i < x.length ; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].style.display = "block";
} 

$(document).ready(function() {
    showDivs(slideIndex);
});

