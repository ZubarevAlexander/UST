// Форма на странице карьера
import JustValidate from 'just-validate';


export function validateFormCareer() {
	const formCareer = document.querySelector(".form-2");
	console.log(formCareer);
	const telSelector = formCareer.querySelector('input[type="tel"]');
	//const inputMask = new Inputmask('+7 (999) 999-99-99');
	//inputMask.mask(telSelector);

	const validate = new JustValidate('.form-career__form');

	validate
		.addField('.input-tel', [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Телефон обязателен',
			},
			{
				rule: 'function',
				validator: function() {
					const phone = telSelector.inputMask.unmaskedValue();
					return phone.length === 10;
				},
				errorMessage: 'Введите корректный телефон',
			}
		])
		.addField('.input-name', [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Введите имя',
			}
		])
	
}


