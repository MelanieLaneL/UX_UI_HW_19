
      $(document).ready(function() {
        $(".nav-item a[href='#']").on("click", function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: $("#footer").offset().top }, 800);
        });
      });

      $(document).ready(function() {
  $(".case-study-button").hover(
    function() {
      $(this).css({
        height: "93px",
        width: "279px",
        fontSize: "40px"
      });
    },
    function() {
      $(this).css({
        height: "",
        width: "",
        fontSize: ""
      });
    }
  );
});

$(document).ready(function() {
  
  $("a[href^='#']").on("click", function(event) {
    event.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 800);
    }
  });
});