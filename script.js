document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check dark mode preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Update dark mode preference in local storage
        const isDarkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkModeEnabled ? 'enabled' : 'disabled');
    });

    // Additional Interactive Elements
    document.querySelectorAll('.left-nav a').forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Add animation to the clicked navigation item
            navLink.classList.add('nav-item-clicked');

            // Display toast message
            const toast = document.getElementById('toast');
            toast.textContent = `${navLink.textContent} section opened!`;
            toast.style.display = 'block';

            // Remove animation class after animation completes
            setTimeout(() => {
                navLink.classList.remove('nav-item-clicked');
            }, 500);

            // Hide toast message after a brief period
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);

            // Scroll to the target section
            const targetId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
});
