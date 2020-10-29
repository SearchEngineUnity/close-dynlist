/* eslint-disable */

$(document).ready(function () {
  $(window).on(
    'resize',
    debounce(function () {
      const a = $(this);
      $('.navigation--mobile').is(':visible') &&
        (console.log('yup'),
        a.width() >= 992 &&
          ($('.navigation--mobile').fadeOut(200),
          $('.mobile-menu--secondary').hide(),
          $('html, body').removeClass('no-scroll')));
    }, 250),
  ),
    $(document).ready(function () {
      $('.dropdown-menu').addClass('on'),
        $('.navigation__item--has-dropdown').hover(
          function () {
            $(this).children('.dropdown-menu').addClass('active');
          },
          function () {
            $(this).children('.dropdown-menu').removeClass('active');
          },
        ),
        $('.mobile-nav-trigger').click(function () {
          $('.navigation--mobile').fadeIn(200), $('html, body').addClass('no-scroll');
        }),
        $('.mobile-nav-close').click(function () {
          $('.navigation--mobile').fadeOut(200),
            $('.mobile-menu--secondary').hide(),
            $('html, body').removeClass('no-scroll');
        }),
        $('.mobile-menu__link--primary').click(function () {
          $(this).toggleClass('open').next().fadeToggle(200);
        });
    });
});
