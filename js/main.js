// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Logic
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // 2. Smart Sticky Header Logic
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Only toggle if we've scrolled past the header height
            if (scrollTop > 100) {
                if (scrollTop > lastScrollTop) {
                    // Scrolling Down -> Hide Header
                    header.classList.add('header-hidden');
                } else {
                    // Scrolling Up -> Show Header
                    header.classList.remove('header-hidden');
                }
            } else {
                // At top -> Always Show
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // 3. Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                // Handle links on other pages (e.g. index.html#contact from about.html)
                // If the target isn't on this page, let the browser handle standard navigation
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 4. Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Add loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Note: Formspree handles the actual redirect/submission
                // We just want to give immediate visual feedback
            }
        });
    }
});
