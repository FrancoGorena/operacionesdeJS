let textarea = document.getElementById('area');
let charCount = document.getElementById('contador');

textarea.addEventListener('input', () => {
    let text = textarea.value;
    let length = text.length;
    charCount.innerText = `${length} caracteres`;
  });