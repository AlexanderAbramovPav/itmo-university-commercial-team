const aboutCardTemplate = document.getElementById('about__card-template')
const aboutDotTemplate = document.getElementById('about__dot-template')
const aboutCards = document.querySelector('.about__cards')
const dotsContainer = document.querySelector('.about__dots')
const rollToRightButton = document.querySelector('.about__roll-to-right')
const rollToLeftButton = document.querySelector('.about__roll-to-left')
const burgerListOfItems = document.querySelectorAll('.header__mobile-menu-item')
const aboutHeaderDropDown = document.getElementById('educationDropDown')

let aboutAchualSecondCard = 0
let aboutAchualThirdCard = 0
let sliderRoundIndex = 0
const aboutCardsMassive = [
  {
    title:
      'INTRODUCTION TO MACHINE LEARNING: STUDENTS OF THE EURASIAN NATIONAL...',
    text: `ITMO University conducted a research internship
for a group of undergraduates from the L.N. Eurasian National University.
Gumilyov.Leading teachers
for ten days, they were told about the basics of machine learning.`,
    date: 'Monday, July 5, 2021'
  },
  {
    title:
      'THE AUTHORS OF THE ROBOT MUSICIAN ROBERT ROBOTETSKY ARE RECOGNIZED AS THE BEST NOVELISTS...',
    text: `ITMO team became the best at
the international final of RoboCup-2021. The success
of the guys was brought by Robert Robotetsky, a virtuoso robot
who performed the famous French romance "Under the Sky of Paris". Employees participated in the preparation of the team...`,
    date: 'Monday, July 5, 2021'
  },
  {
    title: 'RETURN TO PETROPAVLOVSK: HOW WAS ITMO GRADUATION. LIVE — 2021',
    text: `The ITMO team has done a lot to bring back
the format of this and last year's graduation. Because of
due to the epidemiological situation, the entertainment part has been canceled,
but the solemn part has been preserved. Graduates were able to receive
diplomas from the hands of deans and hear congratulations from the rector.`,
    date: 'Saturday, July 3, 2021'
  },
  {
    title:
      '"LEAVING THE DIGITAL" — OR HOW TO CONNECT DIGITAL, TECHNOLOGICAL AND BIOLOGICAL...',
    text: `Teachers of the Art & Science Center of the University
ITMO held an open workshop dedicated to the creation of works
combining biological and synthetic environments.
A series of classes is timed to coincide with the admission campaign for the Master's degree`,
    date: 'Friday, July 2, 2021'
  },
  {
    title:
      'ITMO LAUNCHES THE FIRST HONORARY MASTERS DEGREE — FOR APPLICANTS OF THE FACULTY OF...',
    text: `The peculiarity of the new format of the master's degree is that
students will be able to make a program of their studies,
choose only those courses that they are interested in, and most importantly — work on a technologically complex
project under the guidance of mentors from top IT companies.`,
    date: 'Friday, July 2, 2021'
  },
  {
    title:
      'WHEN YOU ARERE NOT DOING YOUR EDUCATION, YOU CAN COME TO A HUNDRED...',
    text: `Vladislav Tankov entered ITMO as a specialist
at JetBrains. At one of the hackathons in the framework of the program with
JetBrains he made a plugin for checking the literacy of texts in the IntelliJ IDEA development environment. After
completing his master's degree, Vladislav headed the development team.`,
    date: 'Friday, July 2, 2021'
  },
  {
    title: 'ITMO STUDENTS AND LETI GRADUATES HAVE DEVELOPED A MODULE FOR...',
    text: `The intelligent module for charging stations
allows you to charge the drives in electric cars and electric scooters
faster than when powered from the mains. The software of the module
provides protection in case of emergencies and
increases the efficiency of the entire charger.`,
    date: 'Thursday, July 1, 2021'
  },
  {
    title:
      'WHAT VACCINES EXIST, HOW THEY ARE TESTED, AND BY WHAT PRINCIPLES THEY ARE FOLLOWED...',
    text: `Coronavirus vaccination has become one of the main topics.
The whole world is watching the number of vaccinated. The vaccination campaign gives
a result — mortality is reduced, the number of hospitalizations. But
there are many myths around vaccination that cause skeptics to argue.`,
    date: 'Thursday, July 1, 2021'
  },
  {
    title:
      'ITMO UNIVERSITY LAUNCHES A NEW CORPORATE SPECIALIZATION IN MASTERS DEGREE...',
    text: `Napoleon IT will become a partner of the new direction.
The company's employees and ITMO teachers will train masters
who will be able to work in projects related to face recognition,
deepfake technologies, and the creation of object recognition applications.`,
    date: 'Wednesday, June 30, 2021'
  },
  {
    title:
      'ITMO STUDENT AND EMPLOYEE ANNA VOLOSHINA RECEIVED A BRONZE SPHINX...',
    text: `A solemn ceremony
of awarding the best graduates of St. Petersburg took place in the Peter and Paul Fortress. Among those who
received a commemorative statuette was Anna Voloshina, a graduate of the Faculty of Technological
Management and Innovation. `,
    date: 'Wednesday, June 30, 2021'
  }
]
let lastIndex = 2
let firstIndex = 0

function createCard (date, text, title) {
  clone = aboutCardTemplate.content.cloneNode(true)
  clone.querySelector('.about__card-date').textContent = date
  clone.querySelector('.about__card-title').textContent = title
  clone.querySelector('.about__card-text').textContent = text
}

function createDot () {
  clone = aboutDotTemplate.content.cloneNode(true)
}

function addDot () {
  createDot()
  dotsContainer.append(clone)
}

function addCard (date, text, title) {
  createCard(date, text, title)
  aboutCards.append(clone)
}

for (let i = 0; i < aboutCardsMassive.length; i++) {
  addCard(
    aboutCardsMassive[i].date,
    aboutCardsMassive[i].text,
    aboutCardsMassive[i].title
  )
}
aboutCardTemplate.remove()

$('.about__cards').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  dots: true,
  appendDots: '.about__dots',
  appendArrows: '.about__cards-container',
  dotsClass: 'slick-dots__team',
  prevArrow: '.about__roll-to-left',
  nextArrow: '.about__roll-to-right',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
if (window.innerWidth <= 1122) {
  rollToRightButton.style.display = ''
  rollToLeftButton.style.display = ''
}

$(window).resize(function () {
  if (window.innerWidth <= 1122) {
    rollToRightButton.style.display = ''
    rollToLeftButton.style.display = ''
  }
})

aboutHeaderDropDown.addEventListener('click', function () {
  document
    .querySelector('.header__educationdropdown-content')
    .classList.toggle('header__dropbtn_show')
  for (let i = 0; i < 7; i++) {
    if (i == 3) {
      burgerListOfItems[i].style.fontWeight =
        burgerListOfItems[i].style.fontWeight != 600 ? 600 : 400
      continue
    }
    burgerListOfItems[i].style.opacity =
      burgerListOfItems[i].style.opacity == 0.5 ? 1 : 0.5
  }
})
