document.addEventListener("DOMContentLoaded", function() {
  const emailButton = document.querySelector('a[href="javascript:void(0)"]');
  if (emailButton) {
    emailButton.addEventListener("click", function() {
      navigator.clipboard.writeText("vakula289@gmail.com").then(() => {
        alert("📋 Email copied to clipboard!");
      });
    });
  }
});
