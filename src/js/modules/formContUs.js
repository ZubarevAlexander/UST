// Работа с формой
export function validateFromContUs() {
	document.addEventListener("DOMContentLoaded", function () {
		//Перехватим отправку формы при нажатии по кнопке
		const form = this.getElementById("form");
		//Вешаем событие
		form.addEventListener("submit", formSend);

		async function formSend(e) {
			e.preventDefault(); // запрещаем стандартную отправку формы

			let error = formValidate(form);

			let formData = new FormData(form); // вытягивает все данные полей
			//formData.append("image", formImage.files[0]); // добавляем в переменную изображение

			// наличие ошибок
			if (error === 0) {
				// Когда нет ошибок, делаем отправку формы
				form.classList.add("_sending");

				let response = await fetch("sendmail.php", { // данный файл возвращет JSON ответ
					method: "POST",
					body: formData
				});

				// Нужно получить ответ об успешной отправке или нет
				if (response.ok) {
					let result = await response.json(); // получает ответ
					alert(result.message); // Выводим пользователю сообщ
					formPreview.innerHTML = ""; // чистим поля
					form.reset();
					form.classList.remove("_sending");
				} else {
					alert("Ошибка!");
					form.classList.remove("_sending");
				}

			} else {
				alert("Заполните обязательные поля");
			}
		}

		let formItem = document.querySelectorAll(".form-contact-us__input");

		document.documentElement.addEventListener("click", function (e) {
			for (let i of formItem) {
				if (i.classList.contains("_error")) {
					i.classList.remove("_error");
				}
			}
		});

		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll("._req"); //все объекты с классом .req(require - обязательный)

			// нужно пройтись по всем элементам в форме, на наличие класса выше
			for (let index = 0; index < formReq.length; index++) {
				const input = formReq[index];
				// Каждый раз когда мы приступим к проверке надо убрать у объекта класс error
				formRemoveError(input);

				//Делаем отдельно для поля email, так как отличная от других проверка
				if (input.classList.contains("_email")) {
					if (emailTest(input)) {
						formAddError(input);
						error++;
					}
					//далее проверяем наличие чекбокса
				} else if (input.getAttribute("type" === "checkbox") && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					//Обычная проверка заполнено ли поле вообще
					if (input.value === "") {
						formAddError(input);
						error++;
					}
				}
			}
			// из этой функции мы должны вернуть значение error
			return error;
		}

		function formAddError(input) {
			input.parentElement.classList.add("_error");
			input.classList.add("_error");
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove("_error");
			input.classList.remove("_error");
		}

		// Функция теста email
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}

		/*
		// Прикрепляем файл и видим ее превью при добавлении
	
		// Получает input file в переменную
		const formImage = document.getElementById("formImage");
		// Получаем div превью в переменную
		const formPreview = document.getElementById("formPreview");
		
		
		// Слушаем изменения в input file
		formImage.addEventListener("change", () => {
			uploadFile(formImage.files[0]);
		});
	
		function uploadFile(file) {
			//Проверяем тип файла
			if (!['image/jpeg','image/png','image/gif'].includes(file.type)) {
				alert("Разрешены только изображения");
				formImage.value = "";
				return;
			}
	
			// Проверяем размер файла (<2 Мб)
			if (file.size > 2 * 1024 * 1024) {
				alert("Файл должен быть менее 2 Мб");
				return;
			}
	
			// Если все подходит выводим пользователю
			var reader = new FileReader();
			reader.onload = function(e) {
				formPreview.innerHTML = `<img src ="${e.target.result}" alt="Фото">`; // Помещаем внуть Дива
			};
			reader.onerror = function (e) {
				alert ('Ошибка');
			};
			reader.readAsDataURL(file);
		}
		*/

	});
}