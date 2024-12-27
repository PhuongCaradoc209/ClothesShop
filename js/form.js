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
            image: "../src/image/product/Dico_Mate_Tshirt.png",
            category: "T-shirt",
            title: "Dico Mate T-shirt",
            description: "This comfy 100% cotton t-shirt features vibrant graphics with unique illustrations and \"DIRTYCOINS\" text along with its Japanese translation. Available in various colors and a relaxed fit, it's perfect for a bold casual look.",
            price: "$18"
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
            title: "High-Waisted Straight-Leg Trousers",
            description: "These chic, high-waisted black pants feature a wide-leg design, smooth fabric, and a crease running down the center for a tailored look. The pants come with belt loops and a single button closure, making them versatile for both formal and casual occasions. Available in multiple sizes.",
            price: "$40"
        },
        {
            image: "../src/image/product/Red_ALine_Skirt.png",
            category: "Skirt",
            title: "Red A-Line Skirt",
            description: "This elegant high-waisted, A-line skirt features a fitted waistband with three decorative buttons on each side and pleats that create a flared, voluminous look. Made from quality fabric, its rich red color and classic design make it a stylish and versatile addition to any wardrobe.",
            price: "$35"
        },
        {
            image: "../src/image/product/Metal_Label_Wide_Trouser_Pants.png",
            category: "Trousers",
            title: "Metal Label Wide Trouser Pants",
            description: "These stylish beige trousers feature a button and zipper closure, belt loops, and side pockets. Crafted from lightweight fabric with a straight-leg cut, they also showcase a small embroidered logo near the right pocket. Available in various sizes and colors for a comfortable and sleek look.",
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
        },
        {
            image: "../src/image/product/Striped_Relaxed_Shirt.png",
            category: "Shirt",
            title: "Striped Relaxed Shirt - Blue",
            description: "This stylish button-up shirt features blue and white stripes, a collar, and a chest pocket with a brown rectangular patch. Made from 100% cotton, it offers a comfortable and breathable fit. Available in multiple sizes, it's perfect for both casual and semi-formal occasions.",   
            price: "$30"
        },
    ];

// Lấy thẻ chứa danh sách sản phẩm
const productList = document.getElementById("productList");

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

const productCards = document.querySelectorAll('.card');  // Các thẻ sản phẩm

// Mở model khi nhấp vào sản phẩm
productCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Lấy chỉ số của sản phẩm từ thuộc tính data-index
        const productIndex = card.dataset.index;

        // Dùng chỉ số để truy xuất thông tin sản phẩm
        const selectedProduct = products[productIndex];

        // Lưu thông tin vào sessionStorage
        sessionStorage.setItem('productImage', selectedProduct.image);
        sessionStorage.setItem('productTitle', selectedProduct.title);
        sessionStorage.setItem('productCategory', selectedProduct.category);
        sessionStorage.setItem('productPrice', selectedProduct.price);
        sessionStorage.setItem('productDescription', selectedProduct.description);

        // Chuyển hướng đến trang productSelected.html
        window.location.href = "../html/productSelected.html"; 
    });
});