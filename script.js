const nav_item = document.querySelectorAll('.nav-item');
const horizontal_bar = document.querySelector('.horizontal_bar');
const top_navigation_bar = document.querySelector('.top-navigation-bar');
const header_welcome = document.querySelector('.header-welcome');
const desktop_navigation_bar = document.querySelector('.desktop-nav-container');
const menuicon = document.querySelector('.menu-icon');
const main = document.querySelector('main');
function restoredefaults(){
    menuicon.classList.remove('active');
    header_welcome.classList.remove('active');
    top_navigation_bar.classList.remove('active');
    desktop_navigation_bar.classList.remove('active');
    horizontal_bar.classList.remove('active');
    for (let item = 0; item < nav_item_Array.length; item++) {
        nav_item_Array[item].classList.remove('active');
    }
}
function mobilemenu(){
    menuicon.classList.toggle("active");
    desktop_navigation_bar.classList.toggle('active');
    header_welcome.classList.toggle('active');
    top_navigation_bar.classList.toggle('active');
    horizontal_bar.classList.toggle('active');
    const  nav_item_Array = Array.from(nav_item);
    for( let item = 0; item < nav_item_Array.length; item++){
        nav_item_Array[item].classList.toggle('active');
    }
}
main.addEventListener('click', restoredefaults)
const nav_item_Array = Array.from(nav_item);
document.onclick = function (e) {
    if (e.target === top_navigation_bar) {
        restoredefaults()
    }
}
nav_item_Array.forEach((navmenu) =>{
    navmenu.addEventListener('click', restoredefaults)
    navmenu.addEventListener('keydown', function (e){
        if (e.keyCode === 9){
            restoredefaults()
        }
    })
})

menuicon.addEventListener('click', mobilemenu)
menuicon.addEventListener('keydown', function (e){
    if(e.keyCode === 9){
        mobilemenu()
    }
})