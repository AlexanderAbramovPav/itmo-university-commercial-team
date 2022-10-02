const teamCardTemplate = document.getElementById('team__card-template')
const teamDotTemplate = document.getElementById('team__dot-template')
const teamCards = document.querySelector('.team__cards')
const teamDotsContainer = document.querySelector('.team__dots')
const teamRollToRightButton = document.querySelector('.team__roll-to-right')
const teamRollToLeftButton = document.querySelector('.team__roll-to-left')
const teamCardsMassive = [
  {
    surname: 'Bobtsov',
    name: 'Alexey Alekseevich',
    post: 'Director, Professor, DTN',
    shortPost: 'Director, DTN',
    photo: './images/team/manPhoto.png'
  },
  {
    surname: 'Bukhanovsky',
    name: 'Alexander Valerievich',
    post: 'Director, Manager, DTN',
    shortPost: 'Director, DTN',
    photo: './images/team/manPhoto1.png'
  },
  {
    surname: 'Muromtsev',
    name: 'Dmitry Ilyich',
    post: 'Head, Associate Professor, DTN',
    shortPost: 'Head, DTN',
    photo: './images/team/manPhoto2.png'
  },
  {
    surname: 'Matveev',
    name: 'Yuri Nikolaevich',
    post: 'Supervisor, Professor, DTN',
    shortPost: 'Head, DTN',
    photo: './images/team/manPhoto3.png'
  },
  {
    surname: 'Shalyto',
    name: 'Anatoly Abramovich',
    post: 'Professor, DTN',
    shortPost: 'Professor, DTN',
    photo: './images/team/manPhoto4.png'
  },
  {
    surname: 'Kolobin',
    name: 'Sergey Alekseevich',
    post: 'Boss, Professor, DTN',
    shortPost: 'Chief, DTN',
    photo: './images/team/manPhoto5.png'
  },
  {
    surname: 'Pyrkin',
    name: 'Anton Alexandrovich',
    post: 'Dean, Professor, DTN',
    shortPost: 'Dean, DTN',
    photo: './images/team/manPhoto6.png'
  }
]

function createTeamCard (photo, name, surname, post, shortPost) {
  clone = teamCardTemplate.content.cloneNode(true)
  clone.querySelector('.team__card-name').textContent = name
  clone.querySelector('.team__card-surname').textContent = surname
  clone.querySelector('.team__card-post').textContent = post
  clone.querySelector('.team__card-shortPost').textContent = shortPost
  clone.querySelector('.team__card-photo').src = photo
  clone.querySelector('.team__card-photo').alt = surname + name
}

function createTeamDot () {
  clone = teamDotTemplate.content.cloneNode(true)
}

function addTeamDot () {
  createTeamDot()
  teamDotsContainer.append(clone)
}

function addTeamCard (photo, name, surname, post, shortPost) {
  createTeamCard(photo, name, surname, post, shortPost)
  teamCards.append(clone)
}

for (let i = 0; i < teamCardsMassive.length; i++) {
  addTeamCard(
    teamCardsMassive[i].photo,
    teamCardsMassive[i].name,
    teamCardsMassive[i].surname,
    teamCardsMassive[i].post,
    teamCardsMassive[i].shortPost
  )
}
teamCardTemplate.remove()

$('.team__cards').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  dots: true,
  appendDots: '.team__dots',
  appendArrows: '.team',
  dotsClass: 'slick-dots__team',
  prevArrow: '.team__roll-to-left',
  nextArrow: '.team__roll-to-right',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})
