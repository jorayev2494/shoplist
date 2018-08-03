jQuery(document).ready(function($) {
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});

// Can also be used with $(document).ready()
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  });
  