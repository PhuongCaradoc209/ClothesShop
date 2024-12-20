const model = document.querySelector('.model');  // Model chứa form
const closeBtn = document.querySelector('.form_header i');  // Nút đóng
const productCards = document.querySelectorAll('.card');  // Các thẻ sản phẩm
const submitBtn = document.querySelector('.submit_btn');  // Nút submit trong model

const suggestionImage = document.getElementById('suggestion-img');
const suggestionName = document.getElementById('suggestion-name');

// Mở model khi nhấp vào sản phẩm
productCards.forEach((card) => {
    card.addEventListener('click', () => {
        model.classList.remove('hide');  // Mở model khi nhấp vào sản phẩm

        // Cập nhật thông tin vào model (Nếu cần thiết, bạn có thể lấy dữ liệu từ sản phẩm)

        suggestionImage.src = card.querySelector('img').src;
        suggestionName.textContent = card.querySelector('.card-title').textContent;
        // Ví dụ, có thể hiển thị ảnh, tên sản phẩm vào form
    });
});

// Đóng model khi nhấp vào nút đóng (X)
closeBtn.addEventListener('click', () => {
    model.classList.add('hide');  // Ẩn model khi nhấp vào X
});