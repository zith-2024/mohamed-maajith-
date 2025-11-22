// ======================
// Theme Toggle
// ======================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ======================
// Mobile Menu Toggle
// ======================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ======================
// Header Scroll Effect
// ======================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ======================
// Back to Top Button
// ======================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ======================
// Skills Filter (skill.html)
// ======================
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCategories = document.querySelectorAll('.skill-category');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Show/hide skill categories
            skillCategories.forEach(category => {
                if (filter === 'all' || category.getAttribute('data-category') === filter) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    category.style.opacity = '0';
                    category.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        category.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ======================
// Portfolio Modal (portfolio.html)
// ======================
const projectsData = {
    1: {
        title: 'Two Stroke Garage - Vintage Bike Spare Parts',
        role: 'Team Lead & Full Stack Developer',
        image: 'https://images.unsplash.com/photo-1654085888334-bc4b03bcbf10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbW90b3JjeWNsZSUyMGdhcmFnZXxlbnwxfHx8fDE3NjM1MzQ0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        details: 'Led a 4-member team to develop front-end and back-end structure. Designed a comprehensive product catalog and integrated shopping cart features. Managed complete project documentation and delivered a successful faculty presentation.',
        achievements: [
            'Successfully led a team of 4 developers',
            'Implemented full product catalog system',
            'Integrated shopping cart functionality',
            'Delivered comprehensive documentation'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Product Catalog', 'Shopping Cart']
    },
    2: {
        title: 'Online Clothing Page - E-commerce Platform',
        role: 'Full Stack Developer',
        image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjM0NzA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        details: 'Built a responsive shopping website featuring product listing, user interaction, and cart features. Prepared full documentation and delivered a faculty presentation showcasing the project\'s capabilities.',
        achievements: [
            'Responsive design for all devices',
            'Interactive product listings',
            'Complete cart functionality',
            'User-friendly interface'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'User Interaction']
    },
    3: {
        title: 'Portfolio Website',
        role: 'Designer & Developer',
        image: 'https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MzQ4OTcwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        details: 'Created a professional portfolio website with modern design principles, smooth animations, and responsive layout. Features include dark mode, project showcase, and contact form.',
        achievements: [
            'Modern glassmorphism design',
            'Smooth animations',
            'Dark/Light theme toggle',
            'Fully responsive layout'
        ],
        tech: ['HTML', 'CSS', 'JavaScript']
    },
    4: {
        title: 'Web Development Projects',
        role: 'Developer',
        image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM1MTQxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        details: 'Collection of academic and personal projects showcasing proficiency in web development, Python programming, and database systems. Projects focused on solving real-world problems.',
        achievements: [
            'Multiple successful project deliveries',
            'Strong foundation in web technologies',
            'Problem-solving approach',
            'Clean, maintainable code'
        ],
        tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Database Systems']
    }
};

const portfolioCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

if (portfolioCards.length > 0) {
    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                // Populate modal with project data
                document.getElementById('modalTitle').textContent = project.title;
                document.getElementById('modalRole').textContent = project.role;
                document.getElementById('modalImage').src = project.image;
                document.getElementById('modalImage').alt = project.title;
                document.getElementById('modalDetails').textContent = project.details;
                
                // Populate achievements
                const achievementsList = document.getElementById('modalAchievements');
                achievementsList.innerHTML = '';
                project.achievements.forEach(achievement => {
                    const li = document.createElement('li');
                    li.textContent = achievement;
                    achievementsList.appendChild(li);
                });
                
                // Populate tech tags
                const techContainer = document.getElementById('modalTech');
                techContainer.innerHTML = '';
                project.tech.forEach(tech => {
                    const span = document.createElement('span');
                    span.textContent = tech;
                    techContainer.appendChild(span);
                });
                
                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Close modal functionality
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// ======================
// Contact Form (contactme.html)
// ======================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const response = await fetch(
                "https://docs.google.com/spreadsheets/d/1PZgAmhVkE6xFx2kj43gmn9EMr3I2ghQgw9Hk-p1G9Ss/edit?gid=0#gid=0",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message })
                }
            );

            if (response.ok) {
                showFormMessage("Message sent successfully!", "success");
                contactForm.reset();
            } else {
                showFormMessage("Something went wrong. Try again.", "error");
            }
        } catch (error) {
            showFormMessage("Error connecting to server.", "error");
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    setTimeout(() => {
        formMessage.className = "form-message";
    }, 5000);
}

// ======================
// Intersection Observer for Animations
// ======================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// ======================
// Smooth Scroll for Anchor Links
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ======================
// Skill Progress Bar Animation
// ======================
const skillBars = document.querySelectorAll('.skill-progress');

if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.getPropertyValue('--progress');
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.width = '0';
        skillObserver.observe(bar);
    });
}

// ======================
// Highlight Cards Hover Effect
// ======================
const highlightCards = document.querySelectorAll('.highlight-card');

highlightCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ======================
// Tech Stack Item Hover Animation
// ======================
const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomRotate = Math.random() * 10 - 5;
        item.style.transform = `translateY(-8px) rotate(${randomRotate}deg)`;
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ======================
// Page Load Animation
// ======================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ======================
// Console Easter Egg
// ======================
console.log('%c👋 Hello there!', 'font-size: 24px; color: #8B5CF6; font-weight: bold;');
console.log('%cLooking for a developer? Let\'s connect!', 'font-size: 14px; color: #06B6D4;');
console.log('%cEmail: mohamedmaazth@gmail.com', 'font-size: 12px; color: #6B7280;');
