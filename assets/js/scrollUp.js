for(const radio of Array.from(document.querySelectorAll('input[type=radio]')))
  radio.addEventListener('change', () => document.body.scrollTo({ top: 0, behavior: 'smooth' }));