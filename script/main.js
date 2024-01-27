"use strict";
//nav section
const navbar = document.querySelector(".navbar");
const navItemsMenu = document.querySelector("#menu");
const closeNavBtn = document.querySelector("#close-nav");
const navbarItems = document.querySelector('#navbar-items');
const main = document.querySelector("main");
//

const pageSections = document.querySelectorAll(".page-section");

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

window.addEventListener("DOMContentLoaded",()=>{
    if(navbarItems.classList.contains("visible")
    && window.innerWidth <=600) {
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

// this is the sticky or non sticky navbar
const navStickyCallback = function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting) {
        navbar.classList.add("nav-sticky");
    }else {
        navbar.classList.remove("nav-sticky");
    }
} 

const navIntersectionObserver = new IntersectionObserver(navStickyCallback,{
    root: null,
    threshold:0,
})

navIntersectionObserver.observe(main);

//end of navbar functionality
//will refactor the code as soon as possible

//section load

// pageSections.forEach(val=>val.classList.add("hidden"))
pageSections.forEach(val=>val.classList.add("section-hidden"));

let options = {
    root: null,
    rootMargin: "20px",
    threshold: .2,
  };

let callback = (entries, observer) => {
const entry = entries[0];

entry.target.classList.remove("section-hidden");
entry.target.classList.add("section-visible__animation");
};
  
  let observer = new IntersectionObserver(callback, options);

  pageSections.forEach(val=>
    observer.observe(val));



// //put loading attri for every image 
// in every section of the page

const lazyLoadingImages = document.querySelectorAll("img[data-slowload='image']");




