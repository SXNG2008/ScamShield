/**
 * Interlocking Engine controls for interactive layout features
 */

// Collapsible Layout Controller for Fake Scam Presentation System
function toggleScam(header) {
  const body = header.nextElementSibling;
  const isOpen = body.classList.contains('open');
  
  // Close all open instances systematically to clear view matrix state
  document.querySelectorAll('.scam-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.toggle-hint').forEach(h => h.textContent = 'Click to expand');
  
  // Toggle specific view target matrix
  if (!isOpen) {
    body.classList.add('open');
    header.querySelector('.toggle-hint').textContent = 'Click to collapse';
  }
}

// Global Execution for Navigation Tracking Context Matrix Integration
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section, .hero, .closing');
  
  if (navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(s => {
        // Evaluate pixel window frame heights offset
        if (window.scrollY >= (s.offsetTop - 80)) {
          current = s.id || '';
        }
      });
      
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
          a.classList.add('active');
        }
      });
    });
  }
});