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

    // Show/hide sections on navigation click
    const sections = document.querySelectorAll('.content section');

    document.querySelectorAll('.left-nav a').forEach(function (navLink, index) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Toggle visibility of sections
            sections.forEach(function (section, i) {
                section.style.display = i === index ? 'block' : 'none';
            });

            // Scroll to the target section
            const targetId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
});
