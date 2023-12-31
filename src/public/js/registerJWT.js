import { logger } from '../utils.js'

const formRegister = document.getElementById("formRegister");
formRegister.addEventListener('submit', async e => {

  e.preventDefault()

  const datos = {
    name: formRegister[0].value,
    email: formRegister[1].value,
    password: formRegister[2].value,
  }
  logger.info("DATOS");
  logger.info(datos);

  const respuesta = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const content = await respuesta.json();

  logger.info(content);

  const { access_token } = content;

  if (access_token) {
    localStorage.setItem("access_token", access_token);
    location.href = '/loginJWT.html'
  } else {
    location.href = '/registerJWT.html'
  }
})