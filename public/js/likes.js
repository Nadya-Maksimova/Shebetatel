// function likeClick(like = 0) {
//   return function (event) {
//     const card = event.target.closest('.card');
//     const likeNum = card.querySelector('.likes');
//     likeNum.innerHTML = ++like;
//   };
// }
// const getLike = document.querySelectorAll('.likes');
// getLike.forEach((likes) => likes.addEventListener('click', likeClick(), false));

document.querySelector('.row')?.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes')) {
    const { id } = e.target.dataset;
    const res = await fetch(`/${id}`, {
      method: 'PUT',
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    }
  }
});
