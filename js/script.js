const hamburgerOpen = document.querySelector('.hamburger-icon-open')
const hamburgerClose = document.querySelector('.hamburger-icon-close')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const nav = document.querySelector('.header-nav')

//features section
const featureAllBtns = document.querySelectorAll('.feature-btn')
const featureBtn1 = document.querySelector('.features-btn-1')
const featureBtn2 = document.querySelector('.features-btn-2')
const featureBtn3 = document.querySelector('.features-btn-3')
const image = document.getElementById('features-pictures-image')
const featureTextTitle = document.querySelector('.features-pictures-text-title')
const featureTextDescription = document.querySelector('.features-pictures-text-description')

//Questions section
let questions = document.querySelectorAll(".question");

//Contact
const input = document.querySelector('.email-input')
const errorMsg = document.querySelector('.error-msg')
const contactBtn = document.querySelector('.contact-btn')
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

//header section functions
hamburgerOpen.addEventListener('click', () => {
    hamburgerMenu.style.display = 'block'
    hamburgerMenu.classList.add('fade-in')
    setTimeout(() => {
        hamburgerMenu.classList.remove('fade-in')
    }, '800')

})

hamburgerClose.addEventListener('click', () => {
    hamburgerMenu.classList.add('fade-out')
    setTimeout(() => {
        hamburgerMenu.classList.remove('fade-out')
        hamburgerMenu.style.display = 'none'
    }, '790')
})

//features section functions
const checkState = () => {
    if (featureBtn1.classList.contains('button-active')) {
        image.setAttribute("src", './images//illustration-features-tab-1.svg')
        featureTextTitle.textContent = 'Bookmark in one click'
        featureTextDescription.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage yopur favourite sites'

    } else if (featureBtn2.classList.contains('button-active')){
        image.setAttribute("src", './images//illustration-features-tab-2.svg')
        featureTextTitle.textContent = 'Intelligent search'
        featureTextDescription.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    } else {
        image.setAttribute("src", './images//illustration-features-tab-3.svg')
        featureTextTitle.textContent = 'Share your bookamrks'
        featureTextDescription.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
}

featureAllBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.button-active').classList.remove('button-active')
        btn.classList.add('button-active')
        checkState()
    })
})


//questions section functions


questions.forEach((question) => {
    const questionIcon = question.querySelector('.question-icon');
    question.addEventListener('click', () => {
       question.classList.toggle("active");
       questionIcon.classList.toggle('rotate');
    });
 });

//Contact section functions

const checkMail = () => {
    if (input.value.match(mailRegex )) {
        input.value = ''
        errorMsg.style.visibility = 'hidden'
        alert('mail has been sent to your inbox! :D')
      } else {
        errorMsg.style.visibility = 'visible'
      }
}


contactBtn.addEventListener('click', checkMail)


