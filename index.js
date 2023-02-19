// Seleccionar elementos del DOM
const formulario = document.querySelector('form');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const clave = document.querySelector('input[type=password]');
const confirmpassword = document.querySelector('input[name=confirmpassword]');
const enviarBtn = document.getElementById('btn');

// Función para mostrar mensajes de error
function showError(input, message) {
  const campo = input.parentElement;
  campo.className = 'campo error';
  const errorMensaje = campo.querySelector('small');
  errorMensaje.innerText = message;
}

// Función para mostrar mensajes de éxito
function showSuccess(input) {
  const campo = input.parentElement;
  campo.className = 'campo success';
}

// Función para validar campos obligatorios
function validarObligatorio(inputArray) {
  inputArray.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, 'Rellene este campo');
    } else {
      showSuccess(input);
    }
  });
}

// Función para validar nombre
function validarNombre(input) {
  const re = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  if (!re.test(input.value)) {
    showError(input, 'Nombre inválido');
  } else {
    showSuccess(input);
  }
}

// Función para validar correo electrónico
function validarEmail(input) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(input.value)) {
    showError(input, 'Email inválido');
  } else {
    showSuccess(input);
  }
}

// Función para validar longitud de clave
function validarClave(input) {
  if (input.value.length < 8) {
    showError(input, 'La clave debe tener al menos 8 caracteres');
  } else {
    showSuccess(input);
  }
}

// Función para confirmar la clave
function confirmarClave(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Las claves no coinciden');
  }
}

// Evento de envío del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  validarObligatorio([nombre, email, clave, confirmpassword]);
  validarNombre(nombre);
  validarEmail(email);
  validarClave(clave);
  confirmarClave(clave, confirmpassword);
  if (formulario.checkValidity()) {
    alert('Inscripción correcta');
  }
});
