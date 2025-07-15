function toggleModal(modalId, action = 'open') {
  const modal = document.getElementById(modalId);
  
  if (action === 'open') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log(1)
  } else {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('[data-modal-id]').forEach(el => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    toggleModal(this.getAttribute('data-modal-id'));
  });
});

document.querySelectorAll('.my-modal__close').forEach(btn => {
  btn.addEventListener('click', () => toggleModal(btn.closest('.my-modal').id, 'close'));
});
