menuToggler.addEventListener('click', ev => {
	menuToggler.classList.toggle('open');
});

for (const element of document.querySelectorAll('nav a')) {
	element.addEventListener('click', ev => {
		menuToggler.classList.remove('open');
	});
}

contactform.addEventListener('submit', ev => {
 alert(`Contact Form Has Been Sent`)
 contactform.reset();
 ev.preventDefault();
});      
