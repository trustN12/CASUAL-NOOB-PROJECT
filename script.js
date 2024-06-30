/***** sidebar navigation */

const sidebarNavigationEl = document.getElementById("sidebar-show-navigation")

const sidebarOpenNavigationEl = document.getElementById("all-navbar")

console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click"(),=>{
    sidebarNavigationEl.classList.toggle("sidebar-show-navigation")
});