// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Find the Contact link in navbar
  const contactLink = document.querySelector('a[href="contact"]');
  
  if (contactLink) {
    // Change the text to include emoji
    contactLink.innerHTML = '📧 Copy Email';
    
    // Add click event to copy email
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Your email address
      const email = 'vakula289@gmail.com';
      
      // Copy to clipboard
      navigator.clipboard.writeText(email).then(function() {
        // Show success message
        const originalText = contactLink.innerHTML;
        contactLink.innerHTML = '✓ Email Copied!';
        contactLink.style.color = '#28a745';
        
        // Reset after 2 seconds
        setTimeout(function() {
          contactLink.innerHTML = originalText;
          contactLink.style.color = '';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy email: ', err);
        alert('Email: ' + email);
      });
    });
  }
});
