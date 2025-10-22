document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow .slide")
  const nextBtn = document.querySelector(".next-btn")
  const prevbtn = document.querySelector(".prev-btn")

  let currentSlide = 0
  let total = slides.length

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active")
      slides[index].classList.add("active")
      currentSlide = index
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % total
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + total) % total
    showSlide(currentSlide)
  }

  nextBtn.addEventListener("click", nextSlide)
  prevbtn.addEventListener("click", prevSlide)

  //toggle play pause btn
  const pauseplayBtn = document.querySelector(".pause-play-btn")
  const pause = document.querySelector(".pause-icon")
  const play = document.querySelector(".play-icon")

  pauseplayBtn.addEventListener("click", () => {
    pause.classList.toggle("state")
    play.classList.toggle("state")
  })

  let slideInterval
  let isPaused = false

  //play slides
  function startSlide() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  startSlide()

  //pause slides
  function pauseSlide() {
    clearInterval(slideInterval)
  }

  function pausePlay() {
    if (isPaused) {
      startSlide()
    } else {
      pauseSlide()
    }
    isPaused = !isPaused
  }
  pauseplayBtn.addEventListener("click", pausePlay)

  showSlide(currentSlide)
})

//scale effect on window resize
document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector(".slideshow")
  const slides = document.querySelectorAll(".slide")

  let currentWindowWidth = window.innerWidth
  function animateScale() {
    const newWindowWidth = window.innerWidth
    if (newWindowWidth > currentWindowWidth) {
      slideshow.classList.add("zoom-in")
      slideshow.classList.remove("zoom-out")
    } else if (newWindowWidth < currentWindowWidth) {
      slideshow.classList.add("zoom-out")
      slideshow.classList.remove("zoom-in")
    } else {
      return
    }
    currentWindowWidth = newWindowWidth
  }

  //zoom page on resize
  let scaleFactor

  function setScaleFactor() {
    if (!slideshow || !slides) return
    const slideshowWidth = slideshow.offsetWidth
    const slideshowHeight = slideshow.offsetHeight
    const baseWidth = slides.naturalWidth || slides.offsetWidth
    const baseHeight = slides.naturalHeight || slides.offsetHeight
    if (baseWidth === 0 || baseHeight === 0) return
    const scaleX = slideshowWidth / baseWidth
    const scaleY = slideshowHeight / baseHeight
    const scaleFactor = Math.min(scaleX, scaleY)
    return scaleFactor
  }

  function applyScale(slideshow) {
    if (slideshow && scaleFactor !== undefined) {
      slideshow.style.transform = `scale(${scaleFactor})`
    }
  }

  setScaleFactor()
  applyScale("slideshow")

  function runTimeout() {
    slideshow.classList.add("animate-in")
    setTimeout(() => {
      applyScale("slideshow")
    }, 1000)
  }

  window.addEventListener("load", () => {
    animateScale()
    runTimeout()
    setScaleFactor()
    applyScale()
  })

  window.addEventListener("resize", () => {
    animateScale()
    runTimeout()
    setScaleFactor()
    applyScale("slideshow")
  })
})
