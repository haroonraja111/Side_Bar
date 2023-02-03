let navtoggle = document.querySelector(".nav-toggle");
let sideBar = document.querySelector(".side-bar");

navtoggle.addEventListener("click", function () {
    if (navtoggle.firstElementChild.classList.contains("fa-bars")) {

        navtoggle.firstElementChild.classList.replace("fa-bars", "fa-times");      

    } else {
        navtoggle.firstElementChild.classList.replace("fa-times","fa-bars");
    }
  sideBar.classList.toggle('show_sidebar')
});
