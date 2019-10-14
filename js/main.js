/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();


    $(".container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });


    $("#bg_slider").slick({
        dots: false, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#text_slider', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide: 0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    });


    $("#text_slider").slick({
        dots: false, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#bg_slider', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 4, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide: 0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: true,

    });




    $('#text_slider')
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('#text_slider .slick-slide').removeClass('on');
            $('#section01 .text_container > div').removeClass('on')
        })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {


            if (currentSlide === 0) {

                $('#text_slider .list01').addClass('on');
                $('#section01 .text_container .list01').addClass('on')

            } else if (currentSlide === 1) {

                $('#text_slider .list02').addClass('on');
                $('#section01 .text_container .list02').addClass('on')


            } else if (currentSlide === 2) {
                $('#text_slider .list03').addClass('on');
                $('#section01 .text_container .list03').addClass('on')


            } else if (currentSlide === 3) {
                $('#text_slider .list04').addClass('on');
                $('#section01 .text_container .list04').addClass('on')


            } else if (currentSlide === 4) {
                $('#text_slider .list05').addClass('on');
                $('#section01 .text_container .list05').addClass('on')


            }


        });


    // =========================
    // on event section      ===
    //==========================


//==============================================================
});


$(function () {
    $('#section01 .title_box > div').addClass('on');

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);


        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});
