document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const afterImg = this.getAttribute('data-after-img');
            const beforeImg = this.getAttribute('data-before-img');

            const contentImages = document.querySelectorAll('.content-image');
            contentImages[0].src = afterImg;
            contentImages[1].src = beforeImg;
            console.log("afterImg::", afterImg);
            console.log("contentImages[0].src::", contentImages[0].src);
            AfterBefore();
        });
    });
    AfterBefore();
});


function AfterBefore (){
    let active = false;

    document.querySelector('.scroller').addEventListener('mousedown',function(){
        active = true;
        document.querySelector('.scroller').classList.add('scrolling');
    });

    document.body.addEventListener('mouseup',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });

    document.body.addEventListener('mouseleave',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });

    document.body.addEventListener('mousemove',function(e){
        if (!active) return;
        let x = e.pageX;
        x -= document.querySelector('.wrapper').getBoundingClientRect().left;
        scrollIt(x);
    });

    function scrollIt(x){
        let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
        document.querySelector('.after').style.width = transform+"px";
        document.querySelector('.scroller').style.left = transform-25+"px";
    }

    scrollIt(150);

    document.querySelector('.scroller').addEventListener('touchstart',function(){
        active = true;
        document.querySelector('.scroller').classList.add('scrolling');
    });

    document.body.addEventListener('touchend',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });

    document.body.addEventListener('touchcancel',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
}




(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });

        // International carousel
        $(".services-carousel").owlCarousel({
            autoplay: true,
            items: 3,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            margin: 25,
            autoHeight: false,
            nav : true,
            navText : [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            responsiveClass: true,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });

        $(".software-int-carousel").owlCarousel({
            autoplay: true,
            items: 5,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            margin: 25,
            nav : true,
            navText : [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            responsiveClass: true,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 3,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

