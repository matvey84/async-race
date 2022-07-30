import { createTrackAndCar } from "./trackAndCar";

export function secondSection (data) {

	const secondSection = document.createElement('article');
	secondSection.classList.add('second-section');
	let secondSectionContainer = document.createElement('div');
	secondSectionContainer.classList.add('second-section-container')
	let infoBlock = `
	<div class = "info-block">
		<span class = "page-title"> Garage (${data.length}) </span>
		<span class = "page-number"> Page #1 </span>
	</div>
	`;
	for(let i = 0; i < data.length; i++){
		secondSectionContainer.append(createTrackAndCar(data, i))
		
	}
	secondSectionContainer.insertAdjacentHTML('afterbegin', infoBlock)
	secondSection.append(secondSectionContainer)
	document.querySelector('.wrapper').append(secondSection)


}