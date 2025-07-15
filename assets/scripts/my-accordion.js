document.querySelectorAll('.my-accordion__button').forEach(button => {
  button.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    const targetId = this.getAttribute('aria-controls');
    const target = document.getElementById(targetId);
    const parentId = target.getAttribute('data-parent');
    const accordion = document.querySelector(parentId);

    // закрываем все открытые элементы в текущем аккордеоне
    if (!isExpanded) {
      accordion.querySelectorAll('.my-accordion__collapse').forEach(item => {
        if (item.id !== targetId && item.getAttribute('data-parent') === parentId) {
          item.style.maxHeight = null;
          item.classList.remove('show');
          item.previousElementSibling.querySelector('.my-accordion__button')
            .setAttribute('aria-expanded', 'false');
        }
      });
    }

    // переключаем текущий элемент
    this.setAttribute('aria-expanded', !isExpanded);
    
    if (isExpanded) {
      target.style.maxHeight = null;
      target.classList.remove('show');
    } else {
      target.style.maxHeight = target.scrollHeight + 'px';
      target.classList.add('show');
    }
  });

  // инициализация открытых элементов по умолчанию
  const collapseId = button.getAttribute('aria-controls');
  const collapse = document.getElementById(collapseId);
  if (button.getAttribute('aria-expanded') === 'true') {
    collapse.style.maxHeight = collapse.scrollHeight + 'px';
    collapse.classList.add('show');
  } else {
    collapse.classList.remove('show');
  }
});