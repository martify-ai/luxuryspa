// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready!');

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    if (testimonials.length > 0 && dots.length > 0) {
        // Show the testimonial at the current index
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        // Next testimonial
        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }

        // Previous testimonial
        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        }

        // Event listeners for dots
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentIndex = i;
                showTestimonial(currentIndex);
            });
        });

        // Event listeners for prev/next buttons
        if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
        if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);

        // Auto-advance testimonials every 5 seconds
        setInterval(nextTestimonial, 5000);
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Form validation
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Phone validation
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
                alert('Please enter a valid phone number');
                return;
            }

            // In a real application, you would send this data to a server
            // For demonstration purposes, we'll just show a success message
            alert('Thank you! Your message has been sent. We will contact you soon.');

            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Book now button action
    const bookButton = document.querySelector('.cta-button');
    if (bookButton) {
        bookButton.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                document.getElementById('name').focus();
            }
        });
    }
});

// Reveal animations on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.service-card, .gallery-item, .about-content, .testimonial-content');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);