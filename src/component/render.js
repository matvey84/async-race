

export function render (...args) {

	const[header,firstSection] = args
	const body = document.querySelector('body');
	let appWrapper = document.createElement('div');	
	appWrapper.classList.add('wrapper');
	
	appWrapper.insertAdjacentHTML('afterbegin', header)
	appWrapper.append(firstSection())
	body.append(appWrapper)
}