
$(document).ready(function () {

    // 下拉選單
    $('.dropdown').hover(function (e) {
        e.preventDefault();
        $('.dropdown-open').stop().slideToggle(400);

    });

    $('.dropdown-open').hover(function (e) {
        e.preventDefault();
        $('.dropdown').toggleClass('active');

    });


    // scroll to top 效果
    $("a[href$='.jpg']").addClass('fas fa-arrow-alt-circle-up');

    $('.top').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);



    })


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        speed: 800,
        effect: 'slide',
        spaceBetween: 100,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: false,
        },
        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },








    });









});


