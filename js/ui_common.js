$(function () {
  // ios 모바일 체크
  function checkIosMobile() {
    var iosMobile = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
    return iosMobile;
  }

  $('#header .btn_open').on('click', function () {
    $('.gnb_wrap').addClass('on');
    $('#header .dimmed').show();
    $('#header .btn_close').fadeIn();
  });

  $('#header .btn_close, #header .dimmed').on('click', function () {
    $('.gnb_wrap').removeClass('on');
    $('#header .dimmed').fadeOut();
    $('#header .btn_close').fadeOut();
  });

  // 아코디언
  $('.gnb .depth02').hide();

  $('.gnb>li>a').on('click', function () {
    $(this).toggleClass('on').parent().siblings().find('>a').removeClass('on');
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.depth02').hide();
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 1000,
    simulateTouch: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // family site
  $('.family_wrap').on('click', function () {
    $(this).find('.family').slideToggle();
  });

  // faq 열고 닫기
  $('.sub_faq .faq_list_wrap dd').hide();

  $('.sub_faq .faq_list_wrap dt').on('click', function () {
    $(this).toggleClass('on').parent().siblings().find('>dt').removeClass('on');
    $(this).next().slideToggle();
    $(this).parent().siblings().find('dd').hide();
  });
});
