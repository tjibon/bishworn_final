// ..............Custom JavaScript Code.................
(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {

   
   
   //mega-menu
      document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    })
    }); 
    //mega-meu end



     //Feature
     $('.brand-box-list').owlCarousel({
           
      items: 5,
      autoplay: false,
      loop: true,
        margin:0,
       dots:false,
       nav:true,
       responsiveClass:true,
       responsive:{
           0:{
               items:3,
               nav:false,
               margin:5,

           },
           600:{
               items:4,
               nav:false
           },
           1000:{
               items:5,
               loop:true,
               nav:false,
           }
       }
      
    });


    //Feature
    $('.feature-box-list').owlCarousel({
           
      items: 4,
      autoplay: false,
      margin: 20,
      loop: true,
       dots:false,
       nav:false,
       responsiveClass:true,
       responsive:{
           0:{
               items:2,
               nav:false
           },
           600:{
               items:3,
               nav:false
           },
           1000:{
               items:4,
               nav:false,
               loop:true,
           }
       }
      
    });
    //catagory
    $('.catagory-box-list') .owlCarousel({
           
      items: 6,
      autoplay: false,
      margin:15,
      loop: true,
       dots:false,
       nav:false,
       responsiveClass:true,
       responsive:{
           0:{
               items:2,
               nav:false
           },
           600:{
               items:4,
               nav:false
           },
           1000:{
               items:6,
               nav:false,
               loop:true,
           }
       }
      
    });

    

     
    


    
   


 

     
          



  });

}(jQuery));






