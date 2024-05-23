document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.product-card');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        const query = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();
            if (name.includes(query) || category.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
