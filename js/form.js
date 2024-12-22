// class Statistic {
//     constructor(size,length, width, bust, waist, hip) {
//         this.size = size;
//         this.length = length; // Chiều dài
//         this.width = width;   // Chiều rộng
//         this.bust = bust;     // Vòng 1
//         this.waist = waist;   // Vòng 2
//         this.hip = hip;       // Vòng 3
//     }
// }
// Product Interface
class Product {
    constructor(name) {
        this.name = name;  // Khởi tạo thuộc tính name
        this.statistic = [];
        // this.size = new Map();  // Khởi tạo Map cho thuộc tính size
        this.size.set("XS", 0); //
        this.size.set("S", 16);
        this.size.set("M", 20.25);
        this.size.set("L", 23.5);
        this.size.set("XL", 27.5);
        this.size.set("XXL", 31.5);
    }

    // setupStatistic(){

    // }
    // Phương thức findSize là trừu tượng, sẽ được cài đặt trong các lớp con
    findSize() {
        throw new Error("findSize method must be implemented");
    }

    // Phương thức getDetails là trừu tượng, sẽ được cài đặt trong các lớp con
    getDetails() {
        throw new Error("Method getDetails() should be implemented");
    }
}


// Concrete Products
class Shirt extends Product {
    constructor(name) {
        super(name);  // Gọi constructor của lớp cha (Product)
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
                if (gender === "fefemale") {
                    break; // Dừng tìm kiếm cho nữnữ
                } else if (gender === "male") {
                    selectedSize = key; // Tăng kích thước cho nam
                    break;
                }
            }
        }
    
        // Trả về kích thước hoặc thông báo mặc định
        return selectedSize || "Size not found";
    }

    // setupStatistic(){
    //     this.statistic.push(new Statistic(S,69,62,92,88,NaN));
    // }
    

    getDetails() {
        return "This is a shirt";
    }
}

class Pants extends Product {
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
            case 'Pants':
                return new Pants();
            case 'Skirt':
                return new Skirt();
            case 'T-Shirt':
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

let name = '';

// Mở model khi nhấp vào sản phẩm
productCards.forEach((card) => {
    card.addEventListener('click', () => {
        model.classList.remove('hide');  // Mở model khi nhấp vào sản phẩm
        // Cập nhật thông tin vào model (Nếu cần thiết, bạn có thể lấy dữ liệu từ sản phẩm)
        suggestionImage.src = card.querySelector('img').src;
        suggestionName.textContent = card.querySelector('.card-title').textContent;
        name = card.querySelector('.card-category').textContent;
        
    });
});

submitBtn.addEventListener('click', () => {
    suggestionSize.textContent = getSelectedGender();
    suggestionColor.textContent = selectColor(getSelectedSkinTone());
    const weight = parseFloat(weightInput.value);  
    const height = parseFloat(heightInput.value) / 100; 
    const product = factory.createProduct(name);

    // Lấy kích thước dựa trên thông tin giới tính, chiều cao và cân nặng
    suggestionSize.textContent = product.findSize(getSelectedGender(),height, weight);
    ;
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




