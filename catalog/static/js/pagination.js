const products = document.querySelectorAll('.product-card');
const itemsPerPage = 15;
let currentPage = 1;

function displayItems(items, page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    items.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function createPaginationButtons() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginationButtons = document.querySelector('.pagination-buttons');
    const pageInfo = document.getElementById('page-info');

    const prevPageBtn = document.getElementById('prev-page-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const nextPageBtn = document.getElementById('next-page-btn');

    function updatePageInfo() {
        pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
    }

    function showPage(page) {
        currentPage = page;
        displayItems(products, currentPage);
        updatePageInfo();
    }

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    showPage(1);
}

createPaginationButtons();
