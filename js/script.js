/* ===== MOBILE NAVIGATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

/* ===== SMOOTH SCROLLING ===== */
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's an anchor link
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

/* ===== ACTIVE NAVIGATION HIGHLIGHTING ===== */
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Call once on load
});

/* ===== NAVBAR SCROLL EFFECT ===== */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
});

/* ===== MODAL FUNCTIONALITY ===== */
function openQuoteModal() {
    const modal = document.getElementById('quote-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('quote-modal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function openProjectModal(projectId) {
    // This would typically show project details
    // For now, we'll just open the quote modal for project inquiries
    openQuoteModal();
    
    // Pre-fill project details based on the selected project
    const projectDetailsTextarea = document.getElementById('project-details');
    const projectDescriptions = {
        1: 'I am interested in a modern residential villa similar to the "Modern Villa in Hassan" project. Please provide details about your residential construction services.',
        2: 'I am interested in commercial construction services similar to the "Commercial Complex" project. Please provide information about your commercial building capabilities.',
        3: 'I need renovation services similar to the "Renovated Office Space" project. Please provide details about your renovation and interior services.',
        4: 'I am interested in apartment complex construction similar to the "Luxury Apartment Complex" project. Please provide details about multi-unit residential construction.'
    };
    
    if (projectDescriptions[projectId]) {
        projectDetailsTextarea.value = projectDescriptions[projectId];
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('quote-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

/* ===== QUOTE FORM HANDLING ===== */
function submitQuoteForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('quote-form');
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    
    // Get form data
    const quoteData = {
        fullName: formData.get('full-name'),
        phone: formData.get('phone'),
        location: formData.get('location'),
        projectType: formData.get('project-type'),
        budget: formData.get('budget'),
        timeline: formData.get('timeline'),
        projectDetails: formData.get('project-details')
    };
    
    // Validate required fields
    const requiredFields = ['fullName', 'phone', 'location', 'projectType', 'budget', 'timeline', 'projectDetails'];
    const missingFields = requiredFields.filter(field => !quoteData[field] || quoteData[field].trim() === '');
    
    if (missingFields.length > 0) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate phone number (Indian mobile number)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(quoteData.phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }
    
    // Show loading state
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Create WhatsApp message
        const whatsappMessage = `Hello Aaravii Construction,%0A%0AI would like to request a quote for my project:%0A%0AName: ${quoteData.fullName}%0APhone: ${quoteData.phone}%0ALocation: ${quoteData.location}%0AProject Type: ${quoteData.projectType}%0ABudget: ${quoteData.budget}%0ATimeline: ${quoteData.timeline}%0A%0AProject Details:%0A${quoteData.projectDetails.replace(/\n/g, '%0A')}%0A%0APlease contact me to discuss further.%0A%0AThank you!`;
        
        const whatsappUrl = `https://wa.me/917676236208?text=${whatsappMessage}`;
        
        // Open WhatsApp with pre-filled message
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        form.reset();
        
        // Close modal
        closeModal();
        
        // Reset button
        submitBtn.textContent = 'Submit Request';
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        // Show success message
        alert('Thank you for your quote request! We have prepared a WhatsApp message with your details. Please send it to complete your request.');
        
    }, 1500);
}

/* ===== PHONE NUMBER FORMATTING ===== */
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 10) {
                    value = value.replace(/(\d{5})(\d{5})/, '$1 $2');
                } else {
                    value = value.substring(0, 10);
                    value = value.replace(/(\d{5})(\d{5})/, '$1 $2');
                }
            }
            
            e.target.value = value;
        });
        
        phoneInput.addEventListener('blur', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length === 10) {
                e.target.value = value.replace(/(\d{5})(\d{5})/, '+91 $1 $2');
            } else if (value.length === 0) {
                e.target.value = '';
            } else {
                alert('Please enter a valid 10-digit mobile number.');
                e.target.focus();
            }
        });
    }
});

/* ===== INTERSECTION OBSERVER FOR ANIMATIONS ===== */
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature, .service-card, .project-card, .advantage');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/* ===== CSS FOR ANIMATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

/* ===== SCROLL TO TOP BUTTON ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

/* ===== LAZY LOADING FOR IMAGES ===== */
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});

/* ===== CONTACT BUTTONS FUNCTIONALITY ===== */
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp button functionality
    const whatsappBtn = document.querySelector('.quick-btn.whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent('Hi, I\'m interested in your construction services. Please provide more information.');
            const whatsappUrl = `https://wa.me/917676236208?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // Phone button functionality
    const phoneBtn = document.querySelector('.quick-btn.phone');
    if (phoneBtn) {
        phoneBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'tel:+917676236208';
        });
    }
});

/* ===== FORM VALIDATION ENHANCEMENT ===== */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quote-form');
    if (form) {
        // Real-time validation
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Validate phone number
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(value.replace(/\D/g, ''))) {
            showFieldError(field, 'Please enter a valid 10-digit mobile number');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
        color: #e74c3c;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    `;
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
    
    // Add error styling to field
    field.style.borderColor = '#e74c3c';
}

// Remove error styling on focus
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('focus', function(e) {
            if (e.target.classList.contains('error')) {
                e.target.classList.remove('error');
                e.target.style.borderColor = '';
                
                const errorMessage = e.target.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        }, true);
    }
});

/* ===== PERFORMANCE OPTIMIZATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Preload critical resources
    const criticalImages = [
        'images/hero-bg.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});

/* ===== ERROR HANDLING ===== */
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an analytics service in production
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an analytics service in production
});

/* ===== UTILITY FUNCTIONS ===== */
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events for better performance
const throttledScrollHandler = throttle(function() {
    // Scroll-based functionality here
}, 16); // ~60fps

/* ===== CONTACT PAGE QUOTE FORM HANDLING ===== */
function submitContactQuoteForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-quote-form');
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    
    // Get form data
    const contactQuoteData = {
        fullName: formData.get('contact-full-name'),
        email: formData.get('contact-email'),
        phone: formData.get('contact-phone'),
        alternatePhone: formData.get('contact-alternate-phone'),
        location: formData.get('contact-location'),
        projectType: formData.get('contact-project-type'),
        budget: formData.get('contact-budget'),
        timeline: formData.get('contact-timeline'),
        area: formData.get('contact-area'),
        projectDetails: formData.get('contact-details'),
        preferredContact: formData.getAll('preferred-contact'),
        bestTime: formData.get('contact-best-time')
    };
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'location', 'projectType', 'budget', 'timeline', 'projectDetails'];
    const missingFields = requiredFields.filter(field => !contactQuoteData[field] || contactQuoteData[field].trim() === '');
    
    if (missingFields.length > 0) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactQuoteData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Validate phone number (Indian mobile number)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(contactQuoteData.phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }
    
    // Validate alternate phone if provided
    if (contactQuoteData.alternatePhone && !phoneRegex.test(contactQuoteData.alternatePhone.replace(/\D/g, ''))) {
        alert('Please enter a valid alternate phone number.');
        return;
    }
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Request...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate form submission
    setTimeout(() => {
        // Create comprehensive WhatsApp message
        const whatsappMessage = `Hello Aaravii Construction,%0A%0AI would like to request a quote for my construction project:%0A%0A=== PERSONAL INFORMATION ===%0AName: ${contactQuoteData.fullName}%0APhone: ${contactQuoteData.phone}%0AEmail: ${contactQuoteData.email}%0A${contactQuoteData.alternatePhone ? `Alternate Phone: ${contactQuoteData.alternatePhone}%0A` : ''}Project Location: ${contactQuoteData.location}%0A%0A=== PROJECT DETAILS ===%0AProject Type: ${contactQuoteData.projectType}%0ABudget Range: ${contactQuoteData.budget}%0ATimeline: ${contactQuoteData.timeline}%0A${contactQuoteData.area ? `Approximate Area: ${contactQuoteData.area}%0A` : ''}%0A=== PROJECT DESCRIPTION ===%0A${contactQuoteData.projectDetails.replace(/\n/g, '%0A')}%0A%0A=== CONTACT PREFERENCES ===%0APreferred Contact Method: ${contactQuoteData.preferredContact.join(', ') || 'Not specified'}%0ABest Time to Contact: ${contactQuoteData.bestTime || 'Any time'}%0A%0APlease contact me to discuss further and provide a detailed quote.%0A%0AThank you!`;
        
        const whatsappUrl = `https://wa.me/917676236208?text=${whatsappMessage}`;
        
        // Open WhatsApp with pre-filled message
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Quote Request';
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        // Show success message
        alert('Thank you for your quote request! We have prepared a WhatsApp message with all your details. Please send it to complete your request. We will contact you within 24 hours.');
        
    }, 1500);
}

/* ===== CONTACT PAGE PHONE NUMBER FORMATTING ===== */
document.addEventListener('DOMContentLoaded', function() {
    const contactPhoneInput = document.getElementById('contact-phone');
    const contactAlternatePhoneInput = document.getElementById('contact-alternate-phone');
    
    [contactPhoneInput, contactAlternatePhoneInput].forEach(input => {
        if (input) {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0) {
                    if (value.length <= 10) {
                        value = value.replace(/(\d{5})(\d{5})/, '$1 $2');
                    } else {
                        value = value.substring(0, 10);
                        value = value.replace(/(\d{5})(\d{5})/, '$1 $2');
                    }
                }
                
                e.target.value = value;
            });
            
            input.addEventListener('blur', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length === 10) {
                    e.target.value = value.replace(/(\d{5})(\d{5})/, '+91 $1 $2');
                } else if (value.length === 0) {
                    e.target.value = '';
                } else if (value.length > 0) {
                    alert('Please enter a valid 10-digit mobile number.');
                    e.target.focus();
                }
            });
        }
    });
});

/* ===== CONTACT PAGE FORM VALIDATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-quote-form');
    if (contactForm) {
        // Real-time validation for contact form
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateContactField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateContactField(this);
                }
            });
        });
    }
});

function validateContactField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        showContactFieldError(field, 'This field is required');
        return false;
    }
    
    // Validate email
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showContactFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Validate phone number
    if ((fieldName === 'contact-phone' || fieldName === 'contact-alternate-phone') && value) {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(value.replace(/\D/g, ''))) {
            showContactFieldError(field, 'Please enter a valid 10-digit mobile number');
            return false;
        }
    }
    
    return true;
}

function showContactFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
        color: #e74c3c;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    `;
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
    
    // Add error styling to field
    field.style.borderColor = '#e74c3c';
}

// Remove error styling on focus for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-quote-form');
    if (contactForm) {
        contactForm.addEventListener('focus', function(e) {
            if (e.target.classList.contains('error')) {
                e.target.classList.remove('error');
                e.target.style.borderColor = '';
                
                const errorMessage = e.target.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        }, true);
    }
});

/* ===== CONTACT PAGE CONTACT CARD FUNCTIONALITY ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Add click-to-call functionality for contact cards
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me'))) {
                // Allow default behavior for actual contact links
                return true;
            } else {
                e.preventDefault();
                const phone = this.textContent.trim();
                if (phone) {
                    window.location.href = `tel:${phone}`;
                }
            }
        });
    });
});

/* ===== MAP DIRECTIONS FUNCTIONALITY ===== */
document.addEventListener('DOMContentLoaded', function() {
    const directionsBtn = document.querySelector('.directions-btn');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const address = 'Ground Floor, Khata No.541, Salagame Road, Near MCF Space Quarters, Haralahalli Village, Vidyanagar Post, Hassan, Karnataka - 573202';
            const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
            window.open(googleMapsUrl, '_blank');
        });
    }
});

/* ===== CONTACT PAGE QUICK CONTACT BUTTONS ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Quick contact buttons functionality
    const quickContactBtns = document.querySelectorAll('.quick-contact-btn');
    quickContactBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                window.open(href, '_blank');
            }
        });
    });
});
window.addEventListener('scroll', throttledScrollHandler);