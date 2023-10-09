const deleteBtn = document.querySelector('.row');

deleteBtn?.addEventListener('click', async (e) => {
  if (!e.target.classList.contains('js-delete')) {
    return;
  }
  const { id } = e.target.closest('.card').dataset;
  const response = await fetch(`/profile/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  if (data) {
    e.target.closest('.card').remove();
  }
});