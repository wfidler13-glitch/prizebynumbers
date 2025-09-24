// Function to open the mobile menu
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

// Function to close the mobile menu
function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}

// Event Listeners for Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    // Open menu when the hamburger icon is clicked
    document.querySelector('.menu-toggle').addEventListener('click', openNav);
    
    // Close menu when the X is clicked
    document.querySelector('#mobile-menu .close-btn').addEventListener('click', closeNav);

    // Close menu when any link is clicked (for single-page navigation)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Handle Signup Form Submission (Placeholder)
    const signupForm = document.getElementById('signup-form');
    const formMessage = document.querySelector('.form-message');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // This is where you would send the data to an email service (like Mailchimp/SendGrid)
        // For a Netlify deploy, you can use Netlify Forms by adding 'data-netlify="true"' 
        // to your form tag and removing the JS below.

        formMessage.textContent = "✅ Success! You're signed up for exclusive updates. Get ready to paint!";
        formMessage.style.color = "var(--color-green)";
        signupForm.reset();
    });
});