// Find slider and button inside
const sliderPublications = document.querySelector('.slider')
let slidesPublications = []
const buttonPublicationsLeft = sliderPublications.querySelector('#left-arrow')
const buttonPublicationsRight = sliderPublications.querySelector('#right-arrow')
let dotsPublications = []
const dotsContainerPublications = sliderPublications.querySelector(
  '.slider__dots-container'
)

/* Default slider index */
let slidePublicationsIndex = 0

window.addEventListener(
  'load',
  () => {
    setSlides()
    addDots()
    setDots()
    buttonPublicationsRight.addEventListener('click', plusSlide)
    buttonPublicationsLeft.addEventListener('click', minusSlide)

    showSlides(slidePublicationsIndex)
  },
  true
)

window.addEventListener(
  'resize',
  () => {
    setSlides()
    addDots()
    setDots()
    if (slidePublicationsIndex > slidesPublications.length) {
      slidePublicationsIndex = 0
    }
    showSlides(slidePublicationsIndex)
  },
  true
)

function setSlides () {
  slidesPublications = sliderPublications.querySelectorAll('.slider__page')
}

function addDots () {
  dotsContainerPublications.innerHTML = ''

  const dotsTemplate = sliderPublications.querySelector('#dots-template')
    .content
  for (let dotsIndex = 0; dotsIndex < slidesPublications.length; dotsIndex++) {
    const dot = dotsTemplate.querySelector('.slider__dots').cloneNode(true)
    if (dotsIndex === 0) {
      dot.classList.add('slider__dots_active')
    }
    dotsContainerPublications.append(dot)
    dot.addEventListener('click', () => {
      currentSlide(dotsIndex)
    })
  }
}

function setDots () {
  dotsPublications = dotsContainerPublications.querySelectorAll('.slider__dots')
}

/* The function increases the index by 1, shows the next slide*/
function plusSlide () {
  showSlides((slidePublicationsIndex += 1))
}

/* The function reduces the index by 1, shows the previous slide*/
function minusSlide () {
  showSlides((slidePublicationsIndex -= 1))
}

/* Sets the current slide */
function currentSlide (n) {
  showSlides((slidePublicationsIndex = n))
}

/* The main function of the slider */
function showSlides (n) {
  let i
  if (n >= slidesPublications.length) {
    slidePublicationsIndex = 0
  }
  if (n < 0) {
    slidePublicationsIndex = slidesPublications.length - 1
  }
  for (i = 0; i < slidesPublications.length; i++) {
    slidesPublications[i].classList.add('slider__page_hidden')
  }
  for (i = 0; i < dotsPublications.length; i++) {
    dotsPublications[i].classList.remove('slider__dots_active')
  }
  slidesPublications[slidePublicationsIndex].classList.remove(
    'slider__page_hidden'
  )
  if (dotsPublications.length > 0) {
    dotsPublications[slidePublicationsIndex].classList.add(
      'slider__dots_active'
    )
  }
}

/*Adding a swipe reaction*/
window.addEventListener(
  'load',
  function () {
    let touchsurface = document.getElementById('slider-publications')
    let startX
    let startY
    let dist
    let threshold = 150 // minimum distance for swipe
    function rollRight () {
      if (slidePublicationsIndex == slidesPublications.length - 1) {
        slidesPublications[slidePublicationsIndex].classList.add(
          'slider__page_hidden'
        )
        slidesPublications[0].classList.remove('slider__page_hidden')
        dotsPublications[slidePublicationsIndex].classList.remove(
          'slider__dots_active'
        )
        dotsPublications[0].classList.add('slider__dots_active')
        slidePublicationsIndex = 0
      } else {
        slidesPublications[slidePublicationsIndex].classList.add(
          'slider__page_hidden'
        )
        slidesPublications[slidePublicationsIndex + 1].classList.remove(
          'slider__page_hidden'
        )
        dotsPublications[slidePublicationsIndex].classList.remove(
          'slider__dots_active'
        )
        dotsPublications[slidePublicationsIndex + 1].classList.add(
          'slider__dots_active'
        )
        slidePublicationsIndex++
      }
    }
    function rollLeft () {
      if (slidePublicationsIndex == 0) {
        slidesPublications[0].classList.add('slider__page_hidden')
        slidesPublications[slidesPublications.length - 1].classList.remove(
          'slider__page_hidden'
        )
        dotsPublications[slidePublicationsIndex].classList.remove(
          'slider__dots_active'
        )
        dotsPublications[slidesPublications.length - 1].classList.add(
          'slider__dots_active'
        )
        slidePublicationsIndex = slidesPublications.length - 1
      } else {
        slidesPublications[slidePublicationsIndex].classList.add(
          'slider__page_hidden'
        )
        slidesPublications[slidePublicationsIndex - 1].classList.remove(
          'slider__page_hidden'
        )
        dotsPublications[slidePublicationsIndex].classList.remove(
          'slider__dots_active'
        )
        dotsPublications[slidePublicationsIndex - 1].classList.add(
          'slider__dots_active'
        )
        slidePublicationsIndex--
      }
    }
    function handleswipe (isrightswipe) {
      if (isrightswipe > 150) {
        rollLeft()
      } else if (isrightswipe < -150) {
        rollRight()
      }
    }

    touchsurface.addEventListener(
      'touchstart',
      function (e) {
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
      },
      false
    )

    touchsurface.addEventListener('touchmove', function (e) {}, false)

    touchsurface.addEventListener(
      'touchend',
      function (e) {
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX
        handleswipe(dist)
      },
      false
    )
  },
  false
)
