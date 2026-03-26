function initThemeToggle() {    
    const html = document.documentElement;
    function applyTheme(theme) {
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }

    // Toggle on button click (make the listener only dependent on the document, not the button itself)
    document.addEventListener("click", (e) => {
        const themeToggle = e.target.closest("#theme-toggle");
        if (!themeToggle) return;

        const currentTheme = html.dataset.theme;
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);
    });
}

// Initialize
initThemeToggle();