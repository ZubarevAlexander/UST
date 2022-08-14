// МЕНЮ БУРГЕР
// 1. Получаем объект (иконку бургер)
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
// 2. Делаем проверку на наличие этого класса
if (iconMenu) {
	// 3. Создаю событие клик по иконке
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
		// убираю пролистывание страницы при открытом меню
		document.body.classList.toggle("_lock");
	});
}