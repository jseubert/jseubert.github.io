// This is where it all goes :)
/*
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".clearHeader");
    $(window).scroll(function() {



        var scroll = $(window).scrollTop();
    alert("Hello! I am an alert box!!");
        if (scroll >= 200) {
          alert("Hello! I am an alert box!!");
            $(".player-header").addClass("sticky-nav-enabled");
        } else {
          alert("Hello! I am an alert box!!");
            $(".player-header").removeClass("sticky-nav-enabled");
        }
});*/
$(document).ready(function () {
  var playerHeader = $("#player-header");
  var scroll = $(window).scrollTop();
  console.log(scroll + " " + playerHeader.height());
  if (scroll >= (playerHeader.height() )) {
      playerHeader.addClass("sticky-nav-enabled");
  } else {
      playerHeader.removeClass("sticky-nav-enabled");
  }

  window.onscroll = function (e) {
  // called when the window is scrolled.
    var scroll = $(window).scrollTop();
    console.log(scroll + " " + playerHeader.height());
    if (scroll >= (playerHeader.height() )) {
        playerHeader.addClass("sticky-nav-enabled");
    } else {
        playerHeader.removeClass("sticky-nav-enabled");
    }
  }
});
