/*Scripts starts*/
$(document).on('ready', function () {
    'use strict';
    //Vertical icon-menu active script
    $('.horizontal_iconmenu li').on('click', function () {
        $('.page-top').removeClass('display_none');
        $('.wow').attr('style', 'visibility: hidden; animation-name: none; -webkit-transform:translateY(20px); -moz-transform:translateY(20px); -ms-transform:translateY(20px); -o-transform:translateY(20px); transform:translateY(20px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;');

        $('.horizontal_iconmenu li').removeClass('hover_active');
        $(this).addClass('hover_active');
        setTimeout(function () {
            $('.wow').each(function () {

                $(this).attr('style', 'visibility: visible; animation-name: ' + $(this).attr('data-class') + '; -webkit-transform:translateY(0px); -moz-transform:translateY(0px); -ms-transform:translateY(0px); -o-transform:translateY(0px); transform:translateY(0px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;');
            });
        }, 500);
    });

    $('.other-menu').on('mouseenter', function () {
        $('.hover-menu').animate({ '-moz-transform': 'translate3d(0, 84px, 0px)', '-webkit-transform': 'translate3d(0, 84px, 0px)', '-ms-transform': 'translate3d(0, 84px, 0px)', '-o-transform': 'translate3d(0, 84px, 0px)', 'transform': 'translate3d(0, 84px, 0px)' }, 'fast');
        setTimeout(function () {
            $('.hover-menu').css('-moz-transform', 'translate3d(0, 0px, 0px)').css('-webkit-transform', 'translate3d(0, 84px, 0px)').css('-ms-transform', 'translate3d(0, 84px, 0px)').css('-o-transform', 'translate3d(0, 84px, 0px)').css('transform', 'translate3d(0, 84px, 0px)');
        }, 200);
    });

    $('.other-menu').on('mouseenter', function () {
        $('.hover-menu').animate({ '-moz-transform': 'translate3d(0px, 0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)', '-ms-transform': 'translate3d(0px, 0px, 0px)', '-o-transform': 'translate3d(0px, 0px, 0px)', 'transform': 'translate3d(0px, 0px, 0px)', }, 'fast');
        $('.other-menu').addClass('hover_active');
        $('.other-menu a').addClass('hover_active selected');
        setTimeout(function () {
            $('.hover-menu').css('-moz-transform', 'translate3d(0px, 0px, 0px)').css('-webkit-transform', 'translate3d(0px, 0px, 0px)').css('-ms-transform', 'translate3d(0px, 0px, 0px)').css('-o-transform', 'translate3d(0px, 0px, 0px)').css('transform', 'translate3d(0px, 0px, 0px)');
        }, 200);


    }).on('mouseleave', function () {

        $('.hover-menu').animate({ '-moz-transform': 'translate3d(0px, -400px, 0px)', '-webkit-transform': 'translate3d(0px, -400px, 0px)', '-ms-transform': 'translate3d(0px, -400px, 0px)', '-o-transform': 'translate3d(0px, -400px, 0px)', 'transform': 'translate3d(0px, -400px, 0px)' }, 'fast');
        $('.other-menu').removeClass('hover_active');
        $('.other-menu a').removeClass('hover_active selected');
        setTimeout(function () {
            $('.hover-menu').css('-moz-transform', 'translate3d(0px, -400px, 0px)').css('-webkit-transform', 'translate3d(0px, -400px, 0px)').css('-ms-transform', 'translate3d(0px, -400px, 0px)').css('-o-transform', 'translate3d(0px, -400px, 0px)').css('transform', 'translate3d(0px, -400px, 0px)');
        }, 200);
    });

   $(window).load(function () {
       if ($.find('.gridlayout').length) {
           $('.gridlayout').isotope({
               itemSelector: '.grid-item',
               masonry: {
                   columnWidth: '.grid-item'
               }
           });
       }
   });

   /*Timer for wedding page*/
   if ($.find('#example').length) {
       $('#example').countdown({
           date: '06/09/2018 13:30:00', //Enter Target date & time - MM/DD/YYYY hh:mm:ss
           offset: (-(new Date().getTimezoneOffset()/60)),
           day: 'Day',
           days: 'Days'
       }, function () {
       });
	}

    $('.hamburger').on('click', function () {
        if ($('.navbar-fixed-top').css('right') == '-130px') {
            $('.navbar-fixed-top').animate({ right: '0px' }, 'slow');
        }
        else {
            if ($('.navbar-fixed-top').css('overflow-y') == 'scroll') {
                $('.navbar-fixed-top').animate({ right: '-130px' }, 'slow');
            }
        }
    });
    $('body').on('click', function (evt) {
        if ($('.navbar-fixed-top').css('z-index') == 10030) {
            if (evt.target.class == 'hamburger') {
                return;
            }
            if ($(evt.target).closest('.hamburger').length)
            { return; }
            else
            {
                if ($('.navbar-fixed-top').css('overflow-y') == 'scroll') {
                    $('.navbar-fixed-top').animate({ right: '-130px' }, 'slow');
                }
            }
        }
    });

    //Horizontal Tab
    if ($.find('#parentHorizontalTab').length) {
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }
    // Child Tab

    if ($.find('#ChildVerticalTab_1').length) {
        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: null,
            inactive_bg: null,
            active_border_color: null,
            active_content_border_color: null
        });
    }
    //Vertical Tab


    if ($.find('#parentVerticalTab').length) {
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    /*---------------------*/


    /*------------slick slider-------------------*/



    /*-----photo gallery------------*/

    if ($.find('.fancybox').length) {
        $('.fancybox').fancybox();
    }
    //gallery option 2

    if ($.find('.fancybox2').length) {
        $('.fancybox2').fancybox();
    }
    /*-----------------------------------people page slider------------------------*/

    $('.the-people-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
  {
      breakpoint: 981,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
      }
  },

   {
       breakpoint: 769,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false
       }
   },
    {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
    },
   {
       breakpoint: 361,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false
       }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: 'unslick'
   // instead of a settings object
        ]
    });

    $('.ceremony-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
              breakpoint: 1025,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: false
              }
          },
          {
              breakpoint: 769,
              settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 481,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: 'unslick'
          // instead of a settings object
        ]
    });



    window.wow = new WOW({
        animateClass: 'animated',
        offset: 0,
        callback: function (box) {
        }
    });

    wow.init();


});

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
    } else if (state == 'complete') {
        setTimeout(function () {
            $('#load').animate({ 'opacity': '0' }, 'fast');

        }, 1000);
    }
}

$(document).ready(function(){
  var startDateTime = new Date(2018,5,6,13,30,0,0); // YYYY (M-1) D H m s ms (start time and date from DB)
  var startStamp = startDateTime.getTime();

  var newDate = new Date();
  var newStamp = newDate.getTime();

  var timer; // for storing the interval (to stop or pause later if needed)
  var countdown = $('.countdown')

  function updateClock() {
      newDate = new Date();
      newStamp = newDate.getTime();
      var diff = Math.round((newStamp-startStamp)/1000);

      var y = Math.floor(diff / (356*24*60*60));
      diff = diff-(y*356*24*60*60);

      var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
      diff = diff-(d*24*60*60);

      var h = Math.floor(diff/(60*60));
      diff = diff-(h*60*60);

      var m = Math.floor(diff/(60));
      diff = diff-(m*60);
      var s = diff;
      countdown.find('.clock-years .text .val').text(y)
      countdown.find('.clock-days .text .val').text(d)
      countdown.find('.clock-hours .text .val').text(h)
      countdown.find('.clock-minutes .text .val').text(m)
  }

  timer = setInterval(updateClock, 1000);
})
