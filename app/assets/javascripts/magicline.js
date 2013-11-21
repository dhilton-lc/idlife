jQuery(document).ready(function($) {
    $(window).load(function($){

     var $el, leftPos, newWidth,
          $mainNav = jQuery(".navbar ul");
      $mainNav.append("<li id='magic-line'></li>");
      var $magicLine = jQuery("#magic-line");

      $magicLine
        .width(jQuery(".active").width())
        .css("left", jQuery(".active").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

      jQuery(".navbar li").hover(function() {
        $el = jQuery(this);
        leftPos = $el.position().left;
        newWidth = $el.width();
        $magicLine.stop().animate({
          left: leftPos,
          width: newWidth
        });
      }, function() {
        $magicLine.stop().animate({
          left: $magicLine.data("origLeft"),
          width: $magicLine.data("origWidth")
        });
      });
    });
});