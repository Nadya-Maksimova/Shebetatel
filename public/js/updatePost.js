const updateCard = document.querySelector('#updatecard');
updateCard?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    image, text, action,
  } = event.target;
  const response = await fetch(action, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image: image.value,
      text: text.value,
    }),
  });
  const updatedCard = await response.json();
  if (updatedCard) {
    window.location.href = '/profile';
  } else {
    console.log('Didnt work!');
  }
});
