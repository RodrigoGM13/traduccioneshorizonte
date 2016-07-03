 $(document).ready(function() {

$('.owl-carousel').owlCarousel({
    items: 3,
	loop:true,
    margin: 10,
	center: true,
    nav:true,
	dots: false,
	dotsEach: 5,
	stagePadding: 20,
	slideBy: 3,
	navText:["SIGUIENTE","ANTERIOR"],
    responsive:{
        0:{
            items:1,
			slideBy: 1,
        },
        768:{
            items:3,
			slideBy: 3,
        },
        1000:{
            items:5,
			slideBy: 3,
        }
    }
});
 
 
 // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('.main-page').offset().top + $('.main-page').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop >= mainbottom) {
        $('.main-header').addClass('past-main');
    } else {
        $('.main-header').removeClass('past-main');
    }

});
 

 
$("#header-logo").click(function(){
	$("html,body").animate({
        scrollTop: $('.main-page').offset().top 
    }, 1500);
 }); 
$("#servicios").click(function(){
	$("html,body").animate({
        scrollTop: $('.icon-page').offset().top 
    }, 1500);
 });
 $(".fa-angle-down").click(function(){
	$("html,body").animate({
        scrollTop: $('.icon-page').offset().top 
    }, 1500);
 });
 $("#portafolio").click(function(){
	$("html,body").animate({
        scrollTop: $('.portfolio-page').offset().top 
    }, 1500);
 });
 $("#contacto").click(function(){
	$("html,body").animate({
        scrollTop: $('.contact-page').offset().top 
    }, 1500);
 });
 
 });