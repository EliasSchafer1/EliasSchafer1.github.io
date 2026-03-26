// Menu toggle functionality
function initMenu() {
  // Any clicks on the page are handled here
  document.addEventListener("click", (e) =>{
    const menuButton = e.target.closest(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    // Open sidebar on menu button click
    if (menuButton && sidebar && overlay) {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    }
    // Close sidebar when clicking outside
    if(e.target.classList.contains("overlay")){
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    };
  })
}

// Set page title in header
function initPageTitle() {
  const pageTitle = document.querySelector(".header-middle-section");
  if (pageTitle) {
    pageTitle.textContent = document.title;
  }
}

// Initialize
document.addEventListener('partialsLoaded', () => { initPageTitle(); });
document.addEventListener('DOMContentLoaded', () => { initMenu(); });