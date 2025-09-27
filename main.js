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


// Intersection observer animations
const teamMembers = document.querySelectorAll("#team-member");
const courses = document.querySelectorAll("#course");
const headerLeft = document.getElementById('header-left');

// Team member animation
function callbackFunction(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
           
            entry.target.classList.add('show');
            
            observer.unobserve(entry.target)
        }
    })
}

const options = {
    threshold: 0.5
}


const observer = new IntersectionObserver(
    callbackFunction,
    options
)

teamMembers.forEach(member => {
    observer.observe(member)
});






function callbackFunction2(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer2.unobserve(entry.target)
        }
        
    })
}

const options2 = {
    threshold: 0.5
}


const observer2 = new IntersectionObserver(
    callbackFunction2,
    options2
)

courses.forEach(course => {
    observer2.observe(course)
});



const observer3 = new IntersectionObserver(
    callbackFunction2,
    options2
)

    observer3.observe(headerLeft)



