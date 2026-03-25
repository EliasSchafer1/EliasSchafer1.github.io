// Menu toggle functionality
function initMenu() {
  const menuButton = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  if (menuButton && sidebar && overlay) {
    // Open sidebar on menu button click
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    });
    // Close sidebar when clicking outside
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }
}

// Set page title in header
function initPageTitle() {
  const pageTitle = document.querySelector(".header-middle-section");
  if (pageTitle) {
    pageTitle.textContent = document.title;
  }
}

// Initialize immediately and after partials load
initMenu();
initPageTitle();
document.addEventListener('partialsLoaded', () => { initMenu(); initPageTitle(); });
document.addEventListener('DOMContentLoaded', () => { initMenu(); initPageTitle(); });