document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    
    if (!toggleButton) {
        console.error('Theme toggle button not found.');
        return;
    }

    // Check for the user's preference in local storage
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
        document.documentElement.classList.add('dark');
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});
