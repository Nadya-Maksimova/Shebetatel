const addNewPostInProfile = document.querySelector('#addnewpostinprofile');
addNewPostInProfile?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    text, image, action,
  } = event.target;

  const response = await fetch(action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: text.value,
      image: image.value,
    }),
  });
  const data = await response.json();
  if (data.newPostInProfile) {
    window.location.href = '/profile';
  } else {
    console.log(error);
  }
});
