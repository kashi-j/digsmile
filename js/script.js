// 'use strict';
// ハンバーガー
$(function(){
  $('.burger-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

// ヘッダーフォント色
$(function() {
  let $win = $(window),
      $fv = $('.fv'),
      $burgerBtn = $('.burger-btn')
      fvHeight = $fv.outerHeight(),
      colorClass = 'color-black';
  $win.on('load scroll',function(){
    let value = $(this).scrollTop();
      // if($win.width()>768)
        if (value > fvHeight) {
          $burgerBtn.addClass(colorClass);
        } else {
          $burgerBtn.removeClass(colorClass);
        }
  });
});