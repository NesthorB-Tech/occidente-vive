/* ========================================
   OCCIDENTE VIVE — script.js
   Manipulación del DOM, filtros y validación
======================================== */

/* ========================================
   1. NAVBAR — SCROLL EFFECT + HAMBURGUESA
======================================== */
const navbar  = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const allNavLinks = document.querySelectorAll('.nav-link');

// Efecto scroll: agrega/quita clase .scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menú hamburguesa: abre/cierra menú móvil
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('abierto');
  menuBtn.textContent = navLinks.classList.contains('abierto') ? '✕' : '☰';
});

// Cerrar menú al hacer clic en un enlace (móvil)
allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('abierto');
    menuBtn.textContent = '☰';
  });
});

// Resaltar enlace activo según sección visible
const secciones = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let seccionActual = '';

  secciones.forEach(sec => {
    const offsetTop = sec.offsetTop - 90;
    if (window.scrollY >= offsetTop) {
      seccionActual = sec.getAttribute('id');
    }
  });

  allNavLinks.forEach(link => {
    link.classList.remove('activo');
    if (link.getAttribute('href') === `#${seccionActual}`) {
      link.classList.add('activo');
    }
  });
});


/* ========================================
   2. FILTROS DE ALOJAMIENTOS POR DEPARTAMENTO
======================================== */
const botonesDepto = document.querySelectorAll('.btn-depto');
const tarjetasAloj = document.querySelectorAll('.alojamiento-card');

botonesDepto.forEach(btn => {
  btn.addEventListener('click', () => {
    // Actualizar botón activo
    botonesDepto.forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');

    const deptoSeleccionado = btn.getAttribute('data-depto');

    tarjetasAloj.forEach(card => {
      if (deptoSeleccionado === 'todos' || card.getAttribute('data-depto') === deptoSeleccionado) {
        card.classList.remove('oculta');
      } else {
        card.classList.add('oculta');
      }
    });
  });
});


/* ========================================
   3. VALIDACIÓN DEL FORMULARIO
======================================== */
const form         = document.getElementById('formularioReserva');
const mensajeExito = document.getElementById('mensajeExito');

// Regex de validación
const regexEmail    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^[\d\s\-\+]{7,15}$/;
const regexNombre   = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

// Función: mostrar error en un campo
function mostrarError(inputId, mensaje) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`error-${inputId}`);
  input.classList.remove('valido');
  input.classList.add('invalido');
  if (error) error.textContent = mensaje;
}

// Función: marcar campo como válido
function marcarValido(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`error-${inputId}`);
  input.classList.remove('invalido');
  input.classList.add('valido');
  if (error) error.textContent = '';
}

// Función: limpiar estado de un campo
function limpiarEstado(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`error-${inputId}`);
  input.classList.remove('valido', 'invalido');
  if (error) error.textContent = '';
}

// Limpiar errores al corregir (evento input/change)
['nombre', 'email', 'telefono', 'llegada', 'salida', 'destino', 'tipo', 'huespedes'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  const evento = (el.tagName === 'SELECT') ? 'change' : 'input';
  el.addEventListener(evento, () => limpiarEstado(id));
});

// Validación individual de cada campo
function validarNombre() {
  const val = document.getElementById('nombre').value.trim();
  if (!val) { mostrarError('nombre', 'El nombre es obligatorio.'); return false; }
  if (!regexNombre.test(val)) { mostrarError('nombre', 'Solo letras y mínimo 3 caracteres.'); return false; }
  marcarValido('nombre'); return true;
}

function validarEmail() {
  const val = document.getElementById('email').value.trim();
  if (!val) { mostrarError('email', 'El correo es obligatorio.'); return false; }
  if (!regexEmail.test(val)) { mostrarError('email', 'Ingresa un correo válido (ej: correo@gmail.com).'); return false; }
  marcarValido('email'); return true;
}

function validarTelefono() {
  const val = document.getElementById('telefono').value.trim();
  if (!val) { mostrarError('telefono', 'El teléfono es obligatorio.'); return false; }
  if (!regexTelefono.test(val)) { mostrarError('telefono', 'Teléfono inválido. Ej: 7681-0494'); return false; }
  marcarValido('telefono'); return true;
}

function validarLlegada() {
  const val = document.getElementById('llegada').value;
  const hoy = new Date().toISOString().split('T')[0];
  if (!val) { mostrarError('llegada', 'La fecha de llegada es obligatoria.'); return false; }
  if (val < hoy) { mostrarError('llegada', 'La fecha no puede ser en el pasado.'); return false; }
  marcarValido('llegada'); return true;
}

function validarSalida() {
  const llegada = document.getElementById('llegada').value;
  const salida  = document.getElementById('salida').value;
  if (!salida) { mostrarError('salida', 'La fecha de salida es obligatoria.'); return false; }
  if (llegada && salida <= llegada) { mostrarError('salida', 'La salida debe ser posterior a la llegada.'); return false; }
  marcarValido('salida'); return true;
}

function validarDestino() {
  const val = document.getElementById('destino').value;
  if (!val) { mostrarError('destino', 'Selecciona un destino.'); return false; }
  marcarValido('destino'); return true;
}

function validarTipo() {
  const val = document.getElementById('tipo').value;
  if (!val) { mostrarError('tipo', 'Selecciona un tipo de alojamiento.'); return false; }
  marcarValido('tipo'); return true;
}

function validarHuespedes() {
  const val = parseInt(document.getElementById('huespedes').value);
  if (!val && val !== 0) { mostrarError('huespedes', 'Indica el número de huéspedes.'); return false; }
  if (val < 1) { mostrarError('huespedes', 'Debe haber al menos 1 huésped.'); return false; }
  if (val > 20) { mostrarError('huespedes', 'Máximo 20 huéspedes por reserva.'); return false; }
  marcarValido('huespedes'); return true;
}

// Submit del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo_valido = [
    validarNombre(),
    validarEmail(),
    validarTelefono(),
    validarLlegada(),
    validarSalida(),
    validarDestino(),
    validarTipo(),
    validarHuespedes()
  ].every(Boolean);

  if (todo_valido) {
    // Mostrar mensaje de éxito
    mensajeExito.classList.add('visible');

    // Deshabilitar botón para evitar doble envío
    const btnReservar = document.getElementById('btnReservar');
    btnReservar.disabled = true;
    btnReservar.textContent = '✅ Reservación enviada';
    btnReservar.style.opacity = '0.7';
    btnReservar.style.cursor = 'not-allowed';

    // Scroll suave al mensaje de éxito
    mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Resetear formulario después de 5 segundos
    setTimeout(() => {
      form.reset();
      mensajeExito.classList.remove('visible');
      btnReservar.disabled = false;
      btnReservar.textContent = 'Enviar Reservación ✈️';
      btnReservar.style.opacity = '';
      btnReservar.style.cursor = '';
      // Limpiar estados visuales
      ['nombre','email','telefono','llegada','salida','destino','tipo','huespedes'].forEach(limpiarEstado);
    }, 5000);
  }
});