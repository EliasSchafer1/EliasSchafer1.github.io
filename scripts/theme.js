// ---- Dark Theme ----
const html = document.documentElement;

function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    function applyTheme(theme) {
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);
        themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) applyTheme(savedTheme);

    // Toggle on button click
    themeToggle.addEventListener("click", () => {
        const currentTheme = html.dataset.theme;
        const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Use saved theme if available, otherwise use system preference (default to light)
        const effectiveTheme = currentTheme ?? (systemIsDark ? "dark" : "light");
        const newTheme = effectiveTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    });
}

// Initialize immediately and after partials load
initTheme();
document.addEventListener('partialsLoaded', initTheme);
document.addEventListener('DOMContentLoaded', initTheme);