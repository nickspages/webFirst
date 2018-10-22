jQuery(document).ready(function($){
    $('span.searchtoggle').on('click', function (e) {
    $('body').toggleClass("show");
});

});

jQuery(document).ready(function($){
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1600);
        return false;
      }
    }
  });
});
});

jQuery(document).ready(function ($) {
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});
});

jQuery(document).ready(function ($) {
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("scrolled2");
    } else {
        $("body").removeClass("scrolled2");
    }
});
});

jQuery(document).ready(function ($) {
$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('.views-field.views-field-field-background-image img, .field.field-name-field-background-hero.field-type-image.field-label-hidden img').css('top', parseInt(-x / 2) + 'px');
}); 
});

jQuery(document).ready(function ($) {
$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('.view.view-own-a-suite-locations-list img').css('top', parseInt(-x / 20) + 'px');
}); 
});


jQuery(document).ready(function ($) {
    $('div#block-block-26 .right-side .textwrap, div#block-block-12 .textwrap, div#block-block-13 .txtwrap, .view.view-own-a-suite-locations-list .views-row-2, .view.view-own-a-suite-locations-list .views-row-4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 10
       });
});

jQuery(document).ready(function ($) {
    $('div#block-block-26 .left-side .textwrap, div#block-block-28 .textwrap, .view.view-own-a-suite-locations-list .views-row-1, .view.view-own-a-suite-locations-list .views-row-3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 10
       });
});


jQuery(document).ready(function ($) {
    $('div#homemask2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipOutX',
        offset: 30
       });
});

jQuery(document).ready(function ($) {
    $('.whitecanvas .views-row, div#leaflet-map, .view.view-locations-list-contact .views-row, .list .views-row:nth-child(n+2), #block-system-main form input, #block-system-main .view .views-row, .field.field-name-field-services.field-type-multifield.field-label-above .field-item, .field.field-name-field-products.field-type-text.field-label-above .field-item, .field.field-name-field-model-photos.field-type-image.field-label-above .field-item, .field.field-name-field-hours.field-type-multifield.field-label-above .field-item, footer .region.region-footer .block, div#block-views-all-stylists-available-block-1 .views-row').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 10
       });
});

jQuery(document).ready(function ($) {
    $('.ctawide p, .ctawide a').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 10
       });
});

jQuery(document).ready(function ($) {
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
});

jQuery(document).ready(function ($) {
  $('#nav-icon').click(function(){
    $('header').toggleClass('opennav');
  });
});

jQuery(document).ready(function ($){
$("#homemask").show(); 
setTimeout(function() { 
    $("#homemask").fadeOut(1000); 
}, 2000);
}); 

jQuery(document).ready(function ($){
$("#homemask-interior").show(); 
setTimeout(function() { 
    $("#homemask-interior").fadeOut(500); 
}, 1000);
}); 


jQuery(document).ready(function ($) {
$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('.view-frontpage-hero .views-field.views-field-field-background-image img').css('top', parseInt(-x / 2) + 'px');
}); 
});

jQuery(document).ready(function ($) {
$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('.view.view-locations-list-contact img').css('top', parseInt(-x / 10) + 'px');
}); 
});


jQuery(document).ready(function ($) {
function scroll(speed) {
    $('.page-cape-coral-monitor').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}
speed = 12000;

scroll(speed)
setInterval(function(){scroll(speed)}, speed * 2);
});

jQuery(document).ready(function ($) {
function scroll(speed) {
    $('.page-fort-myers-monitor').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}
speed = 22000;

scroll(speed)
setInterval(function(){scroll(speed)}, speed * 2);
});


jQuery(document).ready(function ($) {
function scroll(speed) {
    $('.page-cape-coral-monitor-02162017').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}
speed = 14000;

scroll(speed)
setInterval(function(){scroll(speed)}, speed * 2);
});


jQuery(document).ready(function($){
    $("header div#block-system-main-menu .content ul li a, div#block-block-17 .content a").addClass("button hvr-radial-out");
});

jQuery(document).ready(function($){
    $("div#block-menu-menu-clone-main-menu a, div#block-menu-menu-locations a, div#block-block-10 a").addClass("button hvr-forward");
});

/*
jQuery(document).ready(function ($) {
$(document).ready(function() {
    $(".front video").on("contextmenu",function(){
       return false;
    }); 
});
});*/









jQuery(document).ready(function($){
$(function(){
  setTimeout(function(){ 
      $("div#block-block-27").fadeIn(500);
  }, 5000);
  e.preventDefault();
});

   $('a#close-btn').on('click', function(e) {
      $('div#block-block-27').fadeOut(500); 
      $("video").each(function () { this.pause() }); 
      e.preventDefault();
    });

});



jQuery(document).ready(function($){
$(".front video").prop('muted', true);

  $("#mute-video").click( function (){
    if( $("div#block-block-28 video, div#vidwrappage video").prop('muted') ) {
          $("div#block-block-28 video, div#vidwrappage video").prop('muted', false);
    } else {
      $("div#block-block-28 video, div#vidwrappage video").prop('muted', true);
    }
  });
});

jQuery(document).ready(function($){
    $('#mute-video').on('click', function (e) {
    $('#mute-video').toggleClass("sound");
});

});

jQuery(document).ready(function($){
$('.field.field-name-field-phone-no .field-item').text(function(i, text) {
    return text.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
});
});

jQuery(document).ready(function($){
$('.field.field-name-field-phone-no .field-item').each(function(){
    $(this).wrapInner('<a href="tel:' + $(this).html() + '" />');
});
});