(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() - 68) {
      $('header').addClass('sticky');
      $('#navBar').addClass('col-lg-8 col-lg-offset-2');
    }
    if ($(window).scrollTop() < $(window).height() - 64) {
      $('header').removeClass('sticky');
      $('#navBar').removeClass('col-lg-8 col-lg-offset-2');
    }
  });

  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

})();