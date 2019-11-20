
const body = document.querySelector('body');
const send = document.querySelector('button');
const pop = document.createElement('div');
body.appendChild(pop);

send.addEventListener('click', e => {
  const token = localStorage.getItem('token');
  e.preventDefault();
  fetch('/secret', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
  })
    .then(response => response.json())
    .then(response => {
      pop.textContent = response.message;
    });
});
