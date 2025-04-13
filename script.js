// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Toggle visibility of collapsible sections
function toggleSection(id) {
    const section = document.getElementById(id).querySelector('.content');
    const isOpen = section.style.display === "block";
    section.style.display = isOpen ? "none" : "block";
}

// Page Load Animations
window.onload = function() {
    document.body.classList.add('loaded');
};
