$(function () {


  // ! Функция для определения высоты блока
  $(function () {
    $('.slider__name').each(function () {
      var $this = $(this);
      if ($this.height() > 100) {
        $this.addClass('active');
      }
    });
  });


  // ! Добавление класса для трейлера
  // $('.trailer__link').on('click', function () {
  //   $('.trailer__link,.trailer__video,.trailer__inner,.trailer__wrapper,.trailer__info-ratings').toggleClass('active');
  // });


  // ! Button for adaptive menu
  $('.menu__mobile').on('click', function () {
    $('.menu__list,.menu__mobile').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });


  // ! Tabs script
  $('.tabs__top-btn').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-btn').removeClass('active');
    $(this).addClass('active');

    $('.tabs__content-list').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-item').removeClass('active');
    $(this).addClass('active');
  });


  // ! add class on click для слайдер инфо
  $('.slider__sessions-link').on('click', function () {
    $('.slider__sessions-link').toggleClass('active');
  });


  // ! Плавное появление блока слайдер инфо
  $(".slider__sessions-link").on('click', function () {
    $(".slider__sessions-info").slideToggle();
  });


  // !Синхронизированные слайдеры
  $('.slider__list').slick({
    asNavFor: '.slider-bottom__list',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: true,
    infinite: true,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/slider/prev.png" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/slider/next.png" alt="next"></button>'
  });

  $('.slider-bottom__list').slick({
    asNavFor: '.slider__list',
    slidesToShow: 12,
    slidesToScroll: 1,
    draggable: false,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 1153,
        settings: {
          slidesToShow: 8,
        }
      },

      {
        breakpoint: 741,
        settings: {
          slidesToShow: 6,
        }
      },

      {
        breakpoint: 587,
        settings: {
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 415,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });
});