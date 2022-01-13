const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const navItem = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
    handleNavItemsAnimation()
}

const handleNavItemsAnimation = ()=>{
let delayTime =0
navItem.forEach(item => {
item.classList.toggle('nav-items-Animation')


})


}

burgerBtn.addEventListener('click', handleNav)
