// Скрипт для присвоения пункту меню класса актив ------------------------------
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPosition = $(document).scrollTop();
  $('nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav ul li a').removeClass("active");
      currentLink.addClass("active");
    }
    else {
      currentLink.removeClass("active");
    }
  });
}

//-----------------------------------------------------------------------
//Стилизация #form_popup input[type='file'] ------------------------------
$(document).ready(function () {
// $("#form_popup").get(0) && ($("#form_popup input[type='file'] + span").click(function() {
//   $(this).parent().find($("input[type='file']")).click()
// }),
  $("#form input[type='file']").change(function () {
    var t = $(this).parent().find($("input[type='file']")).get(0).files
      , i = !1;
    for (e in t)
      if (e == parseInt(e)) {
        i = t[e].name;
        break
      }
    !1 !== i && $("#form input[type='file'] + span").text(i)
  });
});
//----------------------------------------------------------
// Инициализация плагина fullpage.js ----------------------
// $(document).ready(function() {
//   $("#fullpage").fullpage({
//     //Навигация
//     menu: '.aside__menu',
//     lockAnchors: true,
//     anchors: ['home', 'about', 'team', 'projects', 'partners', 'contacts'],
//     navigation: false,
//     navigationPosition: 'right',
//     navigationTooltips: ['home', 'about', 'team', 'projects', 'partners', 'contacts'],
//     showActiveTooltip: false,
//     slidesNavigation: false,
//     slidesNavPosition: 'right',
//
//     //Скроллинг
//     css3: true,
//     scrollingSpeed: 700,
//     autoScrolling: false,
//     fitToSection: true,
//     fitToSectionDelay: 300,
//     scrollBar: false,
//     easing: 'easeInOutCubic',
//     easingcss3: 'ease',
//     loopBottom: false,
//     loopTop: false,
//     loopHorizontal: false,
//     continuousVertical: false,
//     continuousHorizontal: false,
//     scrollHorizontally: false,
//     interlockedSlides: false,
//     dragAndMove: true,
//     offsetSections: true,
//     resetSliders: false,
//     fadingEffect: false,
//     // normalScrollElements: '#contacts',
//     scrollOverflow: false,
//     scrollOverflowReset: false,
//     scrollOverflowOptions: null,
//     touchSensitivity: 15,
//     normalScrollElementTouchThreshold: 10,
//     bigSectionsDestination: null,
//
//     //Доступ
//     keyboardScrolling: true,
//     animateAnchor: true,
//     recordHistory: false,
//
//     //Дизайн
//     controlArrows: false,
//     verticalCentered: true,
//     // sectionsColor : ['#ccc', '#fff'],
//     // paddingTop: '3em',
//     // paddingBottom: '10px',
//     // fixedElements: '#aside',
//     responsiveWidth: 0,
//     responsiveHeight: 0,
//     responsiveSlides: false,
//     parallax: false,
//     parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
//
//     //Настроить селекторы
//     sectionSelector: 'section',
//     slideSelector: '.slide',
//
//     lazyLoading: true,
//
//     // события
//     onLeave: function(origin, destination, direction){},
//     afterLoad: function(origin, destination, direction){},
//     afterRender: function(){},
//     afterResize: function(width, height){},
//     afterResponsive: function(isResponsive){},
//     afterSlideLoad: function(section, origin, destination, direction){},
//     onSlideLeave: function(section, origin, destination, direction){}
//   });
// });
//----------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
$(document).ready(function () {
  var windowWidth = $(window).width();
  // if (windowWidth < 1280) $(".projects__list--item").addClass("slide");
  // else $(".projects__list--item").removeClass("slide");
  if (windowWidth < 1280) $("#aside").addClass("menu");
  else $("#aside").removeClass("menu");
  
  $(window).resize(function () {
    var windowWidth = $(window).width();
    // if (windowWidth < 1280) $(".projects__list--item").addClass("slide");
    // else $(".projects__list--item").removeClass("slide");
    if (windowWidth < 1280) $("#aside").addClass("menu");
    else $("#aside").removeClass("menu");
  });
});
//----------------------------------------------------------
//Hamburger меню ----------------------------------------------------------
(function () {
  var menu;
  var menuBtn;
  var menuItems;
  
  function toggleActive() {
    menuBtn.toggleClass('active');
    menu.toggleClass('active');
  }
  
  $(document).ready(function () {
    menu = $('#aside');
    menuBtn = $('#menu-btn');
    menuItems = menu.find('a');
    
    menuBtn.click(toggleActive);
    menuItems.click(toggleActive);
  });
}());
//----------------------------------------------------------
//Добавление кнопок в .projects-list .slide-----------------
// $('.projects-list .slide').append('<button class="btn-slider btn-slider--up"></button>\n' + '<button class="btn-slider btn-slider--dawn"></button>');
// $('.projects-list .slide').append('<button class="btn-slider btn-slider--up"></button>\n' + '<button class="btn-slider btn-slider--dawn"></button>');
//----------------------------------------------------------
// Всплывающее окно MagnificPopUp.js----------------------------------

// $(document).ready(function () {
//   $('.btn-more').magnificPopup({
//     type: 'inline',
//     callbacks: {
//       open: function () {
//         $(document).ready(function () {
//           $('#more-gallery').slick({
//             infinite: false,
//             speed: 300,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             adaptiveHeight: true,
//             respondTo: 'window',
//             arrows: true,
//             nextArrow: '.more-gallery__item--btn-next',
//             prevArrow: '.more-gallery__item--btn-prev',
//             // dots: true
//           });
//         });
//       },
//     }
//   });
//   $(document).on('click', '.more-gallery__item__description--close', function (e) {
//     e.preventDefault();
//     $.magnificPopup.close();
//   });
// });
// //----------------------------------------------------------
// Всплывающее окно PopUp----------------------------------
jQuery(document).ready(function ($) {
  //open popup
  $('.btn-more').on('click', function (event) {
    event.preventDefault();
    $('.popup-projects-gallery').addClass('is-visible');
  });
  
  //close popup
  $('.popup-projects-gallery').on('click', function (event) {
    if ($(event.target).is('.more-gallery__item__description--close') || $(event.target).is('.popup-projects-gallery')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.popup-projects-gallery').removeClass('is-visible');
    }
  });
});
//----------------------------------------------------------
//Слайдер slick----------------------------------------------------------
$('#team-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '.btn-team__slider--up',
  prevArrow: '.btn-team__slider--dawn'
});

$('.projects-list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  lazyLoad: true,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '.btn-projects__slider--up',
  prevArrow: '.btn-projects__slider--dawn',
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  ]
});

$('.partners-list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  lazyLoad: true,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '#btn-partners__slider--up',
  prevArrow: '#btn-partners__slider--dawn',
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  ]
});

// Переключение на необходимый слайд --------------------------------------------------
$(function () {
  
  //Вешаем обработчики
  var addListeners = function (slider) {
    var $buttons = $('.btn-more');
    
    $buttons.on('click', function () {
      var slide = $(this).attr('data-slide');
      
      slider.slick('slickGoTo', slide);
    })
  };
  
  var addGoHash = function (slider) {
    var slide = window.location.hash.replace("#", "");
    
    if (slide) {
      setTimeout(function () {
        slider.slick('slickGoTo', slide, true);
      });
    }
  };
  
  //Инициализируем слайдер
  var init = function () {
    var $slickContainer = $('#more-gallery');
    
    //Обработчик события init
    $slickContainer.on('init', function (event, slick, currentSlide, nextSlide) {
      var $slider = $(this);
      
      addListeners($slider);
      addGoHash($slider);
    });
    
    //Инициализация слайдера
    $('#more-gallery').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      respondTo: 'window',
      arrows: true,
      nextArrow: '.more-gallery__item--btn-next',
      prevArrow: '.more-gallery__item--btn-prev',
      // dots: true
    });
  };
  
  init();
});
//--------------------------------------------------------------------------------
