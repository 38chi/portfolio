$(function(){
   $('a[href^=#]').click(function() {
      var speed = 1000; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function() {
    $('#nav-toggle').click(function(){
        $('header').toggleClass();
    });
});

$(function() {
  var $accBtn = $('.section-prof__more'),
      $accContents = $('.section-prof__contents');

      $accContents.hide();
      $accBtn.each(function() {
        var flag = "close";
        $(this).click(function(e) {
          e.preventDefault();
          $(this).next().slideToggle();

          if(flag == "close"){
            $(this).text("close");
            flag = "open";
          }
          else{
            $(this).text("more");
            flag = "close";
          }

        });
      });
    });
