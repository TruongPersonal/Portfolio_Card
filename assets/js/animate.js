// Add event listeners for touch and click events
document.addEventListener('DOMContentLoaded', () => {
    // Handle button CV interactions
    const btnCv = document.querySelector('.btn-cv');
    ['touchstart', 'mousedown'].forEach(evt => {
        btnCv.addEventListener(evt, () => {
            btnCv.classList.add('active');
        });
    });
    ['touchend', 'mouseup', 'mouseleave'].forEach(evt => {
        btnCv.addEventListener(evt, () => {
            btnCv.classList.remove('active');
        });
    });

    // Handle message button interactions
    const btnMessage = document.querySelector('.btn-message');
    ['touchstart', 'mousedown'].forEach(evt => {
        btnMessage.addEventListener(evt, () => {
            btnMessage.classList.add('active');
        });
    });
    ['touchend', 'mouseup', 'mouseleave'].forEach(evt => {
        btnMessage.addEventListener(evt, () => {
            btnMessage.classList.remove('active');
        });
    });

    // Handle social icons in buttons
    const brandIcons = document.querySelectorAll('.buttons .fa-brands');
    brandIcons.forEach(icon => {
        ['touchstart', 'mousedown'].forEach(evt => {
            icon.addEventListener(evt, () => {
                icon.classList.add('active');
            });
        });
        ['touchend', 'mouseup', 'mouseleave'].forEach(evt => {
            icon.addEventListener(evt, () => {
                icon.classList.remove('active');
            });
        });
    });

    // Handle contact button and outside click interactions
    const contact = document.querySelector('.contact');
    const iconsContainer = document.querySelector('.icons');
    let isContactFocused = false;

    function resetContactState() {
        isContactFocused = false;
        contact.classList.remove('focused');
    }

    // Handle clicks outside of contact and icons area
    document.addEventListener('click', (e) => {
        if (isContactFocused) {
            // Check if click is outside both contact button and icons container
            const isClickOutsideContact = !contact.contains(e.target);
            const isClickOutsideIcons = !iconsContainer.contains(e.target);
            
            if (isClickOutsideContact && isClickOutsideIcons) {
                resetContactState();
            }
        }
    });

    ['click', 'touchend'].forEach(evt => {
        contact.addEventListener(evt, (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent document click from immediately closing
            isContactFocused = !isContactFocused;
            if(isContactFocused) {
                contact.classList.add('focused');
            } else {
                contact.classList.remove('focused');
            }
        });
    });

    ['touchstart', 'mousedown'].forEach(evt => {
        contact.addEventListener(evt, () => {
            contact.classList.add('active');
        });
    });
    ['touchend', 'mouseup', 'mouseleave'].forEach(evt => {
        contact.addEventListener(evt, () => {
            contact.classList.remove('active');
        });
    });

    // Handle icon interactions
    const icons = document.querySelectorAll('.icon');
    
    function handleIconAnimation(icon, link) {
        if (icon.classList.contains('rotating')) return; // Prevent multiple clicks
        
        icon.classList.add('rotating');
        icon.classList.add('active');
        
        // Start rotation animation
        icon.style.transform = 'rotateX(-40deg) rotateY(405deg)';
        
        // After animation completes, open link and reset
        setTimeout(() => {
            window.open(link, '_blank');
            icon.style.transform = 'rotateX(-40deg) rotateY(45deg)';
            
            // Remove classes after animation is complete
            setTimeout(() => {
                icon.classList.remove('rotating');
                icon.classList.remove('active');
            }, 300);
        }, 1000);
    }
    
    icons.forEach(icon => {
        // Handle click/touch for rotation animation
        ['click', 'touchend'].forEach(evt => {
            icon.addEventListener(evt, (e) => {
                e.preventDefault();
                const link = icon.getAttribute('href');
                if (link) {
                    handleIconAnimation(icon, link);
                }
            });
        });
        
        // Handle hover effects separately
        ['touchstart', 'mousedown'].forEach(evt => {
            icon.addEventListener(evt, (e) => {
                if(evt === 'mousedown') {
                    e.preventDefault();
                }
                if (!icon.classList.contains('rotating')) {
                    icon.classList.add('active');
                }
            });
        });
        
        ['touchend', 'mouseup', 'mouseleave'].forEach(evt => {
            icon.addEventListener(evt, () => {
                if (!icon.classList.contains('rotating')) {
                    icon.classList.remove('active');
                }
            });
        });
    });
});