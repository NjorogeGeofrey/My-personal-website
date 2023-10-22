let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);
}

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};



ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay:200
    });

ScrollReveal().reveal('.Home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.Home-img img, .Services-container, .Portfolio-box, .Contact form',
 { origin: 'bottom'});
 ScrollReveal().reveal('.Home-content h1, .About-img img', { origin: 'left'});
 ScrollReveal().reveal('.Home-content h3, .Home-content p, .About-content',
 { origin: 'top'});






























