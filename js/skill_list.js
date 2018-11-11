// experience duration: first argument is date started, second argument is date ended
let skills = [
  {
    techName: 'JavaScript',
    imageUrl: './img/skill_icons/js.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 8, 1), new Date())
  },
  {
    techName: 'HTML5',
    imageUrl: './img/skill_icons/html5.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 8, 1), new Date())
  },
  {
    techName: 'CSS',
    imageUrl: './img/skill_icons/css3.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 8, 1), new Date())
  },
  {
    techName: 'AngularJS',
    imageUrl: './img/skill_icons/angularjs.png',
    experienceDuration: calculateExperienceDuration(new Date(2016, 7, 1), new Date(2018, 1, 1))
  },
  {
    techName: 'Angular 5',
    imageUrl: './img/skill_icons/angular5.png',
    experienceDuration: calculateExperienceDuration(new Date(2018, 1, 1), new Date(2018, 7, 1))
  },
  {
    techName: 'Bootstrap',
    imageUrl: './img/skill_icons/bootstrap.png',
    experienceDuration: calculateExperienceDuration(new Date(2014, 10, 1), new Date())
  },
  {
    techName: 'SASS',
    imageUrl: './img/skill_icons/sass.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 3, 1), new Date())
  },
  {
    techName: 'Ruby',
    imageUrl: './img/skill_icons/ruby.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 9, 1), new Date())
  },
  {
    techName: 'Ruby on Rails',
    imageUrl: './img/skill_icons/rails.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 9, 1), new Date())
  },
  {
    techName: 'Java',
    imageUrl: './img/skill_icons/java.png',
    experienceDuration: calculateExperienceDuration(new Date(2015, 5, 1), new Date())
  },
  {
    techName: 'AWS',
    imageUrl: './img/skill_icons/aws.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 0, 1), new Date())
  },
  {
    techName: 'Git',
    imageUrl: './img/skill_icons/git.png',
    experienceDuration: calculateExperienceDuration(new Date(2015, 5, 1), new Date())
  },
  {
    techName: 'SVN',
    imageUrl: './img/skill_icons/svn.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 1, 1), new Date())
  },
  {
    techName: 'JUnit',
    imageUrl: './img/skill_icons/junit.png',
    experienceDuration: calculateExperienceDuration(new Date(2015, 7, 1), new Date())
  },
  {
    techName: 'RSpec',
    imageUrl: './img/skill_icons/rspec.png',
    experienceDuration: calculateExperienceDuration(new Date(2017, 9, 1), new Date())
  }
];

function calculateExperienceDuration(startDate, endDate) {
  return ((endDate - startDate)/31540000000).toFixed(1) + ' years';
}
