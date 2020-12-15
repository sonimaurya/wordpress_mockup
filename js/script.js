
   
  function display_menu() {
    $("#mobile-menu").toggle(function(){
      $('.mobile-menu>i').toggleClass("fa-times  fa-bars");
      $('.header-nav-dropdown-mobile').hide();
      $('#dropdown-mobile').removeClass("active");
    });
  }
  function display_sidebar() {

    $(".services1-content-sidebar").toggle(function(){
      $('.header-side-nav>i').toggleClass("fa-times fa-ellipsis-h");
    });

  }
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $("#dropdown").click(function(e){
      e.preventDefault();
      $('.header-nav-dropdown').toggle(1000);
    });
    $("#dropdown-mobile").click(function(e){
      e.preventDefault();
      $('.header-nav-dropdown-mobile').toggle(function(){
        $('#dropdown-mobile').toggleClass("active");
      });
    });
    
});
