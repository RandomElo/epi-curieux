const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", function(){
    navLinks.classList.toggle('mobile-menu')
})

const allBoxes = document.querySelectorAll('.menu-hamburger');

allBoxes.forEach(box => {

    box.addEventListener('click', e => {
        e.target.classList.toggle('active');
    }) 

})
