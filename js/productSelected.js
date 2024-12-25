

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

    findTotal  = 0;

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

//BACK BUTTON
document.getElementById('backButton').addEventListener('click', function() {
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
    option.addEventListener('click', function() {
        sizeOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        const selectedValue = this.querySelector('input[type="radio"]').value;
        selectedSize.textContent = `Selected Size: ${selectedValue}`;
        document.getElementById('size').value = selectedValue;
    });
});

//DISPLAY PRODUCT QUANTITY
document.getElementById('increase').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
});

document.getElementById('decrease').addEventListener('click', function() {
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
    option.addEventListener('click', function() {
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

recommend_btn.addEventListener('click' , () => {
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
    if(information.classList.contains('slideInRight')){
        form.classList.remove("slideLeft");
        form.classList.add('slideOutTop');
        information.classList.add('slideOutTop');

     // Lắng nghe khi animation kết thúc
        information.addEventListener('animationend', () => {
            model.classList.add('hide'); // Ẩn sau khi animation kết thúc
            reset();
            }, { once: true }); // Đảm bảo sự kiện chỉ chạy một lần
    }
    else{
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


function reset(){
    
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
    suggestionImage.src ="";
    suggestionName.textContent = "";
    weightInput.value ="";
    heightInput.value ="";
    suggestionLength.textContent = "";
    suggestionWidth.textContent =  "";
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