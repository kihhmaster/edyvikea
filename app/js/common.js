$(function() {

	// Custom JS
	$(document).ready(function(){
		$(".slider_1").owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 0,
			URLhashListener: false,
			startPosition: 'URLHash',
			animateOut: 'bounceOut',
			animateIn: 'bounceInRight',
			// rewind: true,// возврощает к начальному элементу, при достижение конца
			loop: true, //Зацикливаем слайдер
			margin: 0, //Отступ от элемента справа в 50px
			dots: true,
			nav: false, //Отключение навигации 
			autoplay: true, //Автозапуск слайдера
			smartSpeed: 2000, //Время движения слайда
			autoplayTimeout: 15000, //Время смены слайда
			autoplayHoverPause: true,	//Пауза при наведении.
			// navText : ["<img src='img/@2x/owl-prev.png'>","<img src='img/@2x/owl-next.png'>"],
			responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
						0:{
								items:1
						},
						600:{
								items:1
						},
						1000:{
								items:1
						}
				}
	
			
		});
		$(".slider_2 ").owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 0,
			URLhashListener: false,
			startPosition: 'URLHash',
			animateOut: 'bounceOut',
			animateIn: 'bounceInRight',
			// rewind: true,// возврощает к начальному элементу, при достижение конца
			loop: false, //Зацикливаем слайдер
			margin: 0, //Отступ от элемента справа в 50px
			dots: true,
			nav: false, //Отключение навигации 
			autoplay: true, //Автозапуск слайдера
			smartSpeed: 1000, //Время движения слайда
			autoplayTimeout: 15000, //Время смены слайда
			autoplayHoverPause: true,	//Пауза при наведении.
			// navText : ["<img src='img/@2x/owl-prev.png'>","<img src='img/@2x/owl-next.png'>"],
			responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
						0:{
								items:1
						},
						600:{
								items:1
						},
						1000:{
								items:1
						}
				}
	
			
		});
	});
	


	$('.button').magnificPopup({
		items: {
			src: '#popup_button-content',
			type: 'inline'
		}
	});

	



	$(function() {
		var showcase = $("#showcase")
		showcase.Cloud9Carousel({
				yOrigin: 30,
				yRadius: 30,
				itemClass: "card",
				buttonLeft: $(".snav-left"),
				buttonRight: $(".snav-right"),
				bringToFront: true,
				transforms: true,
				mouseWheel: true,
				frontItemClass: "active",
				onLoaded: function() {
						showcase.css('visibility', 'visible')
						showcase.fadeIn( 100 )
				}
		})
	});

	//fancybox галерея
	$('[data-fancybox="images"]').fancybox({
		loop: true,
		autoPlay: true,
		buttons : [ 
			'close'
		  ],
		idleTime: 3,
		clickOutside: "close",
		afterLoad: fancyPlay,
	});
	function fancyPlay() {
		$.fancybox.getInstance().SlideShow.stop();
		$.fancybox.getInstance().SlideShow.start(3000);
	}
	// $('input[type=submit]').on("click", function(e) {
	// 	if( $('#nameCity').val() === "") {
	// 		$.fancybox.open({
	// 			src: "#city",
	// 			afterLoad : function() {
	// 				$("#city").css("display", "inline-flex");
	// 				$("#city select").css("height", "50px");
	// 		},
	// 			afterClose : function() {
	// 				$("#city").css("display", "flex");
	// 				("#city select").css("height", "auto");
	// 			},
	// 			clickOutside: "close",
	// 		});
	// 	}
	// });
	
	// вызов по-умолчанию при загрузке страницы
	_changeInfo("Пн.", "ТЦ \"Курс\"", "edy_v_ikea", "https://instagram.com/edy_v_ikea?igshid=1qt4pdjnmpupn");

	//изменение информации о доставке при изменении города
	$('#nameCity').change(function() {
		var val = $(this).val();
		
		if(val == "Егорьевск") {
			_changeInfo("Вт.", "ЦК \"Пегас\"", "_edy_v_ikea_", "https://instagram.com/_edy_v_ikea_?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Зарайск") {
			_changeInfo("Пн.", "Водонапорная башня", "edy_v_ikea", "https://instagram.com/edy_v_ikea?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Кашира") {
			_changeInfo("Пн.", "McDonald\'\s", "edy_v_ikea_", "https://instagram.com/edy_v_ikea_?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Коломна") {
			_changeInfo("Вт.", "ТЦ \"Рио\"", "edy_v_ikea", "https://instagram.com/edy_v_ikea?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Луховицы") {
			_changeInfo("Вт.", "ул.Жуковского д.30", "edy_v_ikea", "https://instagram.com/edy_v_ikea?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Ожерелье") {

		}
		else if(val == "Озеры") {
			_changeInfo("Пн.", "м.\"Ашан\"", "edy_v_ikea", "https://instagram.com/edy_v_ikea?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Серпухов") {
			_changeInfo("Пн.", "м.\"METRO\"", "edy_u_ikea", "https://instagram.com/edy_u_ikea?igshid=12onjakq2rtsd");
		}
		else if(val == "Ступино") {
			_changeInfo("Вт.", "ТЦ \"Курс\"", "edy_v_ikea_", "https://instagram.com/edy_v_ikea_?igshid=1qt4pdjnmpupn");
		}
		else if(val == "Чехов") {
			_changeInfo("Пн.", "McDonald\'\s", "edy_u_ikea", "https://instagram.com/edy_u_ikea?igshid=12onjakq2rtsd");
		}
		else if(val == "Воскресенск") {
			_changeInfo("Вт.", "ТЦ \"Воскресенск\"", "_edy_v_ikea_", "https://instagram.com/_edy_v_ikea_?igshid=1qt4pdjnmpupn");
		}
		else {
			
		}
   });

   //
	function _changeInfo(_day, _place, _inst, _href) {
		$('#delivery_day').text(_day);
		$('#delivery_date').text(_changeDate(_day));
		$('#delivery_place').text(_place);
		$('#delivery_inst').text(_inst);
		$('#delivery_inst').prop("href", _href);
		$('.insta').prop("href", _href);
	}
	
	function _changeDate(_day) {
		//var now = new Date(2020, 8, 27, 11);
		var now = new Date();
		var nowDay = now.getUTCDay();
		var nowHour = now.getUTCHours() + 3;
		var diff = (nowDay == 0 || nowDay == 1 || nowDay == 2) ? 0 : Math.abs(6 - nowDay);

		if(nowDay == 0) {
			diff += (_day == "Пн.") ? 1 : 2;
		}
		else if (nowDay == 1) {
			diff += (_day == "Пн.") ? 0 : 1;
		}
		else if (nowDay == 2) {
			diff += (_day == "Пн.") ? -1 : 0;
		}
		else {
			diff += (_day == "Пн.") ? 2 : 3;
		}

		//var d = new Date(2020, 8, 27, 11);
		var d = new Date();
		if( (nowDay == 0 && nowHour >= 14) || nowDay == 1 || nowDay == 2 ) {
			d.setDate( d.getDate() + diff + 7);
		}
		else {
			d.setDate( d.getDate() + diff);
		}
		return d.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: 'numeric',});
	}


	
	(function($) {
		$(function() {
			$("ul.tabs__caption").on("click", "li:not(.active)", function() {
				$(this)
					.addClass("active")
					.siblings()
					.removeClass("active")
					.closest("div.tabs")
					.find("div.tabs__content")
					.removeClass("active")
					.eq($(this).index())
					.addClass("active");
			});
		});
	})(jQuery);
	

});
