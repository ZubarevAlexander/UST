 // import Swiper JS
//import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import Swiper from 'swiper/bundle';
  // import Swiper styles

const myImageSlider = new Swiper(".works-slider-1", {
		//modules: [Navigation, Pagination, Scrollbar],
		
		// Стрелки
		navigation: {
			nextEl: '.swiper-button-next', // можно указывать любые классы, любых объектов
			prevEl: '.swiper-button-prev'
		},

		// Навигация
		// Буллеты, текущее положение, прогрессбар
		pagination: {
			el: '.swiper-pagination',
			/*
			// буллеты
			clickable: true, // кли по элементу пагинации
			// динамические буллеты
			dynamicBullets: true,
			// кастомные буллеты
			renderBullet: function(index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
			*/

			// Фракция - текущая страница слайдера из общего числа
			/*
			type: 'fraction',
			// Кастомый вывод фракции
			renderFraction: function(currenClass, totalClass) {
				return 'Фото <span class="' + currenClass + '"></span>' +
				' из ' + '<span class="' + totalClass + '"></span>';
			},
			*/

			/*
			// Прогрессбар - текущее состояние в слайдере
			type: "progressbar",
			*/
		},

		// Скролл
		
		scrollbar: {
			el: '.swiper-scrollbar',
			//возможность перетаскивать скролл
			draggable: true,
		},
		
		// Включение/отключение перетаскивания на ПК
		simulateTouch: true,
		// Чувствительность свайпа: 1 - по умолчанию, значение 0 - отключит свайп/перетакс на всех устровйствах
		touchRatio: 1,
		// Угол срабатывания свайпа/перетаскивания
		touchAngle: 45,
		// Курсор перетаскивания
		grabCursor: true,

		// Перетаскивание при клике на слайд
		slideToClickedSlide: false,
		
		// Навигация по хешу 
		hashNavigation: {
			// отслеживать состояние
			watchState: true,
		},

		// Управление клавиатурой
		keyboard: {
			// включить/выключить
			enabled: true,
			//включить/выключить, только когда слайдер в пределах вьюпорта
			onlyInViewport: true,
			// включить/выключить управление клавишами pageUp/pageDown
			pageUpDown: true,
		},

		// Управление колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 1,
			// Класс объекта на котором будет срабатывать прокрутка мышью
			// Если у нас много слайдеров стоит оставлять по умолчанию
			//eventsTarget: ""
		},

		// Автовысота
		autoHeight: false,

		// Количество слайдов для показа
		slidesPerView: 4, // "auto" - не рабоает если рядов больше, чем один

		// Отключение функционала если слайдов меньше чем нужно
		watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 20,

		// Количество пролистываемых слайдов
		slidesPerGroup: 1,

		// Активный слайд по центру
		centeredSlides: false,

		// Стартовый слайд
		initialSlide: 0, // изменяем номер слайда с которого все начнется, первый слайд - 0;

		// Мультирядность
		slidesPerColumn: 1, // для корректной работы нужно отключить автовысоту
  
		// Бесконечный слайдер
		loop: true, // не подразумевает скролл - отключаем, не работает с мультирядностью 
		
		// если auto у slidesPerView
		// количество дублирующих слайдов добавляем вручную
		loopedSlides: 0,

		// Свободный режим
		freeMode: true,

		// Автопрокрутка
		/*autoplay: {
			// Пауза между прокруткой
			delay: 1000,
			// Закончить на последнем слайде
			stopOnLastSlide: true,
			// Отключить после ручного переключения
			disableOnInteraction: false,
		},
		*/

		// Скорость переключения слайдов
		speed: 800, // по умолчанию

		// Вертикальный слайдер
		//direction: "vertical",
		//direction: "horizontal",

		// Эффекты переключения слайдов
		// Листание
		effect: "slide", // по умолчнию


		/*
		// Смена прозрачности
		effect: "fade",

		// Дополнение к fade
		fadeEffect: {
			// Параллельная смена прозрачности
			crossFade: true,
		},
		*/

		/*
		// Переворот
		effect: "flip",

		// Дополнение к flip
		flipEffect: {
			// Тень
			slideShadows: true,
			// Показ только активного слайда
			limitRotation: true,
		},
		*/

		/*
		// 3D куб
		effect: "cube",
		
		// Дополнение к cube
		cubeEffect: {
			// Настройки тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		*/
		/*
		// Эффект потока
		effect: "coverflow",

		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slidShadows: true,
		},
		*/

		// Брейк поинты (адаптив)
		// Ширина экрана
		
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 2,
			},
			767.98: {
				slidesPerView: 3,
			},
			991.98: {
				slidesPerView: 4,
			}
		},
		
		/*
		// Соотношение сторон
		breakpoints: {
			"@0.75": {
				slidesPerView: 1,
			},
			'@1.00': {
				slidesPerView: 2,
			},
			'@1.50': {
				slidesPerView: 3,
			}
		},
		*/

		// Отключить предзагрузку картинок
		preloadImages: false,
		// Lazy Loading
		// (подгрузка картинок)
		lazy: {
			// Подгружать на старте
			// Переключения слайда
			loadOnTransitionStart: false,
			// Подгрузить предыдущую и следующую картинки
			loadPrevNext: false,
		},

		// Включать данные настройки удобно, когда значение slidesPerView равно auto или больше, чем 1
		// Слежка за видимыми слайдами
		watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		watchSlidesVisibility: true,

		// Зум картинки
		zoom: {
			// Максимальное увеличение
			maxRatio: 3,
			// Минимальное увеличение
			minRatio: 1,
		},

		// Миниатюры (превью)
		/*
		thumbs: {
			// Свайпер с миниатюрам и его настройки
			swiper: {
				el: '.image-mini-slider',
				slidesPerView: 4,
			}
		},
		*/

		/*
		// Передача управления
		controller: {
			control: myTextSlider (переменная с другим слайдером)
		},
		*/

		// Обновить свайпер при изменениии элементов слайдера
		observer: true,

		// Обновить свайпер при изменениии родительских элементов слайдера
		observeParents: true,

		// Обновить свайпер при изменениии дочерних элементов слайда
		observeSlideChildren: true,

		/*
		// Виртуальные слайды / формирование слайда
		virtual: {
			slides: (function() {
				let slide = []
				for (let i = 0; i < 500; i++) {
					slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
				}
				return slide;
			}()),
		},
		*/

		// Доступность
		a11y: {
			// Включить/выключить
			enabled: true,
			// Сообщения
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide {{index}}',
			// и т.д.
		},
});

const myBigImageSlider = new Swiper('.works-slider-2', {

		// Стрелки
		navigation: {
			nextEl: '.swiper-button-next', // можно указывать любые классы, любых объектов
			prevEl: '.swiper-button-prev'
		},

		// Навигация
		// Буллеты, текущее положение, прогрессбар
		pagination: {
			el: '.swiper-pagination',
			
		},

		// Скролл
		
		scrollbar: {
			el: '.swiper-scrollbar',
			//возможность перетаскивать скролл
			draggable: true,
		},
		
		// Включение/отключение перетаскивания на ПК
		simulateTouch: true,
		// Чувствительность свайпа: 1 - по умолчанию, значение 0 - отключит свайп/перетакс на всех устровйствах
		touchRatio: 1,
		// Угол срабатывания свайпа/перетаскивания
		touchAngle: 45,
		// Курсор перетаскивания
		grabCursor: true,

		// Перетаскивание при клике на слайд
		slideToClickedSlide: false,
		
		// Навигация по хешу 
		hashNavigation: {
			// отслеживать состояние
			watchState: true,
		},

		// Управление клавиатурой
		keyboard: {
			// включить/выключить
			enabled: true,
			//включить/выключить, только когда слайдер в пределах вьюпорта
			onlyInViewport: true,
			// включить/выключить управление клавишами pageUp/pageDown
			pageUpDown: true,
		},

		// Управление колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 1,
			// Класс объекта на котором будет срабатывать прокрутка мышью
			// Если у нас много слайдеров стоит оставлять по умолчанию
			//eventsTarget: ""
		},

		// Автовысота
		autoHeight: false,

		// Количество слайдов для показа
		slidesPerView: 2, // "auto" - не рабоает если рядов больше, чем один

		// Отключение функционала если слайдов меньше чем нужно
		watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 20,

		// Количество пролистываемых слайдов
		slidesPerGroup: 1,

		// Активный слайд по центру
		centeredSlides: false,

		// Стартовый слайд
		initialSlide: 0, // изменяем номер слайда с которого все начнется, первый слайд - 0;

		// Мультирядность
		slidesPerColumn: 1, // для корректной работы нужно отключить автовысоту
  
		// Бесконечный слайдер
		loop: true, // не подразумевает скролл - отключаем, не работает с мультирядностью 
		
		// если auto у slidesPerView
		// количество дублирующих слайдов добавляем вручную
		loopedSlides: 0,

		// Свободный режим
		freeMode: true,

		// Автопрокрутка
		/*autoplay: {
			// Пауза между прокруткой
			delay: 1000,
			// Закончить на последнем слайде
			stopOnLastSlide: true,
			// Отключить после ручного переключения
			disableOnInteraction: false,
		},
		*/

		// Скорость переключения слайдов
		speed: 800, // по умолчанию

		// Вертикальный слайдер
		//direction: "vertical",
		//direction: "horizontal",

		// Эффекты переключения слайдов
		// Листание
		effect: "slide", // по умолчнию



		// Брейк поинты (адаптив)
		// Ширина экрана
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		},
		*/

		// Отключить предзагрузку картинок
		preloadImages: false,
		// Lazy Loading
		// (подгрузка картинок)
		lazy: {
			// Подгружать на старте
			// Переключения слайда
			loadOnTransitionStart: false,
			// Подгрузить предыдущую и следующую картинки
			loadPrevNext: false,
		},

		// Включать данные настройки удобно, когда значение slidesPerView равно auto или больше, чем 1
		// Слежка за видимыми слайдами
		watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		watchSlidesVisibility: true,

		// Зум картинки
		zoom: {
			// Максимальное увеличение
			maxRatio: 3,
			// Минимальное увеличение
			minRatio: 1,
		},


		// Обновить свайпер при изменениии элементов слайдера
		observer: true,

		// Обновить свайпер при изменениии родительских элементов слайдера
		observeParents: true,

		// Обновить свайпер при изменениии дочерних элементов слайда
		observeSlideChildren: true,

		// Доступность
		a11y: {
			// Включить/выключить
			enabled: true,
			// Сообщения
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide {{index}}',
			// и т.д.
		},
});


/*
// Слайдер в слайдере

new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация, пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа перетаскивания/свайпа для дочернего слайда
	nested: true, // не забыть переключить slideToClickedSlide на false
});


// Параллакс слайдер

new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// Скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/

// Запуск автопрокрутки при наведении
let sliderBlock1 = document.querySelector('.works-slider-1');

// myImageSlider - это переменная которой присвоен слайдер

sliderBlock1.addEventListener("mouseenter", function(e){
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 1000;
	myImageSlider.autoplay.start();
});
sliderBlock1.addEventListener("mouseleave", function(e){
	myImageSlider.autoplay.stop();
});

// Запуск автопрокрутки при наведении
let sliderBlock2 = document.querySelector('.works-slider-2');

// myImageSlider - это переменная которой присвоен слайдер

sliderBlock2.addEventListener("mouseenter", function(e){
	myBigImageSlider.params.autoplay.disableOnInteraction = false;
	myBigImageSlider.params.autoplay.delay = 1000;
	myBigImageSlider.autoplay.start();
});
sliderBlock2.addEventListener("mouseleave", function(e){
	myBigImageSlider.autoplay.stop();
});

/* Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total'); // общее количество страниц
let mySliderCurrentSlide = document.querySelector('.image-slider__current'); // текущеая страница

mySliderAllSlides.innerHTML = mySliderCurrentSlide.slides.length; // помещаем количество слайдов

// при переключении слайдера
myImageSlider.on('slideChange', function(){
	let currentSlide = ++myImageSlider.realIndex; // получаем индекс, увеличивая на 1
	mySliderCurrentSlide.innerHTML = currentSlide;
});
*/