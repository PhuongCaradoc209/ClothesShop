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