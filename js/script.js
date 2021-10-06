$(function () {
    "use strict";

    //banner js 
    $('#banner').slick({
        dots: true,
        dotsClass: "banner_dots d-none d-md-inline-block",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        prevArrow: '<i class="fas btn-left fa-arrow-left d-none d-md-inline-block"></i>',
        nextArrow: '<i class="fas btn-right fa-arrow-right d-none d-md-inline-block"></i>',
        fade: true,
        cssEase: 'linear'
    });

    // team slider

    $('.team-txt').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: false,
        dots: false,
        asNavFor: ".users-icon",
    });

    $('.users-icon').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: ".team-txt",
        prevArrow: '<i class="fas btn-left-2 fa-arrow-left"></i>',
        nextArrow: '<i class="fas btn-right-2 fa-arrow-right"></i>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
		  ]
    });


    $(window).on('scroll', function () {

        var scrol = $(window).scrollTop();

        if (scrol > 200) {

            $(".backtop").fadeIn(1000);
        } else {
            $(".backtop").fadeOut(1000);
        }


    });

    $(".backtop").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    //lightbok js 
    $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: 'red',
    });

    //loder
     $(window).on('load', function () {

        $('.preloader').delay(500).fadeOut(1000);

    }); 

    //menu active
    $(".nav-item a").on('click', function () {

        $(".nav-item a").removeClass('active');
        $(this).addClass('active');

    });

    //counter
    $('.number-count').counterUp({
        delay: 10,
        time: 1000
    });

    //Initialize filterizr with default options
    $(".work-btn li").on('click', function () {

        $(".work-btn li").removeClass('active');
        $(this).addClass('active');

    });

    //gallery part
    $('.filter-container').filterizr();

    $(".g-list").on('click', function () {

        $(".g-list").removeClass('g-active');
        $(this).addClass('g-active');

    });

    //progress-bar tooltip
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'manual'
    }).tooltip('show');

    var waypoints = $('.progress-bar').waypoint(function (direction) {
        $(".progress-bar").each(function () {
            var each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });
    }, {
        offset: '80%'
    });

    //loder
    $(window).on('load', function () {

        $('.preloader').delay(500).fadeOut(1000);

    });

    //menufix

    var menuoffset = $('.customNav').offset().top;


    $(window).on('scroll', function () {

        var scrol = $(window).scrollTop();

        if (scrol > 500) {

            $(".customNav").addClass('fixed');
        } else {
            $(".customNav").removeClass('fixed');
        }



    });

    //feedback slider
    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: false,
        dots: false,
        autoplay: true,
    });


    //blog part slider  js
    $('.blog').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: true,
        prevArrow: '<i class="fas btn-left-2 blog-btn  fa-arrow-left"></i>',
        nextArrow: '<i class="fas btn-right-2 blog-btn  fa-arrow-right"></i>',
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
		  ]
    });


    //Logo part slider  js
    $('.logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1000,
        speed: 1000,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
			},
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
			}
		  ]
    });

    // parcentage of skill part 
    $(document).ready(function () {

        $('#bar1').barfiller({
            barColor: '#37a000',
            duration: 3000
        });
        $('#bar2').barfiller({
            barColor: '#37a000',
            duration: 3000
        });
        $('#bar3').barfiller({
            barColor: '#37a000',
            duration: 3000
        });
        $('#bar4').barfiller({
            barColor: '#37a000',
            duration: 3000
        });

    });
    
    //animation scroll js
	$('a[href*="#"]:not([href="#').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 70
				}, 1000);
				return false;
			}
		}
	});




});
