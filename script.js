const navHamburger = document.getElementById('navHamburger');
const navMenu = document.getElementById('navMenu');

navHamburger.addEventListener('click', () => {
    navHamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navHamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navHamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navHamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const featureItems = document.querySelectorAll('.feature-item');
const featureVisual = document.querySelector('.feature-visual');

featureItems.forEach(item => {
    item.addEventListener('click', () => {
        featureItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        featureVisual.style.opacity = '0.7';
        setTimeout(() => {
            featureVisual.style.opacity = '1';
        }, 150);
    });
});

function handleFormSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert(`Thanks for signing up with ${email}! 🎉`);
    emailInput.value = '';
}

document.getElementById('heroForm').addEventListener('submit', handleFormSubmit);
document.getElementById('ctaForm').addEventListener('submit', handleFormSubmit);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});