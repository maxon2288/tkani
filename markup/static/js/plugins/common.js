$(document).ready(function(){
    $("input[name='phone']").mask("+7(999)-999-99-99");
    $('.form').validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            sur: {
                required: true,
            },
            name: {
                required: true,
            },
            father: {
                required: true,
            },
            phone: {
                required: true,
            },
            url: {
                required: true,
            },
            req: {
                required: true,            
            },
            text: {
                required: false,
            },
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            // var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                // type: "POST", //Метод отправки
                // url: '/mail.php', //путь до php фаила отправителя
                // data: form_data,
                // cache: false,
                // processData: false,
                // contentType: false,
                success: function() {
                    $("input, textarea").val('');
                    $(".modal.modal-feedback, .overlay").addClass('visible');                
                    setTimeout (function(){
                        $(".modal.modal-feedback, .overlay").removeClass('visible');
                     }, 3000);
                }
            });
        },
    });
    
    $('.form-reg').validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            sur: {
                required: true,
            },
            name: {
                required: true,
            },
            father: {
                required: true,
            },
            phone: {
                required: true,
            },
            url: {
                required: true,
            },
            req: {
                required: true,            
            },
            text: {
                required: false,
            },
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $('input, textarea').val('');
            $.ajax({
                // type: "POST", //Метод отправки
                // url: '/mail.php', //путь до php фаила отправителя
                data: form_data,
                // cache: false,
                // processData: false,
                // contentType: false,
                success: function() {
                    location.href = "thanx.html";
                }
            });
        },
    });
    
    $(".filter-submit").click(function() {
        $.ajax({
    
    
            
            success: function() {
                // location.reload;
            }
        });
    });
    
    $('.form-sign').validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            sur: {
                required: true,
            },
            name: {
                required: true,
            },
            father: {
                required: true,
            },
            phone: {
                required: true,
            },
            url: {
                required: true,
            },
            req: {
                required: true,            
            },
            text: {
                required: false,
            },
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $('input, textarea').val('');
            $.ajax({
                // type: "POST", //Метод отправки
                // url: '/mail.php', //путь до php фаила отправителя
                data: form_data,
                // cache: false,
                // processData: false,
                // contentType: false,
                success: function() {
                }
            });
        },
    });
    
    // var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext('2d');
    // ctx.font = "50px arial";
    // var gradient = ctx.createLinearGradient(0, 0, 250, 200);
    // gradient.addColorStop(1, "#f7a0c9");
    // gradient.addColorStop(0.6, "#9079e0");
    // gradient.addColorStop(0, "#9079e0");
    // ctx.fillStyle = gradient;
    // ctx.fillText("спасибо за регистрацию", 0, 100);
    
    
    $(".overlay").click(function() {
        $(".modal, .overlay, .filter").removeClass("visible");
    });
    
    
    var mySwiper = new Swiper('.main-slider', {
        speed: 1200,
        spaceBetween: 100,
        parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    
        grabCursor: true,
    
    });
    
    var mySwiper = new Swiper('.filter__slider', {
        speed: 1200,
        spaceBetween: 100,
        parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    
        grabCursor: true,
    });
    
    var galleryThumbs = new Swiper('.swiper-container-thumbs', {
        grabCursor: true,
        spaceBetween: 24,
        slidesPerView: 3,
      });
      var galleryTop = new Swiper('.swiper-container-top', {
        spaceBetween: 20,
        grabCursor: true,
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    
    $(window).scroll(function () {
        var topH = $(".first").innerHeight();
        var htopH = $(".header__top").innerHeight();
        var topS = topH + htopH;
    
        var s = $(window).scrollTop();
    
        if (s >= topS) {
            $(".header__menu").addClass('fixed');
        } else {
            $(".header__menu").removeClass('fixed');
    
        }
    });
    
    // $('.yur').click(function() {
    //     if ($(this).is(':checked')) {
    //         $(".more-input").addClass("visible");
    //     } else {
    //         $(".more-input").removeClass("visible");
    //         $(".more-input input").val("");
    //     }
    // });
    
    $('.yur').change(function () {
        if ($(this).val() === 'ur') {
            $(".more-input").addClass("visible");
            $(".more-radio .preds").prop('checked', false);
        } else {
            $(".more-input").removeClass("visible");
            $(".more-input input").val('');
            $(".more-input input").removeClass('valid');
            $(".more-input input").removeClass('invalid');
    
            $(".more-link input").val('');
            $(".more-link").removeClass("visible");
            $(".more-link input").removeClass('valid');
            $(".more-link input").removeClass('invalid');
        }
    });
    
    $('.yur').change(function () {
        if ($(this).val() === 'chas') {
            $(".more-radio").addClass("visible");
        } else {
            $(".more-radio").removeClass("visible");
            $(".more-radio .preds").prop('checked', false);
            $(".more-link input").val('');
            $(".more-link").removeClass("visible");
            $(".more-link input").removeClass('valid');
            $(".more-link input").removeClass('invalid');
        }
    });
    
    $('.preds').change(function () {
        if ($(this).val() === 'preds') {
            $(".more-link").addClass("visible");
        } else {
            $(".more-link input").val('');
            $(".more-link").removeClass("visible");
            $(".more-link input").removeClass('valid');
            $(".more-link input").removeClass('invalid');
        }
    });
    
    $( ".payment-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },    
    });

    
    
    
    $(document).ready(function() {
        var start = $(".price-kg").html();
        $(".price-result").html(start + " руб.");
    });
    
    $(".lightgallery").lightGallery();
    
    $(".tabs__delete").click(function() {
        var it = $(this);
        $.ajax({
            // type: "POST", //Метод отправки
            // url: '/mail.php', //путь до php фаила отправителя
            // cache: false,
            // processData: false,
            // contentType: false,
            success: function() {
                it.closest("tr").addClass('invisible');
            }
        });
    });
    
    var mySwiper = new Swiper('.deliv-slider', {
        speed: 500,
        spaceBetween: 0,
        slidesPerView:  "auto",
        grabCursor: true,
    });
    
    var mySwiper = new Swiper('.menu-slider', {
        speed: 500,
        spaceBetween: 15,
        slidesPerView:  "auto",
    
        grabCursor: true,
    
        navigation: {
            nextEl: '.menu-slider-next',
            prevEl: '.menu-slider-prev',
        },
    
    });
    
    
    if ($(window).width() <= 1024) {
        $(function() {
            var el = $('.parralax-1');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(1*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-2');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(1*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-3');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(1*scroll)+'px'
                });
            });
        });
    } else if($(window).width() >= 1024) {
        $(function() {
            var el = $('.parralax-1');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(.5*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-2');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(.3*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-3');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(.7*scroll)+'px'
                });
            });
        });
    }
    
    $(".messages__item svg").click(function() {
        $(this).parent(".messages__item").addClass('invisible')
    });
    
    
    $(document).ready(function() {
        $('.form-select').niceSelect();
    });
    
    $('.m-img-cont').each(function(){
        var imgCont = $(this).find('img').attr('src');
        $(this).css('background-image','url('+imgCont+')');
    });
    
    $( ".tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".tabs-ord" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".main-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".tabs-room" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".tabs-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    new WOW().init();
    
    
    $(document).ready(function() {
        var minX = 0;
        var maxX = 1500;
        var curX = 300;
        var xurY = 900;
        $("#flat-slider").slider({
            max: maxX,
            min: minX,
            range: true,
            values: [curX, xurY],
            slide: function( event, ui ) {
                $( ".filter__price-result" ).text('Цена: ' + ui.values[ 0 ] + " - " + ui.values[ 1 ] + ' руб.' );
                $(".input-ot").val(curX);
                $(".input-do").val(curY);
            },
            create: function(event, ui) {
                $( ".filter__price-result" ).text( 'Цена: ' + curX+ " - " + xurY  + ' руб.');
                $(".input-ot").val(curX);
                $(".input-do").val(curY);
            }
        });
    
    });
    var scr = screen.width;
    
    if ($(".header__menu-link").length < 8) {
        $(".header__menu-toggle, .menu-open").css("display", "none")
    } else {
        $(".header__menu-toggle, .menu-open").css("display", "flex")
    }
    
    $('.header__menu .wrapper .menu-open').append('<div class="header__menu-toggle"></div>');
        var number = 0;
        var stWidth = (screen && screen.width);
        
        if(stWidth >= 1300){
            number = 5;
        } else if(stWidth <= 1100 && stWidth >= 1100){
            number = 4;
        } else if(stWidth <= 1100 && stWidth >= 900){
            number = 3;
        } else if(stWidth <= 900 && stWidth >= 500){
            number = 2;
        }else if(stWidth <= 500 && stWidth >= 320){
            number = 1;
        } else {
            number = 1;
        }
        $('.header__menu .header__menu-link').each(function () {
            if($(this).index() > number){
                $(this).appendTo('.header__menu-toggle');
            }
    });
    
    $(".menu-open").click(function() {
        $(".header__menu-toggle").toggleClass('vis')
    });
    
    
    $(".filter__open").click(function() {
        $(".filter, .overlay").addClass("visible")
    });
        
    
    $('.news-col__archive-items .form__checkbox input').click(function(){
        if ($(this).is(':checked')){
            var month = $(this).attr('data-month');
            var year = $(this).attr('data-year');
            var s = $('.form-archive').serialize();
            var data = {
                'action'  : 'loadmore',
                'month'   : month,
                'year'    : year,
            };
            $.ajax({
                url: ajaxurl, // обработчик
                data: data, // данные
                type: 'POST', // тип запроса
                success: function(data){
                }
            });
        }
    });
    $(".basket-index").html('0');
    
    $('.filter__item-button').click(function(event){
        event.preventDefault();
        
        $.ajax({
            // url: ajaxurl, // обработчик
            // data: data, // данные
            // type: 'POST', // тип запроса
            success: function(data){
                var val = parseInt($(".basket-index").html());
                val++;
                $(".basket-index").html(val);
            }
        });
    });
    
    $(function () {
        $(".callDrop").on('click', function (event) {
            event.preventDefault();
            var popup = $(this).attr('data-block');
            // $('body').css('overflow', 'hidden');
            // $('.overlay').addClass('visible');
            $('.' + popup).toggleClass('visible');
        });
    });

    

    ///--------------------
    /// Калькулятор корзины
    ///--------------------

    calculate();
    $('.quantity input').change(function(){
        var max = parseFloat($(this).attr('max'));
        var min = parseFloat($(this).attr('min'));
        var value = parseFloat($(this).val());
        if(value >= max) {
            $(this).val(max.toFixed(1));
        }
        if(value <= min) {
            $(this).val(min.toFixed(1))
        }
        calculate();

    });
    $('.quantity-up').click(function(){
        var max = parseFloat($('.quantity input').attr('max'));
        var min = parseFloat($('.quantity input').attr('min'));
        var step = parseFloat($('.quantity input').attr('step'))
        var value = parseFloat($('.quantity input').val())

        value = parseFloat(value + step).toFixed(1);
        if(value >= max) {
            $('.quantity input').val(max);
        } else if(value <= min) {
            $('.quantity input').val(min)
        } else {
            $('.quantity input').val(value);
        }
        calculate();
    })
    $('.quantity-down').click(function(){
        var max = parseFloat($('.quantity input').attr('max'))
        var min = parseFloat($('.quantity input').attr('min'))
        var step = parseFloat($('.quantity input').attr('step'))
        var value = parseFloat($('.quantity input').val())

        value = parseFloat(value - step).toFixed(1);
        if(value >= max) {
            $('.quantity input').val(max);
        } else if(value <= min) {
            $('.quantity input').val(min)
        } else {
            $('.quantity input').val(value);
        }
        calculate();
    })
    function calculate() {
        var price = parseFloat($('.quantity input').closest('tr').data('price'))
        var value = parseFloat($('.quantity input').val())

        $('.tabs__percent-30').html(parseFloat(price*value/100*30).toFixed(1))
        $('.tabs__percent-70').html(parseFloat(price*value/100*70).toFixed(1))
        $('.tabs__percent-100').html(parseFloat(price*value).toFixed(1))
    }
})
