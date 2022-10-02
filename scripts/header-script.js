const header = document.querySelector('.header')
const headerMobileMenuIcon = document.querySelector('.header__mobile-menu')
const headerLogo = document.querySelector('.header__logo')
const headerMobileButton = document.querySelector('.header__mobile-menu-btn')
const headerMobileMenuContainer = document.querySelector(
  '.header__mobile-menu-container'
)

// Open the mobile menu.
const openMobileMenu = () => {
  headerMobileMenuIcon.classList.add('header__mobile-menu_active')
}

// Close the mobile menu.
const closeMobileMenu = () => {
  headerMobileMenuIcon.classList.remove('header__mobile-menu_active')
}

// Close the mobile menu by clicking outside the menu area.
const closeMobileMenuClickWindow = () => {
  if (headerMobileMenuIcon.classList.contains('header__mobile-menu_active')) {
    header.style.justifyContent = ''
    headerMobileButton.style.left = ''
    document.querySelector('.header__mobile-menu-checkbox').checked = false
    closeMobileMenu()
  }
}

headerMobileButton.addEventListener('click', function () {
  if (!headerMobileMenuIcon.classList.contains('header__mobile-menu_active')) {
    openMobileMenu()
    header.style.justifyContent = 'flex-start'
    headerMobileButton.style.left = '274px'
  } else {
    closeMobileMenu()
    header.style.justifyContent = ''
    headerMobileButton.style.left = ''
  }
})
