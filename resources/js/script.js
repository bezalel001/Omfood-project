/*global $ document */
$(document).ready(function() {
  
  /* For the sticky navigation*/
  $('.js--section-features').waypoint(function(direction){
    if(direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky')
    }
  }, {
  offset: '60px'
});
  
  /* Scroll on button click: although we can achieve this with css only. */
  $('.js--scroll-to-plan').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });
  
  // Animatio on scroll
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
  offset: '50%'
  });
  
    $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
  offset: '50%'
  });
    $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
  offset: '50%'
  });
    $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
  }, {
  offset: '50%'
  });
  
  /* mobile nav*/
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon');
    
    
    nav.slideToggle(200);
    
    if (icon.hasClass('menu')){
      icon.children('ion-icon').remove();
      icon.append('<ion-icon name="close"></ion-icon>');
      icon.addClass('close');
      icon.removeClass('menu');
    } else if(icon.hasClass('close')) {
      icon.children('ion-icon').remove();
      icon.append('<ion-icon name="menu"></ion-icon>');
      icon.addClass('menu');
      icon.removeClass('close');
    }
    
  })
  
});