$(document).ready(function() {
  // Smooth scroll to the footer when the "Contact" link is clicked
  $(".nav-item a[href='#']").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $("footer").offset().top }, 800);
  });
});