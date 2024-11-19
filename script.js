

// intro section
const introName = document.querySelector('.name');
const introRole = document.querySelector('.role');

const aboutMeBtn = document.querySelector('.about-me-btn');
const aboutContainer = document.querySelector('.about-container');
const removeAboutPopup = document.querySelector('.remove-about-popup');
const aboutSection = document.querySelector('.about-section');
const openAboutFromNav = document.querySelector('.open-about-from-nav');


setTimeout(() => {
    introRole.classList.remove('hidden')
}, 2500);



// function aboutMePopup(){

// }


aboutMeBtn.addEventListener('click', () => {
    aboutContainer.classList.add('show-about-popup')
})

removeAboutPopup.addEventListener('click', () => {
    aboutContainer.classList.remove('show-about-popup')
})

aboutContainer.addEventListener('click', () => {
    aboutContainer.classList.remove('show-about-popup')
})

aboutSection.addEventListener('click', (e) => {
    e.stopPropagation()
})

openAboutFromNav.addEventListener('click', () => {
    aboutContainer.classList.add('show-about-popup')
})