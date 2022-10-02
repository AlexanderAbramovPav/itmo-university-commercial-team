// find the container where to insert slider-page
const sliderPageContainer = document.querySelector('.slider-page-container')

//when loading the window, insert cards into the container
window.addEventListener(
  'load',
  () => {
    paintSliderPage()
  },
  true
)

window.addEventListener(
  'resize',
  () => {
    paintSliderPage()
  },
  true
)

function paintSliderPage () {
  let n = 6
  // checking the screen width
  let windowWidth = window.screen.width
  if (windowWidth > 1260) {
    n = 6
  } else if (windowWidth <= 1260 && windowWidth > 707) {
    n = 4
  } else if (windowWidth <= 707) {
    n = 1
  }

  // deleting the first card on each page for redrawing anew when resizing - because it remained in any case
  while (sliderPageContainer.firstChild) {
    sliderPageContainer.firstChild.remove()
  }

  let sliderPage = null // unassigned value
  for (
    let cardPubIndex = 0;
    cardPubIndex < cardsPublications.length;
    cardPubIndex++
  ) {
    if (cardPubIndex % n === 0) {
      // writing the slider page returned by the function to a variable in order to further find a container for drawing cards inside it
      sliderPage = addSliderPage(sliderPageContainer)
    }
    // selection of each card by index from the total array of objects with the contents of the cards
    const cardPublications = cardsPublications[cardPubIndex]
    addCardsPublications(
      cardPublications,
      sliderPage.querySelector('.publications__container')
    )
  }
}

// functions of calling the social media tooltip
function openCloseTooltipSocial (tooltip) {
  tooltip.classList.toggle('tooltip-social_active')
}

function openTooltipSocial (tooltip) {
  tooltip.classList.add('tooltip-social_active')
}

function closeTooltipSocial (tooltip) {
  tooltip.classList.remove('tooltip-social_active')
}

//the function of creating a slider-page for each six cards
function createSliderPagePublications () {
  const sliderPageTemplate = document.querySelector('#slider-page-template')
    .content
  // the search and return function of the node (node) "card element" for cloning all the contents
  return sliderPageTemplate.querySelector('.slider__page').cloneNode(true)
}

// single page slider rendering function
function addSliderPage (sliderPageContainer) {
  const sliderPage = createSliderPagePublications()
  sliderPageContainer.append(sliderPage)
  // return the slide page itself so that content with cards can be inserted into it
  return sliderPage
}

function createCardsPublications (cardPblItem) {
  const cardPublicationsTemplate = document.querySelector(
    '#cards-publications-template'
  ).content
  // search for the node (node) "card element" for cloning all the contents
  const cardPublicationsElement = cardPublicationsTemplate
    .querySelector('.publications__item')
    .cloneNode(true)
  // find the "Read in full" tooltip inside a specific card
  const tooltipDetailsPublications = cardPublicationsElement.querySelector(
    '.tooltip-details'
  )
  // find the "Share" button inside the "Read in full" tooltip
  const iconShare = tooltipDetailsPublications.querySelector(
    '.tooltip-details__share-icon'
  )
  // find a tooltip with social networks inside the tooltip "Read in full"
  const tooltipSocialPublications = tooltipDetailsPublications.querySelector(
    '.tooltip-social'
  )
  // find the fields where to add the contents from the array
  cardPublicationsElement.querySelector('.publications__item-image').src =
    cardPblItem.image
  cardPublicationsElement.querySelector(
    '.publications__article-heading'
  ).textContent = cardPblItem.heading
  cardPublicationsElement.querySelector(
    '.publications__article-authors'
  ).textContent = cardPblItem.authors
  cardPublicationsElement.querySelector('.publications__article').textContent =
    cardPblItem.article
  cardPublicationsElement.querySelector('.publications__link-to-article').href =
    cardPblItem.link

  // event listener clicking on the "share" icon to open a tooltip with social networks and pick up the desired card from the stream
  // (so that the tooltip is on top of the other cards)
  iconShare.addEventListener('click', function () {
    let windowWidth = window.screen.width
    if (windowWidth <= 1260) {
      openCloseTooltipSocial(tooltipSocialPublications)
    } else {
      openTooltipSocial(tooltipSocialPublications)
    }
    cardPublicationsElement.classList.add('publications__item_tooltip-active')
  })
  cardPublicationsElement.addEventListener('mouseleave', function () {
    closeTooltipSocial(tooltipSocialPublications)
    cardPublicationsElement.classList.remove(
      'publications__item_tooltip-active'
    )
  })
  // return the finished card with all internal gadgets
  return cardPublicationsElement
}

// function for adding one card to the DOM
function addCardsPublications (cardsPublications, cardContainerPublications) {
  const cardElem = createCardsPublications(cardsPublications)
  cardContainerPublications.append(cardElem)
}
