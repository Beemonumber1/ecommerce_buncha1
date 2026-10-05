function sendComment(event) {
  event.preventDefault();
  const text = event.target.comment.value.trim();
  if (!text) return;
  const comments = JSON.parse(localStorage.getItem('outlet-comments') || '[]');
  comments.unshift({ name: 'Bạn', text });
  localStorage.setItem('outlet-comments', JSON.stringify(comments));
  window.location.reload();
}
