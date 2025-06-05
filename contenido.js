document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (if any were added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic countdown for the event (example, actual date needs to be set)
    const countdownButton = document.getElementById('countdownButton');
    const eventDate = new Date('2025-07-20T19:00:00'); // Example: July 20, 2025, 7 PM local time

    function updateCountdown() {
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            countdownButton.textContent = '¡Live EN VIVO Ahora!';
            countdownButton.style.background = 'linear-gradient(90deg, #28a745, #218838)'; // Green for live
            countdownButton.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
            countdownButton.onclick = () => {
                window.open('https://www.instagram.com/direct/inbox/', '_blank'); // Example: Direct to Instagram inbox or live stream link
                window.open('https://www.youtube.com/live', '_blank'); // Example: Direct to YouTube live stream link
            };
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownButton.textContent = `Live en: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately

    // Expert card "Conoce más" button functionality
    document.querySelectorAll('.expert-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Esta función es para ver la biografía completa del experto. (Funcionalidad de backend no implementada)');
            // In a real scenario, this would load more expert details dynamically or link to a dedicated page.
        });
    });

    // QA button functionality
    const qaButton = document.querySelector('.qa-button');
    qaButton.addEventListener('click', () => {
        alert('¡Envía tus preguntas en el chat de Instagram o YouTube durante el Live! (Funcionalidad de backend no implementada)');
        // In a real scenario, this might open a small form or link to a live chat interface.
    });

    // Dynamic hover effects for cards (already handled by CSS, but JS could add more complex animations)
    document.querySelectorAll('.info-card, .expert-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = card.classList.contains('info-card') ? 'translateY(-8px)' : 'scale(1.03)';
            card.style.boxShadow = 'var(--hover-shadow)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow)';
        });
    });
});
