document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('[data-toggle]');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button)
      const targetId = this.getAttribute('data-toggle').replace('#', '');
      const targetElement = document.querySelector(`[data-toggle-id="${targetId}"]`);
      console.log(targetElement)
      
      if (targetElement) {
        targetElement.classList.toggle('opened');
        this.classList.toggle('active');
      }
    });
  });
});
