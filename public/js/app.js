'use strict';

require(['config'], function() {
  require(['jquery'], function($) {
    var app = {
      initialize: function() {
        $(document).ready(function() {
          $('li:not(.disabled) > a').click(function() {
            $('li:not(.disabled) > a').removeClass('highlight');
            if ($('span', this).hasClass('arrow')) {
              $(this).parent().children('ul').slideToggle();
              $('span.arrow', this).toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
            }
            else {
              var item = $(this).attr('href');
              $('.title-bar ul li').removeClass('active');
              $(item).show().addClass('active');
              var position = $('.title-bar ul li').index($(item));
              $('.scroll').removeClass('shown');
              $('#' + position).addClass('shown');
            }
            $(this).toggleClass('highlight');
          });

          $('.title-bar ul li').click(function() {
            $('.title-bar ul li').removeClass('active');
            $(this).addClass('active');

            var link = $(this).attr('id');
            $('li:not(.disabled) > a').removeClass('highlight');
            $('li:not(.disabled) > a[href$="#' + link + '"]').toggleClass('highlight');

            var position = $('.title-bar ul li').index($(this));
            $('.scroll').removeClass('shown');
            $('#' + position).addClass('shown');
          });

          $('.title-bar ul li span').click(function(e) {
            e.stopPropagation();
            $(this).parent().removeClass('active').hide();
            var link = $(this).parent().attr('id');
            $('li:not(.disabled) > a[href$="#' + link + '"]').toggleClass('highlight');
            var position = $('.title-bar ul li').index($(this).parent());
            $('#' + position).removeClass('shown');

            var prev = $(this).parent().prev();
            var next = $(this).parent().next();
            var select = null;
            if(prev !== null && $(prev).is(':visible')) {
              select = prev;
            }
            else if (next !== null && $(next).is(':visible')) {
              select = next;
            }
            if (select !== null) {
              link = $(select).attr('id');
              $('li:not(.disabled) > a[href$="#' + link + '"]').trigger('click');
            }
          });

          $('.title-bar ul li').hover(function() {
            $('.icon', this).addClass('fa-times');
          }, function() {
            $('.icon', this).removeClass('fa-times');
          });
        });
      }
    };
    app.initialize();
  });
});
