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
            category: "Jackets",
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



class Statistic {
    constructor(size,length, width, bust, waist, hip) {
        this.size = size;
        this.length = length; // Chiều dài
        this.width = width;   // Chiều rộng
        this.bust = bust;     // Vòng 1
        this.waist = waist;   // Vòng 2
        this.hip = hip;       // Vòng 3
    }
}
// Product Interface
class Product {
    constructor(name) {
        this.name = name;  // Khởi tạo thuộc tính name
        this.statisticMale = [];
        this.statisticFemale = [];
        this.size = new Map();  // Khởi tạo Map cho thuộc tính size
        this.size.set("XS", 0); //
        this.size.set("S", 16);
        this.size.set("M", 20.25);
        this.size.set("L", 23.5);
        this.size.set("XL", 27.5);
        this.size.set("XXL", 31.5);
    }

    setupStatisticMale(){}
    setupStatisticFemale(){}
    findStatistic(){}
    findSize(){}   

}


// Concrete Products
class Shirt extends Product {
    constructor(name) {
        super(name);  // Gọi constructor của lớp cha (Product)
        this.setupStatisticMale();
        this.setupStatisticFemale();
    }    

    findSize(gender, height, weight) {
        const bmi = weight / (height * height); // Tính BMI
        let selectedSize = null; // Kích thước phù hợp
    
        // Duyệt qua Map size bằng for...of
        for (const [key, value] of this.size) {
            if (bmi > value) {
                selectedSize = key; // Lưu lại kích thước phù hợp
            } else {
                // Nếu BMI không lớn hơn giá trị hiện tại
                if (gender === "female") {
                    break; // Dừng tìm kiếm cho nữ
                } else if (gender === "male") {
                    selectedSize = key; // Tăng kích thước cho nam
                    break;
                }
            }
        }
        console.log(selectedSize);
        // Trả về kích thước hoặc thông báo mặc định
        return selectedSize || "Size not found";
    }

    setupStatisticMale(){
        this.statisticMale.push(new Statistic("XS",69,40.5,44,42,"N/A"));
        this.statisticMale.push(new Statistic("S",69,42,46,44,"N/A"));
        this.statisticMale.push(new Statistic("M",69,43.5,48,46,"N/A"));
        this.statisticMale.push(new Statistic("L",71,45,50,48,"N/A"));
        this.statisticMale.push(new Statistic("XL",71,46.5,52,50,"N/A"));
        this.statisticMale.push(new Statistic("XXL",73,48,54,52,"N/A"));
    }

    setupStatisticFemale(){
        this.statisticFemale.push(new Statistic("XS",67,41.5,53.5,51,"N/A"));
        this.statisticFemale.push(new Statistic("S",69,42,55.5,53,"N/A"));
        this.statisticFemale.push(new Statistic("M",71,43,57.5,55,"N/A"));
        this.statisticFemale.push(new Statistic("L",73,44,59.5,57,"N/A"));
        this.statisticFemale.push(new Statistic("XL",75,45.5,62.5,60,"N/A"));
        this.statisticFemale.push(new Statistic("XXL",76,46.5,65.5,63,"N/A"));
    } 

    findStatistic(gender, size){
        let result = null;

        // Kiểm tra giới tính và tìm kiếm trong mảng phù hợp
        if (gender === "male") {
            result = this.statisticMale.find(stat => stat.size === size);
        } else if (gender === "female") {
            result = this.statisticFemale.find(stat => stat.size === size);
        }


        // Trả về đối tượng Statistic nếu tìm thấy, ngược lại trả về thông báo
        return result || "Statistic not found";
    }
    

    getDetails() {
        return "This is a shirt";
    }
}

class Jacket extends Product {
    getDetails() {
        return "These are pants";
    }
}

class Skirt extends Product {
    getDetails() {
        return "This is a skirt";
    }
}

class TShirt extends Product {
    getDetails() {
        return "This is a T-shirt";
    }
}

class Dress extends Product {
    getDetails() {
        return "This is a dress";
    }
}

class Shorts extends Product {
    getDetails() {
        return "These are shorts";
    }
}

class Trousers extends Product {
    getDetails() {
        return "These are trousers";
    }
}

// Abstract Factory
class ClothesFactory {
    createProduct(type) {
        throw "Method createProduct() should be implemented";
    }
}

// Concrete Factory
class ConcreteClothesFactory extends ClothesFactory {
    createProduct(type) {
        switch(type) {
            case 'Shirt':
                return new Shirt();
            case 'Jacket':
                return new Jacket();
            case 'Skirt':
                return new Skirt();
            case 'T-shirt':
                return new TShirt();
            case 'Dress':
                return new Dress();
            case 'Shorts':
                return new Shorts();
            case 'Trousers':
                return new Trousers();
            default:
                throw "Product type not found";
        }
    }
}

const model = document.querySelector('.model');  // Model chứa form
const closeBtn = document.querySelector('.form_header i');  // Nút đóng
const productCards = document.querySelectorAll('.card');  // Các thẻ sản phẩm
const submitBtn = document.querySelector('.submit_btn');  // Nút submit trong model
const genderRadios = document.getElementsByName('gender');// Lấy tất cả các radio button có name là "gender"
const skinToneRadios = document.getElementsByName('skintone');// Lấy tất cả các radio button có name là "skintone"
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

const factory =  new ConcreteClothesFactory();

const suggestionImage = document.getElementById('suggestion-img');
const suggestionName = document.getElementById('suggestion-name');
const suggestionSize= document.getElementById('size-value');
const suggestionColor= document.getElementById('color-value');
const suggestionPattern= document.getElementById('pattern-value');
const suggestionLength= document.getElementById('length-value');
const suggestionWidth= document.getElementById('width-value');
const suggestionBust= document.getElementById('bust-value');
const suggestionWaist= document.getElementById('waist-value');
const suggestionHip= document.getElementById('hip-value');



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


submitBtn.addEventListener('click', () => {
    suggestionColor.textContent = selectColor(getSelectedSkinTone());
    const weight = parseFloat(weightInput.value);  
    const height = parseFloat(heightInput.value) / 100; 
    const product = factory.createProduct(name);

    const productSize = product.findSize(getSelectedGender(),height, weight);

    // Lấy kích thước dựa trên thông tin giới tính, chiều cao và cân nặng
    suggestionSize.textContent = productSize;
    const statResult = product.findStatistic(getSelectedGender(),productSize);

    if (statResult !== "Statistic not found" && statResult !== null) {
        suggestionLength.textContent = statResult.length;
        suggestionWidth.textContent =  statResult.width;
        suggestionBust.textContent = statResult.bust;
        suggestionWaist.textContent = statResult.waist;
        suggestionHip.textContent = statResult.hip;
    }
});


// Đóng model khi nhấp vào nút đóng (X)
closeBtn.addEventListener('click', () => {
    reset();
    model.classList.add('hide');
});

// Hàm lấy giá trị của radio button được chọn
function getSelectedRadioValue(radios) {
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

// Cập nhật lại các hàm lấy giá trị
function getSelectedGender() {
    return getSelectedRadioValue(genderRadios);
}

function getSelectedSkinTone() {
    return getSelectedRadioValue(skinToneRadios);
}


function reset(){
    
    //Reset chon gender
    genderRadios.forEach(radio => {
    radio.checked = false; // Bỏ chọn radio
    });

    //Reset chon skintone
    skinToneRadios.forEach(radio => {
    radio.checked = false; // Bỏ chọn radio
    });

    suggestionSize.textContent = "";
    suggestionColor.textContent = "";
    suggestionImage.src ="";
    suggestionName.textContent = "";
    weightInput.value ="";
    heightInput.value ="";
    suggestionLength.textContent = "";
    suggestionWidth.textContent =  "";
    suggestionBust.textContent = "";
    suggestionWaist.textContent = "";
    suggestionHip.textContent = "";
    
}

function selectColor(skintone) {
    switch (skintone) {
        case 'Warm':
            return "Red, Orange, Yellow, Green, Brown, Cream, Beige, Light Tan, Gold and Copper";
        case 'Cold':
            return "Red, Purple, Blue, Green, Bright White Light Gray, Silver, White Gold";
        case 'Neutral':
            return "Beige, Tan, Cream, Taupe, Pastel Blue, Lilac, Turquoise, Terracotta, Brick red, Light Yellow, Silver, Gold";
        default:
            return "No color";  // Trường hợp giá trị không hợp lệ
    }
}

// 




