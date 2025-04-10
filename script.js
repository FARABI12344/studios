// Function to load the header and footer dynamically
function loadContent() {
    // Fetch and load the header
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data);

    // Fetch and load the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);
}

// Call the loadContent function when the page loads
window.onload = loadContent;
