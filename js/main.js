$(document).ready(function(){

        
        
    var sswiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        
    });
      /*slide-button*/
      $(".swiper-button-pause").click(function(){
                sswiper.autoplay.stop();
                $(".swiper-button-play").stop().show();
                $(".swiper-button-pause").stop().hide();
            });

            $(".swiper-button-play").click(function(){
                sswiper.autoplay.start();
                $(".swiper-button-pause").stop().show();
                 $(".swiper-button-play").stop().hide();
             
            }); 
 
    
    /*new slider*/
     var swiper = new Swiper('.swiper-container2', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      }
    });

    

    

  
    
 
    
    
})
    