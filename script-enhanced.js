document.addEventListener('DOMContentLoaded', () => {
    // Enhanced JavaScript for Professional Portfolio

    // Function to set active link based on scroll position
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Get nav links after DOM is loaded
    const navLinks = document.querySelectorAll('nav a');

    // Event listeners for scroll and click
    window.addEventListener('scroll', setActiveLink);
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(setActiveLink, 100); // Delay to allow scroll to complete
        });
    });

    // Call the function on page load
    setActiveLink();
});

// Enhanced typing animation with more dynamic effects
const typingText = document.querySelector('.typing-text span');
const words = ['Software Developer', 'Pharmacy Student', 'Social Media Manager', 'Blogger'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Enhanced smooth scroll with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced header scroll effect with multiple states
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Parallax effect for hero section
    const parallax = document.querySelector('.home');
    if (parallax) {
        const speed = scrolled * 0.3;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Enhanced Intersection Observer with staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all sections with staggered animation, except education
document.querySelectorAll('.section:not(#education)').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// Ensure education section is always visible
const educationSection = document.querySelector('#education');
if (educationSection) {
    educationSection.style.opacity = '1';
    educationSection.style.transform = 'translateY(0)';
}

// Ensure education cards are always visible
document.querySelectorAll('.education-card').forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
});

// Enhanced About Me Section Animations
const aboutMeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Animate skill cards with staggered delay
            const skillCards = document.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                }, index * 150);
            });
            
            // Animate profile illustration
            const illustration = document.querySelector('.illustration-placeholder');
            if (illustration) {
                setTimeout(() => {
                    illustration.style.transform = 'scale(1.05)';
                    illustration.style.boxShadow = '0 0 30px rgba(147, 112, 219, 0.4)';
                }, 800);
            }
        }
    });
}, { threshold: 0.3 });

// Observe About Me section
const aboutMeSection = document.querySelector('#about-me');
if (aboutMeSection) {
    aboutMeObserver.observe(aboutMeSection);
}

// Initialize skill cards with hidden state
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
});

// Enhanced hover effects for skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
        this.style.boxShadow = '0 25px 50px rgba(147, 112, 219, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 20px 40px rgba(147, 112, 219, 0.2)';
    });
});

// Enhanced floating elements animation
function animateFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 2}s`;
        element.style.animation = `float ${6 + index}s ease-in-out infinite`;
    });
}

// Enhanced scroll animations for About Me section
function createAboutMeScrollAnimations() {
    const aboutContent = document.querySelector('.about-content');
    const skillsShowcase = document.querySelector('.skills-showcase');
    
    if (aboutContent && skillsShowcase) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateX(-30px)';
        aboutContent.style.transition = 'all 0.8s ease';
        
        skillsShowcase.style.opacity = '0';
        skillsShowcase.style.transform = 'translateX(30px)';
        skillsShowcase.style.transition = 'all 0.8s ease 0.3s';
        
        const aboutScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutContent.style.opacity = '1';
                    aboutContent.style.transform = 'translateX(0)';
                    
                    setTimeout(() => {
                        skillsShowcase.style.opacity = '1';
                        skillsShowcase.style.transform = 'translateX(0)';
                    }, 300);
                }
            });
        }, { threshold: 0.2 });
        
        aboutScrollObserver.observe(aboutMeSection);
    }
}

// Enhanced CTA button animations
function enhanceCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        btn.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        btn.style.opacity = '1';
                        btn.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.5 });
        
        ctaObserver.observe(btn);
    });
}

// Enhanced typing animation for tagline
function enhanceTaglineAnimation() {
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.style.opacity = '0';
        tagline.style.transform = 'translateY(20px)';
        tagline.style.transition = 'all 0.8s ease 0.5s';
        
        const taglineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        tagline.style.opacity = '1';
                        tagline.style.transform = 'translateY(0)';
                    }, 500);
                }
            });
        }, { threshold: 0.3 });
        
        taglineObserver.observe(tagline);
    }
}

// Enhanced gradient animation for section title
function enhanceSectionTitleAnimation() {
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.style.backgroundSize = '200% 200%';
        sectionTitle.style.animation = 'gradientShift 3s ease-in-out infinite';
        
        // Add gradient animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced mobile menu for About Me section
function enhanceMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const nav = document.querySelector('nav');
            nav.classList.toggle('mobile-open');
        });
    }
}

// Initialize all enhanced animations
function initEnhancedAnimations() {
    animateFloatingElements();
    createAboutMeScrollAnimations();
    enhanceCTAButtons();
    enhanceTaglineAnimation();
    enhanceSectionTitleAnimation();
    enhanceMobileMenu();
}

// Enhanced timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// Enhanced card hover effects
document.querySelectorAll('.skill-card, .project-card, .education-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Enhanced button interactions with ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add ripple effect on click
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Enhanced form validation with real-time feedback
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField.call(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Simulate form submission
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }
    });
}

function validateField() {
    const value = this.value.trim();
    const isEmail = this.type === 'email';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!value) {
        showError(this, 'This field is required');
        return false;
    }
    
    if (isEmail && !emailRegex.test(value)) {
        showError(this, 'Please enter a valid email address');
        return false;
    }
    
    return true;
}

function showError(input, message) {
    const errorElement = input.parentNode.querySelector('.error-message') || 
                        document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '1.4rem';
    errorElement.style.marginTop = '0.5rem';
    
    if (!input.parentNode.querySelector('.error-message')) {
        input.parentNode.appendChild(errorElement);
    }
    
    input.style.borderColor = '#ef4444';
}

function clearError() {
    const errorElement = this.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    this.style.borderColor = '';
}

// Enhanced scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #a855f7, #7c3aed);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Enhanced loading animation
function createLoadingAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .floating {
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
        }
        50% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
        }
    }
    
    .glow {
        animation: glow 2s ease-in-out infinite;
    }
`;

document.head.appendChild(style);

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    createScrollProgress();
    createLoadingAnimation();
    
    // Add floating animation to social icons
    document.querySelectorAll('.social-icons a').forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('floating');
            icon.style.animationDelay = `${index * 0.2}s`;
        }, 1000);
    });
    
    // Add glow effect to buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.classList.add('glow');
    });
    
    // Add intersection observer for skill bars
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.3 });
    
    // Observe all skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        skillObserver.observe(card);
    });

    // Enhanced Circular Icon Showcase Functionality
    enhanceCircularIcons();
});

// Enhanced mobile menu toggle
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 2.4rem;
        cursor: pointer;
    `;
    
    nav.appendChild(menuToggle);
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
    });
    
    // Responsive check
    function checkMobile() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
            nav.classList.remove('mobile-open');
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
}

// Initialize mobile menu
createMobileMenu();

// Enhanced performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-dependent animations
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        // Ensure focus is visible
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Enhanced lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Add performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        });
    }
}

measurePerformance();

// Enhanced Circular Icon Showcase Functionality
function enhanceCircularIcons() {
    const iconItems = document.querySelectorAll('.icon-item');
    const illustration = document.querySelector('.illustration-placeholder');
    
    if (!iconItems.length || !illustration) return;
    
    // Add enhanced hover effects with JavaScript
    iconItems.forEach((icon, index) => {
        // Enhanced hover effects
        icon.addEventListener('mouseenter', function(e) {
            // Scale up and add glow effect
            this.style.transform = 'scale(1.3) translateY(-8px)';
            this.style.boxShadow = '0 12px 30px rgba(147, 112, 219, 0.6)';
            this.style.zIndex = '10';
            
            // Add pulse animation
            this.style.animation = 'pulse 0.6s ease-in-out';
            
            // Highlight corresponding tooltip
            const tooltip = this.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
                tooltip.style.transform = 'translateY(-5px)';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            // Return to normal state
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(147, 112, 219, 0.4)';
            this.style.zIndex = '3';
            this.style.animation = '';
            
            // Hide tooltip
            const tooltip = this.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
                tooltip.style.transform = 'translateY(0)';
            }
        });
        
        // Click functionality - show detailed information
        icon.addEventListener('click', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            showIconDetails(tooltipText, this.querySelector('i').className);
        });
    });
    
    // Add rotation animation to the main circle on hover
    illustration.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    illustration.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1.05) rotate(0deg)';
    });
    
    // Add CSS for pulse animation
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% { transform: scale(1.3) translateY(-8px); }
            50% { transform: scale(1.4) translateY(-10px); }
            100% { transform: scale(1.3) translateY(-8px); }
        }
        
        .icon-item:hover {
            animation: pulse 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(pulseStyle);
    
    // Add intersection observer for staggered icon animation
    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });
    
    // Initialize icons with hidden state
    iconItems.forEach(icon => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.5)';
        iconObserver.observe(icon);
    });
}

// Function to show detailed information about clicked icon
function showIconDetails(title, iconClass) {
    // Create or show modal with detailed information
    let modal = document.getElementById('icon-details-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'icon-details-modal';
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.95);
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid var(--primary);
            z-index: 10000;
            max-width: 400px;
            width: 90%;
            backdrop-filter: blur(10px);
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        `;
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
    }
    
    // Set modal content based on icon
    const content = getIconDetailsContent(title);
    modal.innerHTML = `
        <button style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">×</button>
        <div style="text-align: center;">
            <i class="${iconClass}" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--primary); margin-bottom: 1rem;">${title}</h3>
            <p style="color: var(--text-secondary); line-height: 1.6;">${content}</p>
        </div>
    `;
    
    modal.querySelector('button').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.style.display = 'block';
}

// Function to get detailed content for each icon
function getIconDetailsContent(title) {
    const contentMap = {
        'C++ Programming': 'Expertise in object-oriented programming, data structures, and algorithms using C++. Experience in developing high-performance applications and system-level programming.',
        'Database Management': 'Proficient in SQL database design, optimization, and management. Experience with MySQL, PostgreSQL, and database normalization techniques.',
        'Telegram Automation': 'Skilled in creating Telegram bots and automation tools using various APIs. Experience in building interactive chat interfaces and automated messaging systems.',
        'Artificial Intelligence': 'Knowledge of machine learning algorithms, neural networks, and AI concepts. Experience with Python libraries like TensorFlow and scikit-learn.',
        'Cybersecurity': 'Understanding of security principles, encryption techniques, and network security. Experience in implementing security best practices.',
        'HTML & CSS': 'Expert in responsive web design, CSS animations, and modern frontend development. Proficient in creating visually appealing and user-friendly interfaces.',
        'Pharmaceutical Science': 'Background in pharmaceutical studies with understanding of drug interactions, pharmacology, and healthcare systems.',
        'Python Development': 'Proficient in Python programming for web development, data analysis, and automation. Experience with Django, Flask, and data science libraries.'
    };
    
    return contentMap[title] || `Detailed information about ${title}. This area represents one of my key skills and expertise areas.`;
}

// Add touch support for mobile devices
function addTouchSupport() {
    const iconItems = document.querySelectorAll('.icon-item');
    
    iconItems.forEach(icon => {
        let touchTimeout;
        
        icon.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1.2) translateY(-5px)';
            
            // Show tooltip on touch
            const tooltip = this.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            }
            
            // Set timeout for long press
            touchTimeout = setTimeout(() => {
                const tooltipText = this.getAttribute('data-tooltip');
                const iconClass = this.querySelector('i').className;
                showIconDetails(tooltipText, iconClass);
            }, 500);
        });
        
        icon.addEventListener('touchend', function() {
            clearTimeout(touchTimeout);
            this.style.transform = 'scale(1) translateY(0)';
            
            // Hide tooltip
            const tooltip = this.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            }
        });
        
        icon.addEventListener('touchmove', function() {
            clearTimeout(touchTimeout);
        });
    });
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', () => {
    addTouchSupport();
});
