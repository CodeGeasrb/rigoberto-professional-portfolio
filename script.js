// Language switching functionality
const langButtons = document.querySelectorAll('.lang-btn');
const currentLang = 'es'; // Default language

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        
        // Update active button
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update all elements with language attributes
        const elementsWithLang = document.querySelectorAll('[data-es][data-en]');
        elementsWithLang.forEach(element => {
            element.textContent = element.getAttribute(`data-${targetLang}`);
        });
    });
});

// Chat widget functionality
const chatToggle = document.getElementById('chatToggle');
const chatWidget = document.getElementById('chatWidget');
const closeChat = document.getElementById('closeChat');

chatToggle.addEventListener('click', () => {
    if (chatWidget.style.display === 'none' || !chatWidget.style.display) {
        chatWidget.style.display = 'block';
        chatToggle.style.display = 'none';
    }
});

closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none';
    chatToggle.style.display = 'flex';
});

// Close chat when clicking outside
document.addEventListener('click', (e) => {
    if (!chatWidget.contains(e.target) && !chatToggle.contains(e.target)) {
        if (chatWidget.style.display === 'block') {
            chatWidget.style.display = 'none';
            chatToggle.style.display = 'flex';
        }
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
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

// Observe cards and timeline items
document.querySelectorAll('.card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});













