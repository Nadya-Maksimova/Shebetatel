document.querySelector('#regform')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    name, email, password, confirm, action, method,
  } = event.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
      confirm: confirm.value,
    }),
  });
  const data = await response.json();
  if (data.status === 'error') {
    document.getElementById('data').innerHTML = data.message;
  } else {
    window.location.assign('/');
  }
});
