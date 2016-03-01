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

          $('li:not(.disabled) > a').click(function() {
            $('li:not(.disabled) > a').removeClass('highlight');
            if($('span').hasClass('arrow')) {
              $(this).parent().children('ul').slideToggle();
              $('span.arrow', this).toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
              $(this).toggleClass('highlight');
            }
          });

          $('li:not(.disabled) > a').click(function() {
            var item = $(this).attr('href');
            $('.title-bar ul li').removeClass('active');
            $(item).show().addClass('active');
          });

          $('.title-bar ul li').hover(function() {
            $('.icon', this).addClass('fa-times');
          }, function() {
            $('.icon', this).removeClass('fa-times');
          });

          $('.title-bar ul li').click(function() {
            $('.title-bar ul li').removeClass('active');
            $(this).addClass('active');
          });

          $('.title-bar ul li span').click(function() {
            $(this).parent().removeClass('active').hide();
          });
        })
      }
    };
    app.initialize();
  });
});
