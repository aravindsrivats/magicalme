'use strict';

require(['config'], function(config) {
  require(['jquery', 'masonry'], function($, Masonry, sticky) {
    var app = {
      initialize: function() {
        $(document).ready(function(e) {
          var viewportHeight = $(window).height();
          var navHeight = $('nav').height();
          $(window).resize(function() {
            viewportHeight = $(window).height();
          });

          new Masonry('.beans', {
            itemSelector: '.bean-picture',
            isFitWidth: true
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

          $('.bean-picture').click(function() {
            var img = $('.img', this).clone();
            img.attr('style', img.attr('style')+' background-size: contain; background-position: center center;');
            img.appendTo('.preview').removeClass('img').addClass('clone');

            $('.desc', this).clone().appendTo('.preview').removeClass('desc').addClass('description');
            $('.preview').addClass('open');
          });

          $('.close').click(function() {
            $('.clone').remove();
            $('.description').remove();
            $('.preview').removeClass('open');
          });
        });
      }
    };
    app.initialize();
  });
});
