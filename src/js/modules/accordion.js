// Аккордеон

"use strict"
//export function accordionItem() {
	const accordion = document.getElementsByClassName("accordion__box");

	for (let i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function () {
			this.classList.toggle("active");
		});
	}

	const accVac = document.querySelectorAll(".acc-vac__label");
	console.log(accVac);

	accVac.forEach((accVacLabel) => {
		accVacLabel.addEventListener("click", () => {
			const height = accVacLabel.nextElementSibling.scrollHeight;
			
			accVacLabel.classList.toggle("active");

			if (accVacLabel.classList.contains("active")) {
				accVacLabel.nextElementSibling.style.maxHeight = `${height}px`;
			} else {
				accVacLabel.nextElementSibling.style.maxHeight = "0px";
			}
		});
	});

//}


/* Нужно доработать

const accVac = document.querySelectorAll("acc-vac__box").forEach((item) => {
	item.addEventListener("click", () => {
		const parent = item.parentNode;
		if(parent.classList.contains("active")) {
			parent.classList.remove("active");
		} else {
			document.querySelectorAll(".acc-vac__box").forEach((child) => {
				child.classList.remove("active")
			});
			parent.classList.toggle("active");
		}	
	});
});
*/

/*const accVac = document.getElementsByClassName("acc-vac__box");

for (let i = 0; i < accVac.length; i++) {
	accVac[i].addEventListener("click", function () {
		this.classList.toggle("active");
	});
};
*/



