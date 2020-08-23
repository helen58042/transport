$(function() {
	// Липкая шапка + гамбургер
	// $('.header-burger').click(function(event) {
	// 	$('.header-burger, .header-menu').toggleClass('active');
	// 	$('body').toggleClass('lock');   // при открытом меню блокируется прокрутка
	// });

	// Кнопка "Вверх"
	var btn = $('.btn-scroll-up');
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '1000');
	});

	// Кнопка "Гамбургер"
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileNavContainer = document.querySelector('#mobile-nav');

	menuToggle.onclick = function(){
		menuToggle.classList.toggle('menu-icon-active');
		mobileNavContainer.classList.toggle('mobile-nav--active');
	};

	$('.go_to').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
		}
		return false;
	});

	$('.advert__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

})


