$(document).ready(function() {
  if (window.matchMedia("only screen and (max-width: 860px)").matches) {
    $(".cright").addClass("hidden");
    $(".cleft").addClass("hidden");
    $("#skills").css("background", "url(devops.png) center 40px no-repeat");
    $(".dev").removeClass("hidden");
    $(".ops").removeClass("hidden");
  } else {
    // Moving dev to the middle then showing dev specs
    $(".cleft").delay(500).animate({ "left": "+=270px" }, 1500);
    $(".dev").delay(2000).fadeIn(1000);
    // Moving ops to the middle then showing ops specs
    $(".cright").delay(3000).animate({ "right": "+=270px" }, 1500);
    $(".ops").delay(4500).fadeIn(1000);

    // Melting the circles by bringing the original image back
    setTimeout(function(){
      $("#skills").css("background-position", "center 40px");
      $(".cright").fadeOut(500);
      $(".cleft").fadeOut(500);
    }, 4500);
  }
});