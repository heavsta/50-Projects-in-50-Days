const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active'); // Toggle method! adds & removes it
  input.focus(); // Focus method
});
