// find the card element that contains the "Read in full" tooltip
const articleItems = document.querySelectorAll('.publications__item')

// the function of calling the tooltip "Read in full"
function openCloseTooltipPublications (tooltip) {
  tooltip.classList.toggle('tooltip-details_active')
}

// social media tooltip call function
function openCloseTooltipSocial (tooltip) {
  tooltip.classList.toggle('tooltip-social_active')
}

window.addEventListener('load', initTooltipDetails, true)

// the function of iterating through the array of found cards to open tooltips over each specific card
function initTooltipDetails () {
  for (
    let articleItemIndex = 0;
    articleItemIndex < articleItems.length;
    articleItemIndex++
  ) {
    // selecting a specific card by index in the array
    const articleItem = articleItems[articleItemIndex]
    // find the "Read in full" tooltip inside a specific card
    const tooltipDetailsPublications = articleItem.querySelector(
      '.tooltip-details'
    )
    // find the "Share" button inside the "Read more" tooltip
    const iconShare = tooltipDetailsPublications.querySelector(
      '.tooltip-details__share-icon'
    )
    // find a tooltip with social networks inside the "Read more" tooltip
    const tooltipSocialPublications = tooltipDetailsPublications.querySelector(
      '.tooltip-social'
    )
    articleItem.addEventListener('mouseover', () => {
      openCloseTooltipPublications(tooltipDetailsPublications)
    })
    articleItem.addEventListener('mouseout', () => {
      openCloseTooltipPublications(tooltipDetailsPublications)
    })
    // event listener clicking on the "share" icon to open a tooltip with social networks
    iconShare.addEventListener('click', () => {
      openCloseTooltipSocial(tooltipSocialPublications)
    })
  }
}
