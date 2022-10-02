const feedbackForm = document.querySelector('.feedback__form')
const feedbackFirstName = feedbackForm.querySelector('.feedback__first-name')
const feedbackLastName = feedbackForm.querySelector('.feedback__last-name')
const feedbackNumber = feedbackForm.querySelector('.feedback__number')
const feedbackEmail = feedbackForm.querySelector('.feedback__email')
const feedbackMessage = feedbackForm.querySelector('.feedback__message')


function handleFeedbackSubmit(event) {
  event.preventDefault();
  let feedbackFormData = {
    firstName: feedbackFirstName.value,
    lastName: feedbackLastName.value,
    number: feedbackNumber.value,
    email: feedbackEmail.value,
    message: feedbackMessage.value
  }

  feedbackForm.reset()
  sendFeedbackEmail(feedbackFormData)
}

feedbackForm.addEventListener("submit", handleFeedbackSubmit)

function sendFeedbackEmail(data) {
  console.log("Feedback object: ", data)
}
