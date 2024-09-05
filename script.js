const menuBar = document.querySelector("#menuBar")
const navList = document.querySelector(".nav_links")
const menuBtnIcon = menuBar.querySelector("i")

menuBar.addEventListener("click", (e) => {
    navList.classList.toggle("open");

    const isOpen = navList.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line" )
})
 
navList.addEventListener("click", (e) => {
    navList.classList.remove("open");

    menuBtnIcon.setAttribute("class", "ri-menu-line" );
})

const firstScroll = {
    distance: "5em",
    origin: "right",
    duration: 3500
    
}
ScrollReveal().reveal(".header_image_card", {
    ...firstScroll,
    origin: "left",
})

const secondScroll = {
    distance: "5em",
    origin: "top",
    duration: 3500
    
}
ScrollReveal().reveal(".appointment", {
    ...secondScroll,
    origin: "bottom",
})

const thirdScroll = {
    distance: "5em",
    origin: "right",
    duration: 3500
    
}
ScrollReveal().reveal(".header-content", {
    ...thirdScroll,
    origin: "left",
})

const fourthScroll = {
    distance: "5em",
    origin: "left",
    duration: 3500
    
}
ScrollReveal().reveal(".header_image_img, .user-sec", {
    ...fourthScroll,
    origin: "right",
})