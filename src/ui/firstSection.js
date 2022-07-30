export function firstSection () {
	
  let firstSection = document.createElement('section')
	firstSection.classList.add('first-section');
	const firstSectionLayout = `
	<div class="first-section-container">
			<div class="first-section-form-container">
				<div class="first-section-form">
					<div class="first-section-form-create-car-block">
						<input type="text" name="create" class="create-car-input">
						<input type="color" class="get-car-color-input">
						<button class="button create-new-car-button">Create car </button>
					</div>
					<div class="first-section-form-update-form">
						<input type="text" name="create" class="change-car-brand-input">
						<input type="color" class="change-car-color-input">
						<button class="button change-car-button">Change car </button>
					</div>
					<div class= "race-management-button-block">
						<button class="button start-race">Race</button>
						<button class="button reset-button">Reset</button>
						<button class="button create-more-cars-button">Create cars</button>
					</div>
				</div>
			</div>
	`
	firstSection.insertAdjacentHTML('afterbegin', firstSectionLayout )
	return firstSection

}