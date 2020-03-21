window.console = window.console || function(t) {};

if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

$(window).scroll(function(event) {
  function footer() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".footer-nav")
        .fadeIn("slow")
        .addClass("show");
    } else {
      $(".footer-nav")
        .fadeOut("slow")
        .removeClass("show");
    }

    clearTimeout($.data(this, "scrollTimer"));
    $.data(
      this,
      "scrollTimer",
      setTimeout(function() {
        if ($(".footer-nav").is(":hover")) {
          footer();
        } else {
          $(".footer-nav").fadeOut("slow");
        }
      }, 2000)
    );
  }
  footer();
});
//# sourceURL=pen.js
