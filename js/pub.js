$(function() {

    /* nav */


    //slide way
    var $nav = $(".nav")
    var $nav_list = $(".nav__item > a");

    $nav_list.on("mouseover focus", function(e) {
        $nav.addClass("on");
    });
    $nav.on("mouseleave", function(e) {
        $nav.removeClass("on");
    });

    $(".nav__item-2dep:last > a").on("blur", function() {
        $nav.removeClass("on");
    });


    /* 메인 배너 */
    var bnSlider = $('#bnSlider').bxSlider({
        //autoHover: true,
        //pagerSelector: '.selector', //셀렉터에 pager를 $selector에 append
        //autoControls: true, //재생 정지버튼
        //autoControlsSelector: '.selector', //재생,정지버튼을 $selector에  append
        mode:'fade',
        //tickerHover: true,
        //autoHover:true,
        auto:true,
        controls:false,
        pause: 5000,
		pager: true,
        //autoControls: true, //재생,정지버튼
        //prevSelector: '.main-banner__btn--prev',
        //nextSelector: '.main-banner__btn--next'
    });


    // $(".main-banner__btn--prev").on("click",function(){
    //     bnSlider.goToPrevSlide();
    // });
    // $(".main-banner__btn--next").on("click",function(){
    //     bnSlider.goToNextSlide();
    // });

	/* 상단으로 */
	$("#top_btn").on("click", function() {
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});


	/* 왼쪽메뉴 고정 */
	  $(window).scroll(function(){

	  var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
	  var ft_pos = $("#ft").offset().top; // 하단영역 위치
	  var aside_pos = ft_pos - 500;



    if(height > 197){


      if(height >= aside_pos ){


		$('#container_wr #aside').css({
				"position":"absolute",
				"top":aside_pos,
		});
	  }else{

		$('#container_wr #aside').css({
				"position":"",
				"top":"0",
		});

		  $('#container_wr #aside').addClass('fix_aside');
	  }

    }else if(height < 197){

		$('#container_wr #aside').css({
				"position":"",
				"top":"0",
		});

      $('#container_wr #aside').removeClass('fix_aside');
    }
  });

});
