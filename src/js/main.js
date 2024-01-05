$(window).load(function() {
    $('body').addClass('loaded');
    $('#loader-wrapper').hide();
    $(".W-yi-bg h2").addClass('fadeInUp1');
    $(".W-yi-bg strong").addClass('fadeInUp2');
    $(".W-yi-bg .W-p1").addClass('fadeInUp3');
    $(".W-yi-bg .W-p2").addClass('fadeInUp4');
    $(".W-yi-bg .W-mailbox").addClass('fadeInUp5');
    $('.Ws-tou').addClass('rubberBand')
});
$(function() {
    (function() {
        setTimeout(function() {
            $('body').addClass('loaded')
        }, 400);
        var Timer = null
          , aa = 1
          , bb = null;
        $('#wowslider-container .ws_images').css('height', $(window).height());
        $('#wowslider-container .ws_images').find('img').css('height', $(window).height());
        setInterval(function() {
            $('#wowslider-container .ws_images').find('img').css('height', $(window).height())
        }, 10);
        var mouse = {
            X: 0,
            Y: 0,
            CX: 0,
            CY: 0
        }
          , block = {
            X: mouse.X,
            Y: mouse.Y,
            CX: mouse.CX,
            CY: mouse.CY
        };
        $('.block').on('mousemove', function(e) {
            mouse.X = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
            mouse.Y = (e.pageY - $(this).offset().top) - $('.block').height() / 2
        });
        $('.block').on('mouseleave', function(e) {
            mouse.X = mouse.CX;
            mouse.Y = mouse.CY
        });
        setInterval(function() {
            block.CY += (mouse.Y - block.CY) / 12;
            block.CX += (mouse.X - block.CX) / 12;
            $('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)');
            $('.block').css({
                transform: 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
            })
        }, 20);
        $('.slider .item').each(function(i) {
            if (i == 0) {
                $(this).addClass('active');
                $(this).next().addClass('next');
                $(this).prev().addClass('prev')
            }
            $(this).attr('id', 'slide-' + i)
        });
        $('.nav-toggle').on('click', function() {
            if ($('.navigation').css('right') == '0px') {
                quxiao();
                if ($(window).width() <= 770) {
                    if ($(window).scrollTop() >= 480) {
                        $('.Ws-hui').stop(true, true).fadeIn(400)
                    } else {
                        $('.Ws-hui').stop(true, true).fadeOut(400)
                    }
                    ;$('.nav-toggle').css('background', 'transparent')
                }
            } else {
                $('.Ws-hui').hide();
                $('.navigation').stop().animate({
                    'right': '0px'
                }, 200, 'linear');
                $('.navigation ul').stop().animate({
                    'right': '1%'
                }, 100, 'linear');
                $('.W-logo').stop().animate({
                    'right': '1%'
                }, 100, 'linear');
                $('body').addClass('nav-open');
                $('.nav-zhe').show();
                Timer = setTimeout(function() {
                    $('.nav-toggle').css('background', '#ccc')
                }, 100)
            }
        });
        $('.nav-toggle').hover(function() {
            $(this).css('background', '#337ab7');
            if ($(window).width() >= 480) {
                $('.talkbubble').stop(true, true).fadeIn(400)
            } else {
                $('.talkbubble').stop(true, true).hide()
            }
        }, function() {
            $('.talkbubble').stop(true, true).fadeOut(400);
            if ($('body').hasClass('nav-open')) {
                $('.nav-toggle').css('background', '#ccc')
            } else {
                $('.nav-toggle').css('background', 'transparent')
            }
        });
        $('.navigation ').css('border-bottom-width', $(window).height());
        $(window).resize(function() {
            $('.navigation ').css('border-bottom-width', $(window).height())
        });
        $('.navigation ul li').hover(function() {
            $(this).find('a span').stop().animate({
                'width': '100%'
            }, 400)
        }, function() {
            if ($(this).find('a span').hasClass('span-active')) {
                return false
            } else {
                $(this).find('a span').stop().animate({
                    'width': '0'
                }, 100)
            }
        });
        $('.W-yyue').hover(function() {
            if (aa == 1) {
                $(this).find('span').eq(0).css('display', 'block')
            } else if (aa == 0) {
                $(this).find('span').eq(1).css('display', 'block')
            }
        }, function() {
            $(this).find('span').hide()
        });
        $('.W-yyue').on('click', function() {
            if ($(this).find('span').eq(0).css('display') == 'block') {
                aa = 0;
                $(this).find('span').eq(0).css('display', 'none');
                $(this).find('span').eq(1).css('display', 'block');
                sound.pause();
                return aa
            } else {
                aa = 1;
                $(this).find('span').eq(0).css('display', 'block');
                $(this).find('span').eq(1).css('display', 'none');
                sound.play();
                return aa
            }
            $(this).find('span').hide();
            return false
        });
        $('.W-introduce-me').on('click', function() {
            window.open('https://mebaron.top')
        });
        $('.W-time').hover(function() {
            $(this).css({
                'animation': 'runs 0.5s linear',
                '-o-animation': 'runs 0.5s linear',
                '-webkit-animation': 'runs 0.5s linear',
                '-ms-animation': 'runs 0.5s linear',
                '-moz-animation': 'runs 0.5s linear'
            });
            $('.W-zhuan').stop(true, true).fadeIn(200)
        }, function() {
            $(this).css({
                'animation': 'runn 0.5s linear',
                '-o-animation': 'runn 0.5s linear',
                '-webkit-animation': 'runn 0.5s linear',
                '-moz-animation': 'runn 0.5s linear',
                '-msanimation': 'runn 0.5s linear'
            });
            $('.W-zhuan').stop(true, true).fadeOut(700)
        });
        $('.W-tim-ul,.W-work-right ul').find('li').hover(function() {
            $('.W-jie1').css('color', '#fff');
            $('.W-jie1').eq($(this).index()).css('color', '#6bc30d');
            if ($(this).index() == 0) {
                xuanz1(0, '57px')
            } else if ($(this).index() == 1) {
                xuanz1(1, '182px')
            } else if ($(this).index() == 2) {
                xuanz1(2, '307px')
            }
        }, function() {
            $('.W-jie1').css('color', '#fff');
            if ($(this).index() == 0) {
                xuanz2(0, '63px')
            } else if ($(this).index() == 1) {
                xuanz2(1, '188px')
            } else if ($(this).index() == 2) {
                xuanz2(2, '313px')
            }
        });

        function xuanz1(n, top) {
            $('.W-tim-ul li').find('span').eq(n).stop().animate({
                'border-width': '8px',
                'right': '-20px',
                'top': top
            }, 100, 'linear')
        }

        function xuanz2(n, top) {
            $('.W-tim-ul li').find('span').eq(n).stop().animate({
                'border-width': '2px',
                'right': '-14px',
                'top': top
            })
        }
        ;$('.W-lian-bottom').find('a').hover(function() {
            $(this).find('span').stop(true, true).fadeIn(400)
        }, function() {
            $(this).find('span').stop(true, true).fadeOut(400)
        });
        $(document).on('touchstart', function() {
            $('.W-lian-bottom a').find('span').stop(true, true).fadeOut(400)
        });
        var mySwiper1 = new Swiper('.swiper-container1',{
            speed: 500,
            direction: 'vertical',
            paginationClickable: true,
            simulateTouch: false,
            pagination: '.swiper-pagination1',
            onSlideChangeEnd: function(swiper) {},
            onSlideChangeStart: function(swiper) {
                if (swiper.activeIndex == 0) {
                    $('.slider').stop(true, true).fadeIn(800);
                    $('.navigation li a').removeClass('a-active');
                    $('.navigation li').eq(0).find('a').addClass('a-active');
                    $('.navigation li a span').css('width', '0').removeClass('span-active');
                    $('.navigation li').eq(0).find('a span').css('width', '100%').addClass('span-active')
                } else if (swiper.activeIndex == 1) {
                    $('.slider').hide();
                    $('.W-introduce').addClass('fadeInLeft');
                    $('.navigation li a').removeClass('a-active');
                    $('.navigation li').eq(1).find('a').addClass('a-active');
                    $('.navigation li a span').css('width', '0').removeClass('span-active');
                    $('.navigation li').eq(1).find('a span').css('width', '100%').addClass('span-active')
                } else if (swiper.activeIndex == 2) {
                    $('.slider').hide();
                    $('#content').addClass('fadeInLeft');
                    $('.navigation li a').removeClass('a-active');
                    $('.navigation li').eq(2).find('a').addClass('a-active');
                    $('.navigation li a span').css('width', '0').removeClass('span-active');
                    $('.navigation li').eq(2).find('a span').css('width', '100%').addClass('span-active')
                } else if (swiper.activeIndex == 3) {
                    $('.slider').hide();
                    $('.W-work-nr').addClass('fadeInLeft');
                    $('.navigation li a').removeClass('a-active');
                    $('.navigation li').eq(3).find('a').addClass('a-active');
                    $('.navigation li a span').css('width', '0').removeClass('span-active');
                    $('.navigation li').eq(3).find('a span').css('width', '100%').addClass('span-active')
                } else if (swiper.activeIndex == 4) {
                    $('.slider').hide();
                    $('.swiper-container2,.W-works-zi').addClass('fadeInLeft');
                    $('.navigation li a').removeClass('a-active');
                    $('.navigation li').eq(4).find('a').addClass('a-active');
                    $('.navigation li a span').css('width', '0').removeClass('span-active');
                    $('.navigation li').eq(4).find('a span').css('width', '100%').addClass('span-active')
                } else if (swiper.activeIndex == 5) {
                    $('.slider').hide();
                    $('.W-lian').addClass('fadeInLeft');
                    $('.navigation li a').removeClass('a-active');
                    $('.navigation li').eq(5).find('a').addClass('a-active');
                    $('.navigation li a span').css('width', '0').removeClass('span-active');
                    $('.navigation li').eq(5).find('a span').css('width', '100%').addClass('span-active')
                }
            },
            keyboardControl: true,
            mousewheelControl: true,
            preventClicks: false,
            preventLinksPropagation: true,
            width: window.innerWidth,
            observer: true
        });
        $('.navigation').find('li').on('click touchstart', function() {
            moveNav($(this).index());
            quxiao()
        });

        function moveNav(index) {
            mySwiper1.slideTo(index)
        }
        var mySwiper2 = new Swiper('.swiper-container2',{
            speed: 700,
            paginationClickable: true,
            effect: 'fade',
            pagination: '.swiper-pagination2',
            paginationBulletRender: function(swiper, index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>'
            },
            observeParents: true,
            preventClicks: false,
            preventLinksPropagation: true,
            observer: true
        });
        var mySwiper3 = new Swiper('.swiper-container3',{
            speed: 700,
            spaceBetween: 20,
            effect: 'cube',
            pagination: '.swiper-pagination3',
            preventClicks: false,
            paginationClickable: true,
            observeParents: true,
            preventClicks: false,
            preventLinksPropagation: true,
            observer: true
        });
        var sound = new Howl({
            src: ["src/audio/show.mp3"],
            autoplay: true,
            loop: true
        });

        function quxiao() {
            clearInterval(Timer);
            $('.navigation').stop().animate({
                'right': '-100%'
            }, 100, 'linear');
            $('body').removeClass('nav-open');
            $('.nav-zhe').hide();
            $('.nav-toggle').css('background', 'transparent');
            $('.navigation ul').stop().animate({
                'right': '-150px'
            }, 100, 'linear');
            $('.W-logo').stop().animate({
                'right': '-80%'
            }, 100, 'linear')
        }
        if (!!window.ActiveXObject || "ActiveXObject"in window) {
            $('.W-introduce-me').find('img').hide();
            $('.W-introduce-me').css({
                'background': 'url(../static/images/baron.png) no-repeat',
                'background-size': 'cover'
            })
        }
        document.oncontextmenu = function() {
            return false
        };
        $(window).resize(function() {
            $('#wowslider-container .ws_images').css('height', $(window).height());
            // if ($(window).width() <= 770) {
            //     $('.swiper-container,.W-head-portrait,.nav-yuan,.bg-3,.W-page2,.W-s-yyue').removeClass('swiper-slide-blur');
            //     $('.nav-toggle').hover(function() {
            //         $(this).css('background', 'transparent')
            //     })
            // }
        });
        $('.Ws-hui').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 500)
        });
        $(window).scroll(function() {
            if ($(window).scrollTop() > 200) {
                $('.Ws-header').show()
            } else {
                $('.Ws-header').hide()
            }
            ;if ($(window).scrollTop() >= 480) {
                $('.Ws-hui').stop(true, true).fadeIn(400)
            } else {
                $('.Ws-hui').stop(true, true).fadeOut(400)
            }
            var topH = $(window).scrollTop()
              , topc = top1 - topH
              , topji = top2 - topH
              , topzuo = top3 - topH
              , toplian = top4 - topH;
            if ($(window).scrollTop() > 10) {
                $('.Ws-me').find('.Ws-me-title i').animate({
                    "width": 60
                }, 1000)
            }
            ;if (topc < $(window).height() - 40) {
                $('.Ws-ji').find('.Ws-me-title i').animate({
                    "width": 80
                }, 1000)
            }
            ;if (topji < $(window).height() - 40) {
                $('.Ws-jing').find('.Ws-me-title i').animate({
                    "width": 80
                }, 1000)
            }
            ;if (topzuo < $(window).height() - 40) {
                $('.Ws-zuo').find('.Ws-me-title i').animate({
                    "width": 80
                }, 1000)
            }
            ;if (toplian < $(window).height() - 40) {
                $('.Ws-lianxi').find('.Ws-me-title i').animate({
                    "width": 60
                }, 1000)
            }
        })
    }
    )()
});