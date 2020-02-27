const btnMenu = document.querySelector('.nav__btn-menu');
const menuOpen = document.querySelector('.nav__bars');
const menuClose = document.querySelector('.nav__close');
const mobileMenu = document.querySelector('.nav__menu');
const arrrowUp = document.querySelector('.arrow-up');



btnMenu.addEventListener('click', () => {
	menuOpen.classList.toggle('nav__bars--show');
	menuClose.classList.toggle('nav__close--show');
	mobileMenu.classList.toggle('nav__menu--active');
});

//Scroll menu
const linksMenu = document.querySelectorAll('.nav__menu a');

const scrollFunction = (event) => {
	const atrData = event.target.getAttribute('data-link');
	const fromTop = document.querySelector(`[data-section="${atrData}"]`);

	window.scroll({
		top: fromTop.offsetTop,
		behavior: 'smooth'
	});
	mobileMenu.classList.remove('nav__menu--active');
	menuClose.classList.toggle('nav__close--show');
	menuOpen.classList.toggle('nav__bars--show');
};

linksMenu.forEach(link => {
	link.addEventListener('click', scrollFunction);
})


//Arrow up
arrrowUp.addEventListener('click', () => {
	window.scroll({
		top: 0,
		behavior: "smooth"
	})
})

window.addEventListener('scroll', () => {
	if (window.scrollY > window.innerHeight / 2 + window.innerHeight) {
		arrrowUp.style.display = 'block';
	} else {
		arrrowUp.style.display = 'none';
	}
})