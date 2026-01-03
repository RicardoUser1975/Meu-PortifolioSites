// SLIDER AUTOMÁTICO
const slides = document.querySelectorAll('.slide');
let current = 0;

if (slides.length > 0) {
  slides[0].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// MODAL
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// ORAÇÃO – COMENTÁRIOS EM TEMPO REAL (FRONT)
const form = document.getElementById('formOracao');
const comentarios = document.getElementById('comentarios');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = form.nome.value;
    const motivo = form.motivo.value;

    if (!motivo) return;

    const div = document.createElement('div');
    div.className = 'comentario';
    div.innerHTML = `<strong>${nome || 'Anônimo'}:</strong><br>${motivo}`;

    comentarios.prepend(div);
    form.reset();
  });
}
