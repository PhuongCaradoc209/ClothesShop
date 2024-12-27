// Danh sách sản phẩm
const products = [
        {
            image: "../src/image/product/Tshirt.png",
            category: "T-shirt",
            title: "\"I Don't Need It\" SpongeBob T-Shirt",
            description: "A soft and breathable 100% cotton t-shirt featuring a humorous SpongeBob SquarePants design. Available in multiple colors with a relaxed fit.",
            price: "$34"
        },
        {
            image: "../src/image/product/Jacket.png",
            category: "Jacket",
            title: "Beige Zip-Up Jacket with Dual Chest Pockets",
            description: "A versatile beige zip-up jacket made from durable materials, offering both style and functionality. Features two chest pockets for added convenience and a classic collar for a timeless look. Perfect for layering in any season.",
            price: "$50"
        },
        {
            image: "../src/image/product/Trousers.png",
            category: "Trousers",
            title: "Slim Fit Chino Trousers",
            description: "Stylish slim fit chino trousers made from durable, breathable fabric with practical side pockets. Perfect for any occasion and easy to mix and match.",
            price: "$45"
        },
        {
            image: "../src/image/product/Shorts.png",
            category: "Shorts",
            title: "Khaki Cargo Shorts",
            description: "Durable khaki cargo shorts with multiple pockets for functionality. Perfect for casual wear and outdoor activities.",
            price: "$80"
        },
        {
            image: "../src/image/product/Shirt.png",
            category: "Shirt",
            title: "Olive Green Button-Up Shirt",
            description: "Olive green short sleeve button-up shirt with a classic collar and two chest pockets. Lightweight, breathable, and perfect for warm weather.",
            price: "$55"
        },
        {
            image: "../src/image/product/Skirt.png",
            category: "Skirt",
            title: "Classic A-Line Denim Skirt",
            description: "Dark-wash denim A-line skirt with a high-waisted design, button and zip closure, and subtle seam detailing. Perfect for any occasion.",
            price: "$40"
        },
        {
            image: "../src/image/product/Jeans.png",
            category: "Jeans",
            title: "Classic Wide-Leg Denim Jeans",
            description: "These indigo wide-leg jeans feature a high waist and relaxed fit, with traditional five-pocket styling. Durable and stylish, perfect for any wardrobe.",
            price: "$50"
        },
        {
            image: "../src/image/product/Dress.png",
            category: "Dress",
            title: "Olive Green Midi Dress",
            description: "Elegant olive green sleeveless midi dress with a flattering waist tie. Ideal for casual or semi-formal events.",   
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