document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll('.product-card');
    const productDetails = document.querySelector('.product-details');
    const backBtnTop = document.getElementById('back-btn-top');
    const backBtnBottom = document.getElementById('back-btn-bottom');
    const detailName = document.getElementById('detail-name');
    const detailImage = document.getElementById('detail-image');
    const detailPrice = document.getElementById('detail-price');
    const detailCategory = document.getElementById('detail-category');
    const detailBrand = document.getElementById('detail-brand');
    const detailDescription = document.getElementById('detail-description');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const name = card.getAttribute('data-name');
            const image = card.getAttribute('data-image');
            const price = card.getAttribute('data-price');
            const category = card.getAttribute('data-category');
            const brand = card.getAttribute('data-brand');
            const description = card.getAttribute('data-description');

            detailName.textContent = name;
            detailImage.setAttribute('src', image);
            detailPrice.textContent = `Цена: ${price} сом`;
            detailCategory.textContent = `Категория: ${category}`;
            detailBrand.textContent = `Бренд: ${brand}`;
            detailDescription.textContent = `Описание: ${description}`;

            productDetails.style.display = 'block';
            document.querySelector('.product-list').style.display = 'none';
        });
    });

    backBtnTop.addEventListener('click', function() {
        closeProductDetails();
    });

    backBtnBottom.addEventListener('click', function() {
        closeProductDetails();
    });

    function closeProductDetails() {
        productDetails.style.display = 'none';
        document.querySelector('.product-list').style.display = 'grid';
    }
});
