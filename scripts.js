document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.search-btn');
  const searchBox = document.querySelector('.search-box');

  if (searchButton && searchBox) {
    searchButton.addEventListener('click', () => {
      const query = searchBox.value.trim();
      if (query.length > 0) {
        alert(`جاري البحث عن: ${query}`);
      } else {
        alert('من فضلك اكتب كلمة البحث');
      }
    });
  }
});
