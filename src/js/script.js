$(document).ready(function(){
    var header = $('.header');
	const mouseTarget = document.getElementById('header_space-false'), //получаем элемент по ID
		mouseTargetOut = document.getElementById('header_space-true'), //получаем элемент по ID
		logoMain = document.querySelector('.header__img_main'), //получаем элемент по селектору класса
      	logoUa = document.querySelector('.header__img_ua'); //получаем элемент по селектору класса

	// следим, когда мышка попадет в определенную зону и убираем класс out, тоесть появляется МЕНЮ
	mouseTarget.addEventListener('mouseenter', function() {
		header.removeClass('out');
	});

	// следим, когда мышка покидает определенную зону и при этом, экран должен быть прокручен на 300 ед. (для того чтоб меню не убиралось на стартовой странице) и добавляем класс out, тоесть МЕНЮ исчезает. Иначе меню остается на месте.
	mouseTargetOut.addEventListener('mouseleave', function() {
		if ( $(window).scrollTop() > 300 ) {
			header.addClass('out');
		}
	});

	// следим, когда мышка попадет в определенную зону (Логотип) и дабавляем класс active в две картинки с лого, в классах active прописанно для одной картинки display: none, для другой block. Тоесть одна появляется, а другая исчезает.
	logoMain.addEventListener('mouseenter', () => {
		logoMain.classList.add('active');
		logoUa.classList.add('active');
	
	});
	
	// следим, когда мышка покидает определенную зону (Логотип) и дабавляем класс active в две картинки с лого, в классах active прописанно для одной картинки display: none, для другой block. Тоесть одна появляется, а другая исчезает.
	logoMain.addEventListener('mouseleave', () => {
		logoMain.classList.remove('active');
		logoUa.classList.remove('active');
	});

	//Если экран прокручен на 300 ед., то меню исчезает
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
	
		if ( scrolled > 300 ) {
			header.addClass('out');
		} else {
			header.removeClass('out');
		}

	});

	//Когда экран прокручен на 1200 ед. появляется стрелка с быстрым возвратом на верх
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1200) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}

	});
	
	//добавляем класс (задний фон) к активному языку и удаляем класс у не активного
	$('div.header__lang').on('click', 'div:not(.header__lang__item_active)', function() {
        $(this).addClass('header__lang__item_active').siblings().removeClass('header__lang__item_active');
      });

	$('.promo__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arr.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right-arr.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                    
                }
            }
        ]
	});
	    
});