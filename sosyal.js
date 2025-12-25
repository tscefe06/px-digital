const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    // Takipçiyi görünür yap
    follower.style.display = 'block';
    
    // Fare koordinatlarını al ve takipçiye uygula
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

// Fare bir linkin veya butonun üzerine gelince takipçiyi büyütelim
const hoverElements = document.querySelectorAll('a, button, .skill-card');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(2.5)';
        follower.style.background = 'rgba(110, 142, 251, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.background = 'rgba(110, 142, 251, 0.3)';
    });
});