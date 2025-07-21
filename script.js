document.getElementById('darkToggle').addEventListener('click', function() {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme');
  root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('formResponse').innerHTML = `<div class="alert alert-success">Thanks, ${name}! Message sent.</div>`;
  this.reset();
});
