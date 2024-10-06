document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



    document.querySelector('.contact-form h3').addEventListener('click', function() {
        const contactForm = document.querySelector('.contact-form');
        contactForm.classList.toggle('active');
    });

