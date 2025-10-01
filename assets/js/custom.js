// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, looking for copy email button...');
  
  // Find the Email button in navbar by ID
  const contactLink = document.querySelector('#copy-email-btn');
  console.log('Found copy email button:', contactLink);
  
  if (contactLink) {
    console.log('Setting up copy email functionality...');
    // Change the text to look like a button
    contactLink.innerHTML = 'Copy Email';
    contactLink.setAttribute('data-email-setup', 'true');
    
    // Set up the click handler
    setupEmailCopy(contactLink);
  } else {
    console.log('Copy email button not found on DOM load, trying again in 500ms...');
    // Fallback: try again after a short delay
    setTimeout(function() {
      const delayedContactLink = document.querySelector('#copy-email-btn');
      console.log('Delayed search found copy email button:', delayedContactLink);
      if (delayedContactLink && !delayedContactLink.hasAttribute('data-email-setup')) {
        delayedContactLink.setAttribute('data-email-setup', 'true');
        delayedContactLink.innerHTML = 'Copy Email';
        setupEmailCopy(delayedContactLink);
      }
    }, 500);
  }
  
  function setupEmailCopy(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Copy email button clicked!');
      
      // Your email address
      const email = 'vakula289@gmail.com';
      
      // Copy to clipboard with better error handling
      copyToClipboard(email);
      
      function copyToClipboard(text) {
        // Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(function() {
            console.log('Email copied successfully via Clipboard API');
            showSuccessMessage();
          }).catch(function(err) {
            console.error('Clipboard API failed: ', err);
            fallbackCopy(text);
          });
        } else {
          console.log('Using fallback copy method');
          // Use fallback method
          fallbackCopy(text);
        }
      }
      
      function showSuccessMessage() {
        const originalText = button.innerHTML;
        button.innerHTML = '✓ Email Copied!';
        button.classList.add('copied');
        console.log('Showing success message');
        
        // Reset after 2.5 seconds
        setTimeout(function() {
          button.innerHTML = originalText;
          button.classList.remove('copied');
          console.log('Reset button to original state');
        }, 2500);
      }
      
      function fallbackCopy(text) {
        console.log('Attempting fallback copy...');
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
          console.log('execCommand copy result:', successful);
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
        const originalText = button.innerHTML;
        button.innerHTML = 'Copy Failed - Click Again';
        button.style.backgroundColor = '#dc3545';
        console.log('Showing failure message');
        
        // Also show alert with email
        setTimeout(function() {
          alert('Could not copy automatically. Here\'s the email:\n\n' + email);
          button.innerHTML = originalText;
          button.style.backgroundColor = '';
        }, 1000);
      }
    });
  }
  
  // Dark mode toggle functionality
  const toggleBtn = document.getElementById('dark-mode-toggle');
  console.log('Found dark mode toggle:', toggleBtn);

  if (toggleBtn) {
    // Load saved mode
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️';
      console.log('Dark mode enabled from localStorage');
    }

    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Dark mode toggle clicked');
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleBtn.textContent = '☀️';
        console.log('Dark mode enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggleBtn.textContent = '🌙';
        console.log('Dark mode disabled');
      }
    });
  }
});

