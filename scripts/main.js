new WOW().init();


//主選單
$(document).ready(function () {
$(".burg").click(function () {
   $(".offcanvas").toggleClass("active");
   $(this).toggleClass("active");
});
$(".offcanvas a").click(function () {
   $(".offcanvas").removeClass("active");
   $(".burg").toggleClass("active");
});

$(function () {
   var shrinkNav = $("#header").height();
      var shrinkoffcanvas = 20;
         $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkNav) {
              $("#header").addClass("shrink");
         } else {
            $("#header").removeClass("shrink");
         }
            if (scroll >= shrinkoffcanvas) {
            $(".burg").addClass("fixed");
         } else {
            $(".burg").removeClass("fixed");
         }
      });
      function getCurrentScroll() {
         return window.pageYOffset || document.documentElement.scrollTop;
      }
   });
});


//浮動social-icons & popUp
jQuery(document).ready(function($){
   //open popup
   $('.popup_btn').on('click', function(event){
      event.preventDefault();
      var number = $(this).data("number");
      $('.popup.popup-'+number).addClass('is-visible');
   });      
   //close popup
   $('.popup').on('click', function(event){
      if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
         event.preventDefault();
         $(this).removeClass('is-visible');
      }
   });      
   //close popup when clicking the esc keyboard button
   $(document).keyup(function(event){
      if(event.which=='27'){
         $('.popup').removeClass('is-visible');
      }
   });
});


// 圖bg設定
$('.set-bg').each(function() {
   var bg = $(this).data('setbg');
   $(this).css('background-image', 'url(' + bg + ')');
});


//最新消息-分類標籤
$(".selectall").click(function(){
   $(".mytag").prop("checked",$(this).prop("checked"));
}); 


// 共用slider
$(".cmSlider").slick({
   dots: true,
   arrows:false,
   infinite: true,
   slidesToShow: 1,  
   slidesToScroll: 1, 
   autoplay:true
});


// popUp_cmSlider
$(".popUp_cmSlider").slick({
   dots: false,
   arrows:true,
   infinite: true,
   slidesToShow: 1,  
   slidesToScroll: 1, 
   autoplay:true
});

// popUp_cmSlider
$(".popUp_Slider").slick({
   dots: false,
   arrows:true,
   infinite: true,
   slidesToShow: 1,  
   slidesToScroll: 1, 
   autoplay:true
});

// 影片專區slider
$('.vdSlider').slick({   
   autoplaySpeed: 1000,
   dots: true,
   arrows:false,   
   infinite: true,
   slidesToShow: 3,  
   slidesToScroll: 3, 
   autoplay:false,
      
   responsive: [{
      breakpoint: 2000,
      settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         arrows: false,
         dots: true,            
      }
   }, {
      breakpoint: 1024,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         arrows: false,
         dots: true,            
      }
   }, {
      breakpoint: 768,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
      }
   }]
}); 


//homeSlider
$(".homeSlider").slick({
   dots: true,   
   arrows: true,
   infinite: true,
   slidesToShow: 1,  
   slidesToScroll: 1, 
   autoplay:false
});

$('.homeSlider_mo').slick({
   dots: false,
   autoplay: false,
   infinite: true,
   arrows: true,
   slidesToShow: 1,  
   slidesToScroll: 1,
});


// loading
document.onreadystatechange = function() { 
   if (document.readyState !== "complete") { 
      document.querySelector( 
      "body").style.visibility = "hidden"; 
      document.querySelector( 
      ".loading_wrap").style.visibility = "visible"; 
   } else { 
      document.querySelector( 
      ".loading_wrap").style.display = "none"; 
      document.querySelector( 
      "body").style.visibility = "visible"; 
   } 
}; 


//2020-0224 分類選單(mo) 

/*$(".panel").click(function(){
    $(".news_typesBar").slideToggle("slow");
    $(".xs1").toggle();
    $(".xs2").toggle();
  });*/

/*$(".flip").click(function(){
    $(".faceplate").slideToggle("slow");    
});*/

$(".flip").click(function(){
    $(".news_typesBar").slideToggle("slow");    
});
//符號變換
   $(".angle").click(function() {
        $(this).toggleClass("put");
    });   