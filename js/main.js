var currentSection = 1;
var bg = $(".bg-gradient");
var bgTop = $(".bg-gradient-top")
var back = false;

// the graident colours, in order
// if you wanna change them do that here
var gradients = [
    "linear-gradient(#51c46a 50%, #036378)",
    "linear-gradient(#ff5a5a 50%, #42264c)",
    "linear-gradient(#ad2bcf 50%, #0be3f1)",
    "linear-gradient(#ff758c 50%, #ff7eb3)"
];



var currentGradient = 0;

// this is the function that changes the gradient
function transGrad (newGrad) {

    if (back) {
        bgTop.css("background", gradients[newGrad]);
        bgTop.css("opacity", 1);
    } else {
        bg.css("background", gradients[newGrad]);
        bgTop.css("opacity", 0);
    }

    back = !back;
}

// function for changing the squiggle
function squig (num) {
    document.querySelector(".squig1").classList.remove("active-squig");
    document.querySelector(".squig2").classList.remove("active-squig");
    document.querySelector(".squig3").classList.remove("active-squig");
    document.querySelector(".squig4").classList.remove("active-squig");

    var currentSquig = ".squig" + num;
    document.querySelector(currentSquig).classList.add("active-squig");
}



// this section is what detects what projec you have scrolled to, from highest to lowest
window.addEventListener('scroll', function(e) {


    if (window.pageYOffset >= $(".proj-4").offset().top-150) {

        //this changes the gradient
        if (currentSection != 4) {
            transGrad(3);
            currentSection = 4;

            // animates the squiggle on the nav
            squig(4);
        }

    } else if (window.pageYOffset >= $(".proj-3").offset().top-150) {
        if (currentSection != 3) {
            transGrad(2);
            currentSection = 3;

            squig(3);
        }

    } else if (window.pageYOffset >= $(".proj-2").offset().top-150) {
        if (currentSection != 2) {
            transGrad(1);
            currentSection = 2;

            squig(2);
        }

    } else if (window.pageYOffset >= $(".proj-1").offset().top-150) {
        if (currentSection != 1) {
            transGrad(0);
            currentSection = 1;

            squig(1);
        }
    }

});

$(document).ready(function() {
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
})

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});