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

function workingMonths() {
    var months = new Date().getMonth() + 3;
    return "2 years, " + months + " months";
}

$(document).ready(function () {
  var playerHeader = $("#player-header");
  var scroll = $(window).scrollTop();
  //console.log(scroll + " " + playerHeader.height());
  if (scroll >= (playerHeader.height() )) {
      playerHeader.addClass("sticky-nav-enabled");
  } else {
      playerHeader.removeClass("sticky-nav-enabled");
  }

  //Detect scroll to hide/show nav bar
  window.onscroll = function (e) {
  // called when the window is scrolled.
    var scroll = $(window).scrollTop();
  //  console.log(scroll + " " + playerHeader.height());
    if (scroll >= (playerHeader.height() )) {
        playerHeader.addClass("sticky-nav-enabled");
    } else {
        playerHeader.removeClass("sticky-nav-enabled");
    }

    //figure out which row to highlight
    if(scroll <= $("#stats")) {
      
    }
  }

  //smooth scroll for navigation bar items
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - $("#player-nav").height()
    }, 500);
    return false;
  });

  //Segmented controller in Stats
  $("#section_nav").click(function (event) {

      $("li", this)
      .removeClass("active")
      .filter(event.target)
      .addClass("active");

      var value = $(event.target).attr('id');

      //hide all stats
      $(".stat-panel").hide();

      //show the one that was tapped
      if(value.localeCompare("majorsTab") == 0) {
        $("#majorsPanel").show();
      } else if(value.localeCompare("minorsTab") == 0) {
        $("#minorsPanel").show();
      } else if(value.localeCompare("collegeTab") == 0) {
        $("#collegePanel").show();
      } else if(value.localeCompare("scoutingTab") == 0) {
        $("#scoutingPanel").show();
      }

  })
});
