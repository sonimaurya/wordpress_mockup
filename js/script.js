
  function display_menu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
      x.style.display="none";
    } else {
    x.style.display = "block";
    }
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

});