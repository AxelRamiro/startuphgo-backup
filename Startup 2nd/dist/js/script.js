(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()/3) {
      $('nav').addClass('light');
      $('#logo').attr('src', 'img/startup_logo.png');
    }
    if ($(window).scrollTop() < $(window).height()/3) {
      $('nav').removeClass('light');
      $('#logo').attr('src', 'img/startup_logo_bco.png');
    }
  });
})();