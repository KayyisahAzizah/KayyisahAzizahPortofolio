function createScrollAnimations() {
    // Configure the intersection observer
    const options = {
        root: null, // use viewport as root
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of element is visible
    };

    // Animation options for different elements
    const animationMap = {
        '.home-detail': { enter: 'slide-in-left', exit: 'fade-out' },
        '.home-img': { enter: 'slide-in-right', exit: 'fade-out' },
        '.about-content': { enter: 'fade-in-up', exit: 'fade-out' },
        '.skill-item': { enter: 'scale-in', exit: 'fade-out' },
        '.card': { enter: 'fade-in-up', exit: 'fade-out' },
        '.Contact-form': { enter: 'slide-in-up', exit: 'fade-out' },
        '.experience-item': { enter: 'scale-in', exit: 'fade-out' }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Find matching animation for the element
            let animation;
            for (const [selector, anim] of Object.entries(animationMap)) {
                if (entry.target.matches(selector)) {
                    animation = anim;
                    break;
                }
            }

            if (!animation) return;

            if (entry.isIntersecting) {
                // Element is entering viewport
                entry.target.classList.remove(animation.exit);
                entry.target.classList.add(animation.enter);
            } else {
                // Element is leaving viewport
                entry.target.classList.remove(animation.enter);
                entry.target.classList.add(animation.exit);
            }
        });
    }, options);

    // Observe all elements that need animations
    Object.keys(animationMap).forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', createScrollAnimations);

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const textToType = "International Trade Student";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = isDeleting 
            ? textToType.substring(0, index - 1) 
            : textToType.substring(0, index + 1);
        
        textElement.textContent = currentText;

        if (!isDeleting && index === textToType.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && index === 0) {
            isDeleting = false;
        }

        index += isDeleting ? -1 : 1;

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, speed);
    }

    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');

        const starCount = 500;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random size
            const size = Math.random() * 3;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            
            starsContainer.appendChild(star);
        }
    }

    typeWriter();
    createStars();
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 50
    });
    
    const animateElements = () => {
        const elements = document.querySelectorAll('.skill-item, .card, .input-container');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
            } else {
                element.style.opacity = '0';
            }
        });
    }

    // Initial check
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
});

function toggleMenu () {
    document.querySelector(".navbar-nav").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbarNav = document.querySelector(".navbar-nav");

    hamburger.addEventListener("click", function () {
        navbarNav.classList.toggle("active");
    })
})