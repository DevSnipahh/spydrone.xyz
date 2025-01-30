// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

// Section Navigation (No Page Reloads)
function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}
