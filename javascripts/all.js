// This is where it all goes :)
function workingMonths() {
    var months = new Date().getMonth() + 3;
    return "2 years, " + months + " months";
}

$(document).ready(function () {
  var playerHeader = $("#player-header");
  var scroll = $(window).scrollTop();
  var activeElement = "#summary-nav-item";
  //console.log(scroll + " " + playerHeader.height());
  if (scroll >= (playerHeader.height() )) {
      playerHeader.addClass("sticky-nav-enabled");
  } else {
      playerHeader.removeClass("sticky-nav-enabled");
  }

  //Detect scroll to hide/show nav bar
  window.onscroll = function (e) {
    var scroll = $(window).scrollTop();
  //  console.log(scroll + " " + playerHeader.height());
    if (scroll >= (playerHeader.height() )) {
        playerHeader.addClass("sticky-nav-enabled");
    } else {
        playerHeader.removeClass("sticky-nav-enabled");
    }

    var newActiveElement;
    //figure out which row to highlight
    if(scroll <= $("#stats").offset().top - $("#player-nav").height() - 1) {
      console.log("#summary-nav-item");
      newActiveElement = "#summary-nav-item";
    } else if(scroll <= $("#news").offset().top - $("#player-nav").height() - 1) {
      console.log("#stats-nav-item");
      newActiveElement = "#stats-nav-item";
    } else if(scroll <= $("#apps").offset().top - $("#player-nav").height() - 1) {
      console.log("#news-nav-item");
      newActiveElement = "#news-nav-item";
    } else {
      console.log("#apps-nav-item");
      newActiveElement = "#apps-nav-item";
    }

    //Make sure whatever section is 0
    if(newActiveElement != activeElement) {
      $("a", ".player-nav-items")
      .removeClass("active")
      .filter(newActiveElement)
      .addClass("active");
      activeElement = newActiveElement;
    }
  }

  //smooth scroll for navigation bar items
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - $("#player-nav").height()
    }, 200);
    console.log("Clicked");
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

  });
});
