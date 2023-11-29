"use strict";

const navItemsMenu = document.querySelector("#menu");
const closeNavBtn = document.querySelector("#close-nav");
const navbarItems = document.querySelector('#navbar-items');

//navbar functionality
navItemsMenu.addEventListener("click",()=>{
    navbarItems.classList.remove("hidden");
    navbarItems.classList.add("visible");
    navItemsMenu.classList.remove("menu-visible");
    navItemsMenu.classList.add("menu-nonvisible");
    closeNavBtn.classList.remove("hidden");
    closeNavBtn.classList.add("show");
})

closeNavBtn.addEventListener("click",
()=>{
    closeNavBtn.classList.remove("show");
    closeNavBtn.classList.add("hidden");
    navItemsMenu.classList.remove("menu-nonvisible");
    navItemsMenu.classList.add("menu-visible");
    navbarItems.classList.remove("visible");
    navbarItems.classList.add("hidden");
})

window.addEventListener("load",()=>{
    if(navbarItems.classList.contains("visible")) {
        navbarItems.classList.remove("visible");
        navbarItems.classList.add("hidden");
    }
})

window.addEventListener("resize",(e)=>{
    if(e.target.innerWidth <= 600){
        
        if(navItemsMenu.classList.contains("menu-nonvisible")){
            navItemsMenu.classList.remove("menu-nonvisible");
            navItemsMenu.classList.add("menu-visible");
        }

        if(navbarItems.classList.contains("visible")) {
            navbarItems.classList.remove("visible");
            navbarItems.classList.add("hidden");
        }
        
       
    }else {
        navbarItems.classList.remove("hidden");
        navbarItems.classList.add("visible");

        if(closeNavBtn.classList.contains("show")){
            closeNavBtn.classList.remove("show");
            closeNavBtn.classList.add("hidden");
        }else if(navItemsMenu.classList.contains("menu-visible")){
            navItemsMenu.classList.remove("menu-visible");
            navItemsMenu.classList.add("menu-nonvisible");
        }
    }
})

//end of navbar functionality
//will refactor the code as soon as possible

//