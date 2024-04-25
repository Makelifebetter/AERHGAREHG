document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle'); // 或 '#nav__toggle'，取决于你的 HTML 设置
    const menu = document.querySelector('.nav__menu')
    const closeMenu = document.querySelector('.close')
    navToggle.addEventListener('click', ()=> {
        console.log(navToggle);
        console.log(menu);
        menu.classList.add('show-menu')
        navToggle.classList.add('hide')
    })
    closeMenu.addEventListener('click', ()=> {
        menu.classList.remove('show-menu')
        navToggle.classList.remove('hide')
    })
    // window.addEventListener('resize', function() {
    //     if (window.innerWidth >= 768) {
    //         document.querySelector('.navbar').style.right = '0'; // 確保 Navbar 在寬度大於 768px 時可見
    //     } else {
    //         document.querySelector('.navbar').style.right = '-100%'; // 可根據實際情況適當調整
    //     }
    // });
  });