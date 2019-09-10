$(document).ready(function() {


  /* Меню */
  $('.header-top__icon').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.header-top__list').toggleClass('header-top__list_open');
  });
  $('.header-top__link').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.header-top__list')
      .removeClass('header-top__list_open');
  });

});