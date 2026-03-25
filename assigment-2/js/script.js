document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Theme Toggle with LocalStorage
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Day☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? 'Day☀️' : 'Night🌙';
    });

    // 2. Dynamic Content (Show/Hide)
    document.querySelectorAll('.view-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const details = btn.previousElementSibling;
            const isHidden = details.style.display === "none";
            details.style.display = isHidden ? "block" : "none";
            btn.textContent = isHidden ? "Show Less" : "View Details";
        });
    });

    // 3. Scroll Animation (Intersection Observer)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});