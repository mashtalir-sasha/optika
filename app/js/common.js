$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-70 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.nav-mob__link').click(function() {
		$('.nav-mob').toggleClass('active');
	});
	$('.nav-list__item a').click(function() {
		$('.nav-mob').removeClass('active');
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: '/mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open({src:'#thn'});
				$('form').find("input[name=name], input[name=phone], input[name=postal]").val('');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	$('.about-slider').slick({
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		appendArrows: $('.about-slider__nav'),
		prevArrow: '<button type="button" class="slick-prev">BACK</button>',
		nextArrow: '<button type="button" class="slick-next">NEXT</button>'
	});

	$('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.reviews-slider__nav'),
		prevArrow: '<button type="button" class="slick-prev">BACK</button>',
		nextArrow: '<button type="button" class="slick-next">NEXT</button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.head-slider').slick({
		autoplay: true,
		appendArrows: $('.head-slider__nav'),
		prevArrow: '<button type="button" class="slick-prev">BACK</button>',
		nextArrow: '<button type="button" class="slick-next">NEXT</button>'
	});

	/*$('.buyBtn').click(function(e) {
		$('.selection, .slide1, .slide2, .slide3, .step-numb').removeClass('active');
		$('.selection').addClass('active');
		$('.slide1').addClass('active');
		$('.numb1').addClass('active');
		$('html, body').stop().animate({
			scrollTop: $('.selection').offset().top
		}, 300);
		e.preventDefault();
	});*/

	$('.back').click(function(e) {
		var numbSlide = $(this).data('slide');
		if (numbSlide==0) {
			$('.selection').removeClass('active');
			$('.slide1').removeClass('active');
			$('.step-numb').removeClass('active');
		}
		if (numbSlide==1) {
			$('.slide2').removeClass('active');
			$('.slide1').addClass('active');
			$('.step-numb').removeClass('active');
			$('.numb1').addClass('active');
			$('html, body').stop().animate({
				scrollTop: $('.selection').offset().top
			}, 300);
		}
		e.preventDefault();
	});

	$('.next').click(function(e) {
		var numbSlide = $(this).data('slide');
		if (numbSlide==2) {
			$('.slide1').removeClass('active');
			$('.slide2').addClass('active');
			$('.step-numb').removeClass('active');
			$('.numb2').addClass('active');
		}
		if (numbSlide==3) {
			$('.slide2').removeClass('active');
			$('.slide3').addClass('active');
			$('.step-numb').removeClass('active');
			$('.numb3').addClass('active');
		}
		$('html, body').stop().animate({
			scrollTop: $('.selection').offset().top
		}, 300);
		e.preventDefault();
	});

	$('.selection__more').click(function(e) {
		$('.selection-solution').toggleClass('active');
		e.preventDefault();
	});

	$('.selection-form').on('change',function() {
		var type = $(".type option:selected").data('one');
		if (type == 1 ) {
			$('.typeSelect').css('display', 'none');
			/*$('.typeSelect').css('opacity', '.3');
			$('.typeSelect').attr('disabled', 'disabled');*/
		} else {
			$('.typeSelect').css('display', 'block');
			/*$('.typeSelect').css('opacity', '1');
			$('.typeSelect').removeAttr('disabled');*/
		}
	});

	$('.checkLens').click(function(e) {
		var checkbox = $(this).find("input").prop('checked');
		var	name =  $(this).find("input").data('name');
		var	quantity =  $(this).find("input").data('quantity');
		var	price =  $(this).find("input").data('price');
		$('.append').empty();
		if (checkbox == true) {
			$('.append').append('<div class="selection-cart clearfix"><div class="selection-cart__name">'+name+'</div><div class="selection-cart__info">× <span class="quantity">'+quantity+'</span> = <span class="price">'+price+'</span> грн.</div></div>');
		}
	});

	$('.formLens').on('change',function() {
		var firstPrice = parseInt( $('.pack option:selected').data('price') );
		var rightQuantity = parseInt( $('[name=right-quantity]').val() );
		if (rightQuantity == 0) {
			var rightQuantity = 1;
			var rightPrice = firstPrice * rightQuantity;
		} else {
			var rightPrice = firstPrice * rightQuantity;
		}
		var leftQuantity = parseInt( $('[name=left-quantity]').val() );
		if (leftQuantity == 0) {
			var leftPrice = 0;
		} else {
			var leftPrice = firstPrice * leftQuantity;
		}
		var fullFirstPrice = rightPrice + leftPrice;
		var fullFirstQuantity = rightQuantity + leftQuantity;
		$('.firstPrice').html(fullFirstPrice);
		$('.firstQuantity').html(fullFirstQuantity+' шт.');
	});

	$('.checkSolution').click(function(e) {
		var checkbox = $(this).find("input").prop('checked');
		var	name =  $(this).find("input").data('name');
		var	quantity =  $(this).find("input").data('quantity');
		var	price =  $(this).find("input").data('price');
		var firstPrice = price;
		$('.append').empty();
		if (checkbox == true) {
			$('.append').append('<div class="selection-cart clearfix"><div class="selection-cart__name">'+name+'</div><div class="selection-cart__info">× <span class="quantity firstQuantity">'+quantity+'</span> = <span class="price firstPrice">'+price+'</span> грн.</div></div>');
		}
	});

	$('.formSolution').on('change',function() {
		var firstPrice = $('.checkSolution').find("input:checked").data('price');
		var price = $('.checkSolution').find("input:checked").data('price');
		var	name =  $('.checkSolution').find("input:checked").data('name');
		var	quantity =  $('.checkSolution').find("input:checked").data('quantity');

		var rightQuantity = parseInt( $('[name=right-quantity]').val() );
		if (rightQuantity == 0) {
			var rightQuantity = 1;
			var rightPrice = firstPrice * rightQuantity;
		} else {
			var rightPrice = firstPrice * rightQuantity;
		}
		var leftQuantity = parseInt( $('[name=left-quantity]').val() );
		if (leftQuantity == 0) {
			var leftPrice = 0;
		} else {
			var leftPrice = firstPrice * leftQuantity;
		}
		var fullFirstPrice = rightPrice + leftPrice;
		var fullFirstQuantity = rightQuantity + leftQuantity;
		$('.firstPrice').html(fullFirstPrice);
		$('.firstQuantity').html(fullFirstQuantity+' шт.');
	});

	$('.selection-volume__select').on('change',function() {
		var price = $(this).find("option:selected").data('price');
		var volume = $(this).find("option:selected").val();
		$('.volumeCart').html(volume);
		$('.priceCart').html(price);
	});

	/*$(document).on('change',function() {
		var totalSum = 0;
		$('.price').each(function() {
			totalSum += parseInt( $(this).html() );
			console.log(totalSum)
		});
	});*/

	$(".scroll").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var top = block.offset().top-400;
			} else {
				var top = block.offset().top+400;
			}
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animatedIn');
				}
			}
		});
	});


});
