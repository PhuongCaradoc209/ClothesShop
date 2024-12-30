const updateMenuForMobile = () => {
    const menu = document.querySelector('.header-menu');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        menu.innerHTML = `
            <button href="#" class="menu-icon">
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul class="dropdown">
                <li><a href="/html/homePage.html">Home</a></li>
                <li><a href="/html/shopPage.html">Shop</a></li>
                <li><a href="/html/aboutUs.html">About Us</a></li>
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
                <li><a href="/html/homePage.html">Home</a></li>
                <li><a href="/html/shopPage.html">Shop</a></li>
                <li><a href="/html/aboutUs.html">About Us</a></li>
            </ul>
        `;
    }
}

window.addEventListener('resize', updateMenuForMobile);
window.addEventListener('load', updateMenuForMobile);
