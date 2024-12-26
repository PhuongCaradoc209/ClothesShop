// Danh sách sản phẩm
const products = [
        {
            image: "../src/image/product/t-shirt.png",
            category: "T-shirt",
            title: "Classic Cotton T-Shirt",
            price: "$34"
        },
        {
            image: "../src/image/product/jacket.png",
            category: "Jacket",
            title: "Gray Hoodie with Logo",
            price: "$40"
        },
        {
            image: "../src/image/product/trousers.png",
            category: "Trousers",
            title: "Red Wool Sweater",
            price: "$45"
        },
        {
            image: "../src/image/product/shorts.png",
            category: "Shorts",
            title: "Black Leather Jacket",
            price: "$80"
        },
        {
            image: "../src/image/product/shirt.png",
            category: "Shirt",
            title: "Classic White Shirt",
            price: "$25"
        },
        {
            image: "../src/image/product/skirt.png",
            category: "Skirt",
            title: "Blue Summer Skirt",
            price: "$20"
        },
        {
            image: "../src/image/product/jeans.png",
            category: "Jeans",
            title: "Slim Fit Jeans",
            price: "$50"
        },
        {
            image: "../src/image/product/dress.png",
            category: "Dress",
            title: "Elegant Evening Dress",
            price: "$100"
        }
    ];

// Lấy thẻ chứa danh sách sản phẩm
const productList = document.getElementById("productList");

// Tạo các card sản phẩm
products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-product">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="card-content">
            <div class="card-category">${product.category}</div>
            <div class="card-title">${product.title}</div>
            <div class="card-price">${product.price}</div>
        </div>
    `;
    productList.appendChild(card);
});

const productCards = document.querySelectorAll('.card');  // Các thẻ sản phẩm






let name = '';

// Mở model khi nhấp vào sản phẩm
productCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Lấy thông tin từ card
        const image = card.querySelector('img').src;
        const title = card.querySelector('.card-title').textContent;
        const category = card.querySelector('.card-category').textContent;
        const price = card.querySelector('.card-price').textContent;

        // Lưu thông tin vào sessionStorage (hoặc localStorage)
        sessionStorage.setItem('productImage', image);
        sessionStorage.setItem('productTitle', title);
        sessionStorage.setItem('productCategory', category);
        sessionStorage.setItem('productPrice', price);

        // Chuyển hướng đến trang productSelected.html
        window.location.href = "../html/productSelected.html"; 
    });
});