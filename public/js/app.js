'use strict';

require(['config'], function(config) {
  require(['jquery'], function($, sticky) {
    var app = {
      initialize: function() {
        $(document).ready(function(e) {
          var viewportHeight = $(window).height();
          var navHeight = $('nav').height();
          $(window).resize(function() {
            viewportHeight = $(window).height();
          });

          $(document).on('scroll', function(e) {
            if ($('body').scrollTop() > viewportHeight - navHeight) {
              $('nav').addClass('fixed');
            } else {
              $('nav').removeClass('fixed');
            }
        });

          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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
        });
      }
    };
    app.initialize();
  });
});
