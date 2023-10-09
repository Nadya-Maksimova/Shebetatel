const login = document.querySelector('#login');
const errorDiv = document.querySelector('.data2');

login?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    email, password, action, method,
  } = e.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  if (data.status === 'error') {
    errorDiv.innerHTML = data.message;
  } if (data.status === 'success') {
    window.location.assign('/');
  }
});
