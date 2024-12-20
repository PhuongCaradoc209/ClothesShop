const updateMenuForMobile = () => {
    const menu = document.querySelector('.header-menu');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        menu.innerHTML = `
            <button href="#" class="menu-icon">
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul class="dropdown">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        `;
        const menuButton = menu.querySelector('.menu-icon');
        const dropdown = menu.querySelector('.dropdown');
        menuButton.addEventListener('click', () => {
            dropdown.classList.toggle('show');
        });
    } else {
        menu.innerHTML = `
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        `;
    }
}

// Gọi hàm khi tải trang và khi thay đổi kích thước màn hình
window.addEventListener('resize', updateMenuForMobile);
window.addEventListener('load', updateMenuForMobile);
