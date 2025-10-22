// Modal functionality
const popupBx = document.querySelector(".popup-container")
const popup = document.querySelector(".popup")
const popupBtn = document.querySelector(".popup-btn")

document.addEventListener("DOMContentLoaded", (event) => {
  popupBx.classList.add("ongoing")
  popup.classList.add("ongoing")
})

popupBtn.addEventListener("click", () => {
  popupBx.classList.remove("ongoing")
  popup.classList.remove("ongoing")
})

popupBx.addEventListener("click", (event) => {
  popupBx.classList.remove("ongoing")
  popup.classList.remove("ongoing")
})

//fade in elements when visible

document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".fade")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible")
        }, index * 100)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  fadeItems.forEach((element) => {
    observer.observe(element)
  })
})

//run locations resize on breakpoint 628
let isWideScreen = false
const mediaQuery = window.matchMedia("(max-width: 628px)")
const locations = document.querySelector(".locations")

if (locations) {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const target = entry.target
      if (isWideScreen) {
        target.classList.add("bounce")
      } else {
        target.classList.remove("bounce")
      }
    }
  })

  function handleMediaQuery(e) {
    isWideScreen = e.matches
    if (isWideScreen) {
      resizeObserver.observe(locations)
    } else {
      resizeObserver.unobserve(locations)
      locations.classList.remove("bounce")
    }
  }

  mediaQuery.addEventListener("change", handleMediaQuery)

  handleMediaQuery(mediaQuery)
}

//run popin on locations at 920 breakpoint

let currWideScreen = false
const myMediaQuery = window.matchMedia("(min-width: 928px)")
const locationElement = document.querySelector(".my-locations")

function handleMediaQuerys(e) {
  currWideScreen = e.matches
  if (locationElement) {
    if (currWideScreen) {
      locationElement.classList.add("slides-in")
    } else {
      locationElement.classList.remove("slides-in")
    }
  }
}

if (locationElement) {
  myMediaQuery.addEventListener("change", handleMediaQuerys)
  handleMediaQuerys(myMediaQuery)
}
