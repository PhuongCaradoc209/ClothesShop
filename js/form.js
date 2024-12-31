// Lấy thẻ chứa danh sách sản phẩm
const productList = document.getElementById("productList");
// Fetch dữ liệu từ file JSON
fetch("../data/products.json")
    .then(response => response.json()) // Chuyển đổi dữ liệu thành JSON
    .then(products => {
        products.forEach((product, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="card-product" title="${product.title}">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="card-content" title="${product.title}">
                    <div class="card-category">${product.category}</div>
                    <div class="card-title">${product.title}</div>
                    <div class="card-price">${product.price}</div>
                </div>
            `;

            // Gắn chỉ số (index) làm thuộc tính dữ liệu cho card
            card.dataset.index = index;

            productList.appendChild(card);
        });

        // Mở model khi nhấp vào sản phẩm
        const productCards = document.querySelectorAll('.card');
        productCards.forEach((card) => {
            card.addEventListener('click', () => {
                const productIndex = card.dataset.index;
                const selectedProduct = products[productIndex];

                sessionStorage.setItem('productImage', selectedProduct.image);
                sessionStorage.setItem('productTitle', selectedProduct.title);
                sessionStorage.setItem('productCategory', selectedProduct.category);
                sessionStorage.setItem('productPrice', selectedProduct.price);
                sessionStorage.setItem('productDescription', selectedProduct.description);

                window.location.href = "../html/productSelected.html";
            });
        });
    })
    .catch(error => {
        console.error("Error loading product data:", error);
    });
