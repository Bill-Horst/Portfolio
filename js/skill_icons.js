let skills = [
  {
    techName: 'HTML5',
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 8, 1))
  },
  {
    techName: 'CSS',
    imageUrl: './img/skill_icons/css3.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 8, 1))
  },
  {
    techName: 'JavaScript',
    imageUrl: './img/skill_icons/js.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 8, 1))
  },
  {
    techName: 'Angular 5',
    imageUrl: './img/skill_icons/angular5.png',
    experienceDuration: calculateExperienceDuration(new Date(2018, 1, 1))
  },
  {
    techName: 'SVN',
    imageUrl: './img/skill_icons/svn.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  },
  {
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 1, 1))
  }

];

function calculateExperienceDuration(startDate) {
  return ((new Date() - startDate)/31540000000).toFixed(1) + ' years';
}
