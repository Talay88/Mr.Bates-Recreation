// nav menu toggle
const btn = document.querySelector(".menu-btn")
const nav = document.querySelector(".overlay")
let navbar = document.querySelector(".nav-bar")

btn.addEventListener("click", (_) => {
  btn.classList.toggle("open")
  nav.classList.toggle("open")
})

// nav scrollbar background
window.addEventListener("scroll", (_) => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled")
    navbar.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
    navbar.classList.remove("scrolled")
  }
})
