// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Find the Email link in navbar
  const contactLink = document.querySelector('a[href="#copy-email"]');
  
  if (contactLink) {
    // Change the text to include emoji
    contactLink.innerHTML = '📧 Copy Email';
    
    // Add click event to copy email
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Your email address
      const email = 'vakula289@gmail.com';
      
      // Copy to clipboard
      if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(email).then(function() {
          showSuccessMessage();
        }).catch(function(err) {
          console.error('Failed to copy email: ', err);
          fallbackCopy(email);
        });
      } else {
        // Fallback for older browsers or non-secure contexts
        fallbackCopy(email);
      }
      
      function showSuccessMessage() {
        const originalText = contactLink.innerHTML;
        contactLink.innerHTML = '✓ Email Copied!';
        contactLink.style.color = '#28a745';
        
        // Reset after 2 seconds
        setTimeout(function() {
          contactLink.innerHTML = originalText;
          contactLink.style.color = '';
        }, 2000);
      }
      
      function fallbackCopy(text) {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          document.execCommand('copy');
          showSuccessMessage();
        } catch (err) {
          console.error('Fallback copy failed: ', err);
          alert('Email: ' + text + '\n\nCopy failed, but here\'s the email address!');
        } finally {
          document.body.removeChild(textarea);
        }
      }
    });
  }
});
