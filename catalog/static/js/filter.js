document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('price-range');
    const priceRangeMax = document.getElementById('price-range-max');
    const priceValue = document.getElementById('price-value');
    const priceValueMax = document.getElementById('price-value-max');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const categoryFilter = document.getElementById('category-filter');

    function updatePriceValues() {
        priceValue.textContent = minPriceInput.value + ' KGS';
        priceValueMax.textContent = maxPriceInput.value + ' KGS';
        priceRange.value = minPriceInput.value;
        priceRangeMax.value = maxPriceInput.value;
    }

    minPriceInput.addEventListener('input', function() {
        if (parseInt(minPriceInput.value) > parseInt(maxPriceInput.value)) {
            minPriceInput.value = maxPriceInput.value;
        }
        updatePriceValues();
        filterProducts();
    });

    maxPriceInput.addEventListener('input', function() {
        if (parseInt(maxPriceInput.value) < parseInt(minPriceInput.value)) {
            maxPriceInput.value = minPriceInput.value;
        }
        updatePriceValues();
        filterProducts();
    });
    priceRange.addEventListener('input', function() {
        minPriceInput.value = priceRange.value;
        updatePriceValues();
        filterProducts();
    });

    priceRangeMax.addEventListener('input', function() {
        maxPriceInput.value = priceRangeMax.value;
        updatePriceValues();
        filterProducts();
    });

    const categories = Array.from(document.querySelectorAll('.product-card')).map(card => card.dataset.category);
    const uniqueCategories = [...new Set(categories)];
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category;
        option.value = category;
        categoryFilter.appendChild(option);
    });

    function filterProducts() {
        const minPrice = parseInt(minPriceInput.value);
        const maxPrice = parseInt(maxPriceInput.value);
        const selectedCategory = categoryFilter.value;

        document.querySelectorAll('.product-card').forEach(card => {
            const price = parseFloat(card.querySelector('p').innerText.split(' ')[0]);
            const category = card.dataset.category;

            const priceMatch = price >= minPrice && price <= maxPrice;
            const categoryMatch = selectedCategory === 'all' || category === selectedCategory;

            if (priceMatch && categoryMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    updatePriceValues();
    filterProducts();

    categoryFilter.addEventListener('change', filterProducts);
});
