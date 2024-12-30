document.addEventListener("DOMContentLoaded", () => {
    const newArrivalsList = document.getElementById("newArrivalsList");

    // Giả sử bạn đã có mảng products
    fetch("../data/products.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            const selectedIndices = [4,9,1,11]; // Indices của sản phẩm bạn muốn hiển thị
            const selectedProducts = selectedIndices.map(index => products[index]); // Tạo mảng các sản phẩm từ chỉ số đã chọn

            // Duyệt qua các sản phẩm đã chọn và thêm chúng vào newArrivalsList
            selectedProducts.forEach((product, index) => {
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

                // Sử dụng chỉ số từ selectedIndices để lưu vào dataset.index
                card.dataset.index = selectedIndices[index];
                console.log("Card index: ", card.dataset.index);

                newArrivalsList.appendChild(card);
            });

            // Mở modal khi nhấp vào sản phẩm
            const productCards = document.querySelectorAll('.card');
            productCards.forEach((card) => {
                card.addEventListener('click', () => {
                    const productIndex = card.dataset.index; // Lấy chỉ số từ dataset
                    const selectedProduct = products[productIndex]; // Lấy sản phẩm từ mảng products bằng chỉ số

                    // Lưu thông tin sản phẩm vào sessionStorage
                    sessionStorage.setItem('productImage', selectedProduct.image);
                    sessionStorage.setItem('productTitle', selectedProduct.title);
                    sessionStorage.setItem('productCategory', selectedProduct.category);
                    sessionStorage.setItem('productPrice', selectedProduct.price);
                    sessionStorage.setItem('productDescription', selectedProduct.description);

                    // Chuyển hướng đến trang chi tiết sản phẩm
                    window.location.href = "../html/productSelected.html";
                });
            });
        })
        .catch(error => {
            console.error("Error loading product data:", error);
        });
});
