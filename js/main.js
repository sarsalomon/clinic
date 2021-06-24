$(document).ready(function () {

        /* Fixed navbar */
        $(window).scroll(function () {
                if ($(window).scrollTop() > 40) {
                        $('.bottombar').addClass('fixed-top')
                        $('.bottombar').css('border-bottom', '1px solid rgba(0,0,0,.2)')
                }
                else {
                        $('.bottombar').removeClass('fixed-top')
                        $('.bottombar').css('border-bottom', 'none')
                }
        });


        /* Menu */
        let menu = $('.menu');
        menu.click(function () {
                $('.menu-nav').toggleClass('active')
        });

        let menuBtn = $('.menu-2')

        menuBtn.click(function () {
                $('.menu-nav-2').toggleClass('active-2');

        });

        /* Counter */
        $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                }, {
                        duration: 7000,
                        easing: 'swing',
                        step: function (now) {
                                $(this).text(Math.ceil(now));
                        }
                });
        });



        let BtnUp = $('#btn-to-top')

        BtnUp.fadeOut()

        $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                        BtnUp.fadeIn();
                } else {
                        BtnUp.fadeOut();
                }
        });

        BtnUp.click(function () {
                $('body, html').animate({
                        scrollTop: 0
                }, 1200);
        });

        $('a[href^="#list"]').click(function () {
                let target = $(this).attr('href');
                $('html, body').animate({ scrollTop: $(target).offset().top }, 1300);
                return false;
        });


        /* Loader */
        setTimeout(function () {
                $('.loader').fadeToggle();
        }, 2000)

        $('.lightgallery').lightGallery();


        wow = new WOW(
                {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       210,          // default
                mobile:       true,       // default
                live:         true        // default
              }
              )
              wow.init();
});