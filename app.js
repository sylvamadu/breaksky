//variables

const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", ()=>openMenu());

menuClose.addEventListener("click", ()=>closeMenu());

function openMenu(){
    menuClose.classList.add("open");
   
}

function closeMenu(){
    menuClose.classList.remove("open");
}