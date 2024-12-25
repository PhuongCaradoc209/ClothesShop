
class Statistic {
    constructor(size, length, width, bust, waist, hip) {
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

    setupStatisticMale() { }
    setupStatisticFemale() { }

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

    findStatistic(gender, size) {
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
}

// Concrete Products
class Shirt extends Product {
    constructor(name) {
        super(name);  // Gọi constructor của lớp cha (Product)
        this.setupStatisticMale();
        this.setupStatisticFemale();
    }

    setupStatisticMale() {
        this.statisticMale.push(new Statistic("XS", 69, 40.5,80, 70, "N/A"));
        this.statisticMale.push(new Statistic("S", 69, 42, 83, 74, "N/A"));
        this.statisticMale.push(new Statistic("M", 69, 43.5, 87, 78, "N/A"));
        this.statisticMale.push(new Statistic("L", 71, 45, 90, 83, "N/A"));
        this.statisticMale.push(new Statistic("XL", 71, 46.5, 94, 87, "N/A"));
        this.statisticMale.push(new Statistic("XXL", 73, 48, 98, 91, "N/A"));
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 67, 41.5, 73, 63, "N/A"));
        this.statisticFemale.push(new Statistic("S", 69, 42, 77, 68, "N/A"));
        this.statisticFemale.push(new Statistic("M", 71, 43, 80, 73, "N/A"));
        this.statisticFemale.push(new Statistic("L", 73, 44, 84, 77, "N/A"));
        this.statisticFemale.push(new Statistic("XL", 75, 45.5, 88, 81, "N/A"));
        this.statisticFemale.push(new Statistic("XXL", 76, 46.5, 93, 86, "N/A"));
    }

    getDetails() {
        return "This is a shirt";
    }
}

class Jacket extends Product {
    constructor(name) {
        super(name);
        this.setupStatisticMale();
        this.setupStatisticFemale();
    }

    setupStatisticMale() {
        this.statisticMale.push(new Statistic("XS", 71, 42.5, 85, 75, "N/A"));
        this.statisticMale.push(new Statistic("S", 72, 44, 88, 79, "N/A"));
        this.statisticMale.push(new Statistic("M", 73, 45.5, 92, 83, "N/A"));
        this.statisticMale.push(new Statistic("L", 75, 47, 95, 88, "N/A"));
        this.statisticMale.push(new Statistic("XL", 76, 48.5, 100, 92, "N/A"));
        this.statisticMale.push(new Statistic("XXL", 78, 50, 103, 97, "N/A"));
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 69, 43, 78, 68, "N/A"));
        this.statisticFemale.push(new Statistic("S", 71, 44, 82, 73, "N/A"));
        this.statisticFemale.push(new Statistic("M", 73, 45, 85, 77, "N/A"));
        this.statisticFemale.push(new Statistic("L", 75, 46, 89, 81, "N/A"));
        this.statisticFemale.push(new Statistic("XL", 77, 47.5, 93, 86, "N/A"));
        this.statisticFemale.push(new Statistic("XXL", 78, 48.5, 98, 81, "N/A"));
    }

    getDetails() {
        return "This is a jacket";
    }
}

class Skirt extends Product {
    constructor(name) {
        super(name);
        this.setupStatisticFemale();
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 72, "N/A", "N/A", 63, 87));
        this.statisticFemale.push(new Statistic("S", 72, "N/A", "N/A", 68, 90));
        this.statisticFemale.push(new Statistic("M", 72, "N/A", "N/A", 73, 93));
        this.statisticFemale.push(new Statistic("L", 74, "N/A", "N/A", 76, 96));
        this.statisticFemale.push(new Statistic("XL", 74, "N/A", "N/A", 81, 99));
        this.statisticFemale.push(new Statistic("XXL", 74, "N/A", "N/A", 86, 102));
    }

    getDetails() {
        return "This is a skirt";
    }
}

class TShirt extends Product {
    constructor(name) {
        super(name);
        this.setupStatisticMale();
        this.setupStatisticFemale();
    }

    setupStatisticMale() {
        this.statisticMale.push(new Statistic("XS", 62, 43, 80, 70, "N/A"));
        this.statisticMale.push(new Statistic("S", 64, 46, 83, 74, "N/A"));
        this.statisticMale.push(new Statistic("M", 67, 49, 87, 78, "N/A"));
        this.statisticMale.push(new Statistic("L", 70, 52, 91, 83, "N/A"));
        this.statisticMale.push(new Statistic("XL", 73, 56, 94, 87, "N/A"));
        this.statisticMale.push(new Statistic("XXL", 75, 60, 98, 91, "N/A"));
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 57.5, 40, 73, 63, "N/A"));
        this.statisticFemale.push(new Statistic("S", 59.5, 41.5, 77, 68, "N/A"));
        this.statisticFemale.push(new Statistic("M", 61.5, 43, 80, 73, "N/A"));
        this.statisticFemale.push(new Statistic("L", 63.5, 44.5, 84, 77, "N/A"));
        this.statisticFemale.push(new Statistic("XL", 66, 46, 88, 81, "N/A"));
        this.statisticFemale.push(new Statistic("XXL", 68, 47.5, 93, 86, "N/A"));
    }

    getDetails() {
        return "This is a T-shirt";
    }
}

class Dress extends Product {
    constructor(name) {
        super(name);
        this.setupStatisticFemale();
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 87, "N/A", 73, 63, 87));
        this.statisticFemale.push(new Statistic("S", 89, "N/A", 77, 68, 90));
        this.statisticFemale.push(new Statistic("M", 91, "N/A", 80, 73, 93));
        this.statisticFemale.push(new Statistic("L", 93, "N/A", 84, 77, 96));
        this.statisticFemale.push(new Statistic("XL", 95, "N/A", 88, 81, 99));
        this.statisticFemale.push(new Statistic("XXL", 97, "N/A", 93, 86, 102));
    }

    getDetails() {
        return "This is a dress";
    }
}

class Shorts extends Product {
    constructor(name) {
        super(name);
        this.setupStatisticMale();
        this.setupStatisticFemale();
    }

    setupStatisticMale() {
        this.statisticMale.push(new Statistic("XS", 38, "N/A", "N/A", 70, 88));
        this.statisticMale.push(new Statistic("S", 40, "N/A", "N/A", 74, 91));
        this.statisticMale.push(new Statistic("M", 42, "N/A", "N/A", 78, 94));
        this.statisticMale.push(new Statistic("L", 44, "N/A", "N/A", 83, 97));
        this.statisticMale.push(new Statistic("XL", 46, "N/A", "N/A", 87, 100));
        this.statisticMale.push(new Statistic("XXL", 48, "N/A", "N/A", 91, 104));
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 34, "N/A", "N/A", 63, 87));
        this.statisticFemale.push(new Statistic("S", 35, "N/A", "N/A", 68, 90));
        this.statisticFemale.push(new Statistic("M", 36, "N/A", "N/A", 73, 93));
        this.statisticFemale.push(new Statistic("L", 37, "N/A", "N/A", 77, 96));
        this.statisticFemale.push(new Statistic("XL", 38, "N/A", "N/A", 81, 99));
        this.statisticFemale.push(new Statistic("XXL", 39, "N/A", "N/A", 86, 102));
    }

    getDetails() {
        return "These are shorts";
    }
}

class Trousers extends Product {
    constructor(name) {
        super(name);
        this.setupStatisticMale();
        this.setupStatisticFemale();
    }

    setupStatisticMale() {
        this.statisticMale.push(new Statistic("XS", 70, "N/A", "N/A", 70, 92));
        this.statisticMale.push(new Statistic("S", 72, "N/A", "N/A", 74, 94));
        this.statisticMale.push(new Statistic("M", 74, "N/A", "N/A", 78, 96));
        this.statisticMale.push(new Statistic("L", 76, "N/A", "N/A", 82, 98));
        this.statisticMale.push(new Statistic("XL", 76, "N/A", "N/A", 86, 100));
        this.statisticMale.push(new Statistic("XXL", 76, "N/A", "N/A", 90, 102));
    }

    setupStatisticFemale() {
        this.statisticFemale.push(new Statistic("XS", 69, "N/A", "N/A", 63, 90));
        this.statisticFemale.push(new Statistic("S", 71, "N/A", "N/A", 68, 92));
        this.statisticFemale.push(new Statistic("M", 71, "N/A", "N/A", 73, 94));
        this.statisticFemale.push(new Statistic("L", 71, "N/A", "N/A", 77, 96));
        this.statisticFemale.push(new Statistic("XL", 71, "N/A", "N/A", 81, 98));
        this.statisticFemale.push(new Statistic("XXL", 71, "N/A", "N/A", 86, 100));
    }

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
        switch (type) {
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


//BACK BUTTON
document.getElementById('backButton').addEventListener('click', function () {
    window.history.back();
});

const image = sessionStorage.getItem('productImage');
const title = sessionStorage.getItem('productTitle');
const category = sessionStorage.getItem('productCategory');
const price = sessionStorage.getItem('productPrice');

//DISPLAY PRODUCT INFORMATION
document.getElementById('productImage').src = image;
document.getElementById('productCategory').textContent = category;
document.getElementById('productTitle').textContent = title;
document.getElementById('productPrice').textContent = price;

//DISPLAY PRODUCT SIZE
const sizeOptions = document.querySelectorAll('.size-option');

const selectedSize = document.getElementById('selectedSize');

sizeOptions.forEach(option => {
    option.addEventListener('click', function () {
        sizeOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        const selectedValue = this.querySelector('input[type="radio"]').value;
        selectedSize.textContent = `Selected Size: ${selectedValue}`;
        document.getElementById('size').value = selectedValue;
    });
});

//DISPLAY PRODUCT QUANTITY
document.getElementById('increase').addEventListener('click', function () {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
});

document.getElementById('decrease').addEventListener('click', function () {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

//SKIN TONE IN FORM
const skintoneOptions = document.querySelectorAll('.skintone-option');
const selectedSkintone = document.getElementById('selectedSkintone');

skintoneOptions.forEach(option => {
    option.addEventListener('click', function () {
        skintoneOptions.forEach(opt => {
            opt.classList.remove('active');
            opt.style.backgroundColor = '';
        });

        this.classList.add('active');

        const hoverColor = this.getAttribute('data-hover-color');
        this.style.backgroundColor = hoverColor;

        const selectedValue = this.querySelector('input[type="radio"]').value;

        selectedSkintone.textContent = `Selected Skin Tone: ${selectedValue}`;

        document.getElementById('skintone').value = selectedValue;
    });
});


const model = document.querySelector('.model');  // Model chứa form
const closeBtn = document.querySelector('.form_header i');  // Nút đóng
const submitBtn = document.querySelector('.submit_btn');  // Nút submit trong model
const genderRadios = document.getElementsByName('gender');// Lấy tất cả các radio button có name là "gender"
const skinToneRadios = document.querySelectorAll('input[name="skintone"]');// Lấy tất cả các radio button có name là "skintone"
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const recommend_btn = document.querySelector('.recommend-btn');
const form = document.querySelector('.form');
const information = document.querySelector('.information');

const factory = new ConcreteClothesFactory();

const suggestionImage = document.getElementById('suggestion-img');
const suggestionName = document.getElementById('suggestion-name');
const suggestionSize = document.getElementById('size-value');
const suggestionColor = document.getElementById('color-value');
const suggestionPattern = document.getElementById('pattern-value');
const suggestionLength = document.getElementById('length-value');
const suggestionWidth = document.getElementById('width-value');
const suggestionBust = document.getElementById('bust-value');
const suggestionWaist = document.getElementById('waist-value');
const suggestionHip = document.getElementById('hip-value');

recommend_btn.addEventListener('click', () => {
    model.classList.remove('hide');
    information.classList.add('hide');
    form.classList.remove('hide');
    form.classList.add('slideInTop');
    suggestionImage.src = image;
    suggestionName.textContent = title;
});

submitBtn.addEventListener('click', () => {
    suggestionColor.textContent = selectColor(getSelectedSkinTone());
    information.classList.remove('hide');
    form.classList.add("slideLeft");
    information.classList.add('slideInRight');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const product = factory.createProduct(category);
    const productSize = product.findSize(getSelectedGender(), height, weight);

    // Lấy kích thước dựa trên thông tin giới tính, chiều cao và cân nặng
    suggestionSize.textContent = productSize;
    const statResult = product.findStatistic(getSelectedGender(), productSize);

    if (statResult !== "Statistic not found" && statResult !== null) {
        suggestionLength.textContent = statResult.length;
        suggestionWidth.textContent = statResult.width;
        suggestionBust.textContent = statResult.bust;
        suggestionWaist.textContent = statResult.waist;
        suggestionHip.textContent = statResult.hip;
    }
});


// Đóng model khi nhấp vào nút đóng (X)
closeBtn.addEventListener('click', () => {
    if (information.classList.contains('slideInRight')) {
        form.classList.remove("slideLeft");
        form.classList.add('slideOutTop');
        information.classList.add('slideOutTop');

        // Lắng nghe khi animation kết thúc
        information.addEventListener('animationend', () => {
            model.classList.add('hide'); // Ẩn sau khi animation kết thúc
            reset();
        }, { once: true }); // Đảm bảo sự kiện chỉ chạy một lần
    }
    else {
        form.classList.add("slideOutTop");

        // Lắng nghe khi animation kết thúc
        form.addEventListener('animationend', () => {
            model.classList.add('hide'); // Ẩn sau khi animation kết thúc
            reset();
        }, { once: true }); // Đảm bảo sự kiện chỉ chạy một lần

    }


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


function reset() {

    //Reset chon gender
    genderRadios.forEach(radio => {
        radio.checked = false; // Bỏ chọn radio
    });

    //Reset chon skintone
    skinToneRadios.forEach(radio => {
        radio.checked = false; // Bỏ chọn radio
    });

    skintoneOptions.forEach(opt => {
        opt.classList.remove('active');
        opt.style.backgroundColor = '';
    });
    suggestionSize.textContent = "";
    suggestionColor.textContent = "";
    suggestionImage.src = "";
    suggestionName.textContent = "";
    weightInput.value = "";
    heightInput.value = "";
    suggestionLength.textContent = "";
    suggestionWidth.textContent = "";
    suggestionBust.textContent = "";
    suggestionWaist.textContent = "";
    suggestionHip.textContent = "";


    form.classList.remove('slideInTop');
    form.classList.remove('slideOutTop');

    information.classList.remove('slideInRight');
    information.classList.remove('slideOutTop');

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