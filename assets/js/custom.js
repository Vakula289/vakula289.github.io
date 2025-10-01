// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Find the Email link in navbar
  const contactLink = document.querySelector('a[href="#copy-email"]');
  
  if (contactLink) {
    // Change the text to look like a button
    contactLink.innerHTML = 'Copy Email';
    
    // Add click event to copy email
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Your email address
      const email = 'vakula289@gmail.com';
      
      // Copy to clipboard with better error handling
      copyToClipboard(email);
      
      function copyToClipboard(text) {
        // Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(function() {
            showSuccessMessage();
          }).catch(function(err) {
            console.error('Clipboard API failed: ', err);
            fallbackCopy(text);
          });
        } else {
          // Use fallback method
          fallbackCopy(text);
        }
      }
      
      function showSuccessMessage() {
        const originalText = contactLink.innerHTML;
        contactLink.innerHTML = '✓ Email Copied!';
        contactLink.classList.add('copied');
        
        // Reset after 2.5 seconds
        setTimeout(function() {
          contactLink.innerHTML = originalText;
          contactLink.classList.remove('copied');
        }, 2500);
      }
      
      function fallbackCopy(text) {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        textarea.style.opacity = '0';
        textarea.setAttribute('readonly', '');
        document.body.appendChild(textarea);
        
        // Select the text
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, text.length);
        
        try {
          const successful = document.execCommand('copy');
          if (successful) {
            showSuccessMessage();
          } else {
            throw new Error('execCommand returned false');
          }
        } catch (err) {
          console.error('Fallback copy failed: ', err);
          // Show a user-friendly message with the email
          showFailureMessage(text);
        } finally {
          document.body.removeChild(textarea);
        }
      }
      
      function showFailureMessage(email) {
        const originalText = contactLink.innerHTML;
        contactLink.innerHTML = 'Copy Failed - Click Again';
        contactLink.style.backgroundColor = '#dc3545';
        
        // Also show alert with email
        setTimeout(function() {
          alert('Could not copy automatically. Here\'s the email:\n\n' + email);
          contactLink.innerHTML = originalText;
          contactLink.style.backgroundColor = '';
        }, 1000);
      }
    });
  }
});
