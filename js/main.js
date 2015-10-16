$("#top-section").bgswitcher({
  images: ["images/snoutwood-bg-2.jpg", "images/f1.jpg","images/snoutwood-bg-1.jpg"], // Background images
  effect: "fade", // fade, blind, clip, slide, drop, hide
  interval: 9000,
  duration: 4000,

});


// var images = ['images/homepage1.jpg','images/homepage5.jpg'];

// $('.images').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'});


// $(window).scroll(function() {
//     // var headerHeight = $("#top-section").height();
//     var headerHeight = $("#top-section").height();
//     var navHeight = $("#top-section").height();

//     // var navBar = $()
//     if ($(this).scrollTop() > headerHeight) {
//         $(".nav").addClass("header-fixed");
//         $("#top-section").css("padding-top",navHeight);
//     } else {
//         $(".nav").removeClass("header-fixed");
//         $("#top-section").css("padding-top","0");

//     }
// });

var nav = $(".nav").first(),
    navTop = nav.offset().top;

var windowPos = $(window).scrollTop();
var navPos = $('#navbar').offset().top;

if (windowPos > navPos) {
    $('#navbar').addClass('sticky-nav');
}


var waypoint = new Waypoint({
  element: document.getElementById('navbar'),
  handler: function() {
    $('#navbar').toggleClass('sticky-nav');
  }
})

$('.sticky-nav-wrapper').height($('#navbar').height());


$(window).on('resize', function(){
    $('.sticky-nav-wrapper').height($('#navbar').height());
});

jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});

jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});

$(function(){ 
  
// Scroll to anchor
// Source: http://css-tricks.com/snippets/jquery/smooth-scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {                
        $('html,body')
        // added the stop() function to prevent animations from queueing up 
        .stop().animate({
          scrollTop: target.offset().top - 135
        }, 1000).find("h2 > a")
        
        // added a top padding to make the title visible on my fixed top nav menu
        .css("padding-top","50px");
        return false;       
      }
    }
  });
  
//scroll to Top 
$(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $('.backToTop').fadeIn();
            } else {
                $('.backToTop').fadeOut();
            }
        });      

$('.backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeOutQuint");
        return false;
        });
        
//Scroll to bottom
$(window).scroll(function(){
            if ($(this).scrollTop() > 0 && $(this).scrollTop() < 500 ) {
                $('.backToBottom').fadeIn();
            } else {
                $('.backToBottom').fadeOut();
            }
        }); 

$('.backToBottom').click(function(){
        $("html, body").animate({ scrollTop: $(document).height()}, 800);
        return false;
        });     
});
