'use strict';

$(function() {
  $('.scroll-area').bind('mousewheel', function(event) {
    event.preventDefault();
    var scrollTop = this.scrollTop;
    this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));

    var scrollLeft = this.scrollLeft;
    this.scrollLeft = (scrollLeft - ((event.deltaX * event.deltaFactor) * -1));
  });

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
      var position = $(item).attr('rel');
      if(position === 'img') {
        $('#' + position + ' img').attr('src', '../assets/thumbs/'+ $(item).attr('data'));
      }
      $('.scroll').removeClass('shown');
      $('#' + position).addClass('shown');

      var type = $(this).html().split('.')[1];
      if (type === 'html') {
        $('#file-type').html('HTML  ');
      } else if (type === 'md') {
        $('#file-type').html('Markdown  ');
      } else if (type === 'json') {
        $('#file-type').html('JSON  ');
      } else {
        $('#file-type').html('');
      }
      $('#path').html($(this).text());
      $('.status').addClass('shown');
    }
    $(this).toggleClass('highlight');
  });

  $('.project-image').click(function() {
    var item = $(this).attr('href');
    $('.title-bar ul li').removeClass('active');
    $(item).show().addClass('active');
    var position = $(item).attr('rel');
    if(position === 'img') {
      $('#' + position + ' img').attr('src', '../assets/thumbs/'+ $(item).attr('data'));
    }
    $('.scroll').removeClass('shown');
    $('#' + position).addClass('shown');
    $('#file-type').html('');
    $('#path').html('');
    $('.status').addClass('shown');
  });

  $('.title-bar ul li').click(function() {
    $('.title-bar ul li').removeClass('active');
    $(this).addClass('active');

    var link = $(this).attr('id');
    $('li:not(.disabled) > a').removeClass('highlight');
    $('li:not(.disabled) > a[href$="#' + link + '"]').toggleClass('highlight');

    var position = $(this).attr('rel');
    if(position === 'img') {
      $('#' + position + ' img').attr('src', '../assets/thumbs/'+ $(this).attr('data'));
    }
    $('.scroll').removeClass('shown');
    $('#' + position).addClass('shown');

    var type = $(this).html().split('.')[1];
    if (type === 'html') {
      $('#file-type').html('HTML  ');
    } else if (type === 'md') {
      $('#file-type').html('Markdown  ');
    } else if (type === 'json') {
      $('#file-type').html('JSON  ');
    } else {
      $('#file-type').html('');
    }
    $('#path').html($(this).text());
    $('.status').addClass('shown');
  });

  $('.title-bar ul li span').click(function(e) {
    e.stopPropagation();
    $(this).parent().removeClass('active').hide();
    var link = $(this).parent().attr('id');
    $('li:not(.disabled) > a[href$="#' + link + '"]').toggleClass('highlight');
    var position = $(this).parent().attr('rel');
    $('#' + position).removeClass('shown');

    var select = $(this).parent().parent().find('li:visible');
    if (select.length > 0) {
      link = $(select).attr('id');
      $('li:not(.disabled) > a[href$="#' + link + '"]').trigger('click');
    } else {
      $('#file-type').html('');
      $('#path').html('');
      $('.status').removeClass('shown');
    }
  });

  $('.title-bar ul li').hover(function() {
    $('.icon', this).addClass('fa-times');
  }, function() {
    $('.icon', this).removeClass('fa-times');
  });
});
