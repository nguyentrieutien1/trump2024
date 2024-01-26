$(document).ready(function(){

  // 홈페이지 클릭 상단 이동 이벤트
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });

  $('.menu-trigger').click(function() {
    $(this).toggleClass('active');
  });


  // 스크롤 이벤트
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();

    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      if (pos < winTop + 660) {
        $(this).addClass("slide");
      }
    });
    $(".slideanim1").each(function(){
      var pos = $(this).offset().top;
      if (pos < winTop + 660) {
        $(this).addClass("slide1");
      }
    });

    if (winTop > 0 )
      $('nav').css('background','#666');
    else
      $('nav').css('background','none');

  });

  // structure 이미지 교체 이벤트
  // function strResizing() {
    var winWidth = $(window).width();
    if (winWidth > 768) {
      $('#str-img').attr('src','img/img_structure.png');
      $('#team .thumbnail').hover(function(){
        $(this).toggleClass('active');
      });
    }
    else {
      // $('#str-img').attr('src', 'img/img_structure_m.png');
      $('#team .thumbnail').click(function () {
        $(this).toggleClass('active');
      });
    }
  // }
  // strResizing();
  // $(window).resize(function(){strResizing();});

  $('.navbar-toggle').click(function () {
    if($(this).hasClass('active')) {
      $('nav').css('background','#666');
    }
    else {
      var winTop = $(window).scrollTop();
      if(winTop > 0)
        $('nav').css('background','#666');
      else
        $('nav').css('background','none');
    }

  });





});
