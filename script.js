
const cursor = document.querySelector('.cursor');
const form = document.getElementById('form');
const sendBtn = document.querySelector('.send-btn');
console.log(sendBtn);



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
}, 3000);

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



document.addEventListener('mousemove', (e) => {
    if(window.innerWidth > 1024){
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    } else {
        cursor.style.display = 'none'
    }
})

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    sendBtn.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                sendBtn.innerHTML = json.message;
            } else {
                console.log(response);
                sendBtn.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            sendBtn.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                sendBtn.innerHTML = 'Send'
            }, 3000);
        });
});