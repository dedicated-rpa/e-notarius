$(function () {
    $(".menu-btn").on("click", function () {
    
      $(".navigation-list").slideToggle("");

      $(".menu-btn").toggleClass("active");    
    });

  });
function message(){
    setTimeout(function(){
      $('#messPolityka').fadeIn(200)
    }, 2000);
   };

   message()