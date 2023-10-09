const addNewPost = document.querySelector('#addnewpost');
addNewPost?.addEventListener('submit', async (event) => {
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
  if (data.newPost) {
    window.location.assign('/');
  } else {
    console.log(error);
  }
});
