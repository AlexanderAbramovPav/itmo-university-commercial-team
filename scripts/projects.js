// Selectors dropdown
const projects = document.querySelector('.projects')
const projectDropdownContent = projects.querySelector(
  '.projects__dropdown-content'
)
const projectDropdownButton = projects.querySelector(
  '.projects__menu-dropdown-button'
)

projectDropdownButton.addEventListener('click', handleProjectsSwitchDropdown)

// The function of opening/closing the dropdown menu.
function handleProjectsSwitchDropdown () {
  projectDropdownContent.classList.toggle('projects__dropdown-content_opened')
  reverseProjectsArrow()
}

// The function of turning the arrow dropdown menu
function reverseProjectsArrow () {
  if (projectDropdownButton.style.transform === 'rotate(180deg)') {
    projectDropdownButton.style.transform = 'rotate(0deg)'
  } else {
    projectDropdownButton.style.transform = 'rotate(180deg)'
  }
}

// Menu selectors
const projectsMenu = document.querySelector('.projects__menu')
const projectsMenuElements = projectsMenu.querySelectorAll(
  '.projects__menu-item'
)
const projectsDropdownMenuElements = projectDropdownContent.querySelectorAll(
  '.projects__dropdown-menu-item'
)

projectsMenuElements.forEach(element => {
  element.addEventListener('click', handleHighlightProjectsMenu)
})

projectsDropdownMenuElements.forEach(element => {
  element.addEventListener('click', handleHighlightProjectsMenu)
})

let typeOfCard = ''

// Menu item highlight function
function handleHighlightProjectsMenu (event) {
  event.preventDefault()

  if (event.currentTarget.classList.contains('projects__menu-item')) {
    projectsMenuElements.forEach(element => {
      if (element.classList.item(1)) {
        element.classList.remove('projects__menu-item_active')
      }
    })
    event.currentTarget.classList.add('projects__menu-item_active')
  } else if (
    event.currentTarget.classList.contains('projects__dropdown-menu-item')
  ) {
    handleProjectsSwitchDropdown()
    projectsMenuElements
      .item(0)
      .querySelector('.projects__menu-item-link').textContent =
      event.currentTarget.textContent
  }

  typeOfCard = getTypeCards(event.target.textContent)
  currentPage = 1
  renderInitialProjectsCards()
  updateCurrentPage()
}

function getTypeCards (type) {
  cardTypes = {
    'State projects': 'governance',
    'Special programs': 'special',
    'In development': 'development'
  }

  return cardTypes[type]
}

// Selectors of pagination elements
const paginatePrevious = document.querySelector(
  '.projects__pagination-left-arrow'
)
const paginateNext = document.querySelector('.projects__pagination-right-arrow')

const paginateCurrentPage = document.querySelector(
  '.projects__pagination-link_active'
)
const paginateLastPage = document.querySelector(
  '.projects__pagination-last-page'
)

// Project container
const projectContainer = document.querySelector('.projects__container')

// Test card data
const projectsCard = {
  logo: './images/partnership-logos/gazprom-logo.svg',
  description:
    "The direction includes research and development of MO and CT technologies. Modules for implementation in the Master's degree subject network programs with elements of MO and CT, or DPO programs.",
  link: '#'
}

const CARDS = []

for (let i = 0; i < 120; i++) {
  let copy = Object.assign({}, projectsCard)
  copy.test_span = i
  CARDS.push(copy)
}

for (let i = 0; i < 10; i++) {
  let copy = Object.assign({}, projectsCard)
  copy.test_span = i
  copy.type = 'special'
  CARDS.push(copy)
}

for (let i = 0; i < 10; i++) {
  let copy = Object.assign({}, projectsCard)
  copy.test_span = i
  copy.type = 'development'
  CARDS.push(copy)
}

for (let i = 0; i < 10; i++) {
  let copy = Object.assign({}, projectsCard)
  copy.test_span = i
  copy.type = 'goverment'
  CARDS.push(copy)
}

// The function of adding cards to the page
function renderProjectsCards (cards) {
  // deleting old cards
  let oldCards = projectContainer.querySelectorAll('.projects__item')
  oldCards.forEach(element => {
    element.remove()
  })

  // Adding new cards
  cards.forEach(element => {
    projectContainer.append(element)
  })
}

// Pagination
paginateNext.addEventListener('click', handlePaginateNextPage)
paginatePrevious.addEventListener('click', handlePaginatePreviousPage)

function handlePaginateNextPage (event) {
  event.preventDefault()
  currentPage += 1
  let totalPages = getTotalPages()
  if (currentPage >= totalPages) {
    currentPage = totalPages
  }

  paginateProjectsCards(currentPage)
}

function GetCardsByType () {
  return CARDS.filter(element => {
    return element.type === typeOfCard
  })
}

function handlePaginatePreviousPage (event) {
  event.preventDefault()
  currentPage -= 1
  if (currentPage <= 0) {
    currentPage = 1
  }
  paginateProjectsCards(currentPage)
}

// The function of getting the number of cards on the page, according to the width of the screen
function getCardsPerPage () {
  let screenWidth = window.innerWidth
  let cardsPerPage = 0

  if (screenWidth > 1060) {
    cardsPerPage = 4
  } else if (screenWidth <= 1060 && screenWidth > 620) {
    cardsPerPage = 3
  } else if (screenWidth <= 620) {
    cardsPerPage = 2
  }

  return cardsPerPage
}

let currentPage = 1

function updateTotalPages () {
  paginateLastPage.textContent = getTotalPages()
}

function updateCurrentPage () {
  paginateCurrentPage.textContent = currentPage
}

function paginateProjectsCards (currentPage) {
  let cardsPerPage = getCardsPerPage()

  // getting card indexes
  let startIndex = (currentPage - 1) * cardsPerPage
  let endIndex = startIndex + cardsPerPage

  // receiving cards
  let cardsToRender = getCards(startIndex, endIndex)

  renderProjectsCards(cardsToRender)
  updateCurrentPage()
}

// Function for receiving card elements
function getCards (startIndex, endIndex) {
  let cardsData

  if (typeOfCard) {
    cardsData = GetCardsByType().slice(startIndex, endIndex)
  } else {
    cardsData = CARDS.slice(startIndex, endIndex)
  }

  let cardsDocumentElements = []

  cardsData.forEach(cardData => {
    cardsDocumentElements.push(createProjectsCard(cardData))
  })

  return cardsDocumentElements
}

// Card element creation function
function createProjectsCard (cardData) {
  const projectsCardTemplate = document.querySelector('#projects__item').content
  let cardElement = projectsCardTemplate
    .querySelector('.projects__item')
    .cloneNode(true)

  cardElement.querySelector('.projects__item-about').textContent =
    cardData.description
  cardElement.querySelector('.projects__item-details').href = cardData.link

  return cardElement
}

function getTotalPages () {
  let totalPages
  if (typeOfCard) {
    totalPages = Math.ceil(GetCardsByType().length / getCardsPerPage())
  } else {
    totalPages = Math.ceil(CARDS.length / getCardsPerPage())
  }
  return totalPages
}

// Function for creating initial
function renderInitialProjectsCards () {
  let cardsPerPage = getCardsPerPage()
  let cards = getCards(0, cardsPerPage)
  renderProjectsCards(cards)
  updateTotalPages()
}
renderInitialProjectsCards()
window.addEventListener('resize', renderInitialProjectsCards)
