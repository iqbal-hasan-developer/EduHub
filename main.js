// nav style

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // change icon
        const icon = faq.querySelector('.faq-icon i');
         if (icon.className === 'bx bx-plus') { 
            icon.className = "bx bx-minus";
         } else {
            icon.className = "bx bx-plus";
         }
    })
        
})


// show/hide nav menu
const nav = document.querySelector('nav');
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');

openMenuBtn.addEventListener('click', () => {
    nav.classList.add('nav-open');
});

closeMenuBtn.addEventListener('click', () => {
    nav.classList.remove('nav-open');
});