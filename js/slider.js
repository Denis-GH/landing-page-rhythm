const swiper = new Swiper(".swiper-reviews", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

function adaptSlideHeight() {
  const wrapper = document.querySelector(".swiper-wrapper")
  const activeSlide = document.querySelector(".swiper-slide-active")

  wrapper.style.maxHeight = `${activeSlide.clientHeight}px`
}

swiper.on("slideChangeTransitionEnd", adaptSlideHeight)

const texts = document.querySelectorAll(".slide-swiper-reviews__text")

texts.forEach((item) => {
  const styles = window.getComputedStyle(item)
  const lineHeight = parseFloat(styles.lineHeight)
  item.style.maxHeight = `${lineHeight * 4}px`

  if (Math.round(item.scrollHeight / lineHeight) > 4) {
    const button = item.querySelector(".slide-swiper-reviews__expand-btn")
    button.style.display = "block"
    button.addEventListener("click", () => {
      if (item.style.maxHeight == `${lineHeight * 4}px`) {
        item.style.maxHeight = `${item.scrollHeight}px`
        button.textContent = "Less"
      } else {
        item.style.maxHeight = `${lineHeight * 4}px`
        button.textContent = "More"
      }
      adaptSlideHeight()
    })
  }
})
