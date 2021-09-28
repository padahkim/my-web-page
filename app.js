const header = document.querySelector("header");
const topNavHamburger = document.querySelector(".navbar-menu__btn");
const navMenu = document.querySelector(".navbar-menu__list");
const homeContainerStrings = document.querySelectorAll(".home-string");
const home = document.querySelector("body");

function toggleHamburgBtn(){
    navMenu.classList.toggle("active");
    homeContainerStrings.forEach(element => element.classList.toggle("hidden"))
}
/*function closeNavList(event){
    console.log(event.currentTarget);
}
*/
//navMenuLists.forEach(element => element.addEventListener("click",closeNavList))
/*
navMenu.addEventListener("click", function(e){
    console.log(e.target)
})
*/
function handleMenuList(e){
    e.currentTarget.classList.remove("active");
    homeContainerStrings.forEach(element => element.classList.toggle("hidden"))
}

topNavHamburger.addEventListener("click",toggleHamburgBtn);
navMenu.addEventListener("click",handleMenuList);
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#191414';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})