const MAIN = (function() {

  $(document).ready(function() {

    EFFECTS.parallax();
    EFFECTS.smoothScrolling();
    EFFECTS.stellar();
    const skills = SKILLS.getSkills();
    const works = WORKS.getWorks();

    // SKILL SECTION
    for(let i = 0; i < skills.length; i++) {
      let el = $('#skills-icons');
      if (i === 0) {
        el.append(`<div class='row skills-row'>`)
      }
      if (i % 6 === 0 && i !== 0) {
        el.append(`</div><div class='row skills-row>'`)
      }
      el.append(
        `
        <div class='skills-image-div col-md-2 col-xs-4' data-toggle='tooltip' data-placement='top' title='${skills[i].techName} - ${skills[i].experienceDuration}'>
        <img src='${skills[i].imageUrl}'></img>
        </div>
        `
      )
      if (i === skills.length) {
        el.append(`</div>`)
      }
    }

    // WORK SECTION
    for(let i = 0; i < works.length; i++) {
      $('#work').append(
        `
        <div class='row'>
        <div class='text-center'>
        <div class='panel'>
        <div class='panel-heading'>
        <h3 class='panel-title' data-toggle='tooltip' data-placement='right' title='${works[i].hoverDescription}'>${works[i].title}</h3>
        ${works[i].techUsed} -
        <a href=${works[i].githubLink} target='_blank' data-toggle='tooltip' data-placement='top' title='Checkout Github'>
        <i class='fa fa-github fa-lg tech-used-octocat-icon' aria-hidden='true'></i>
        </a>
        </div>
        </div>
        </div>
        </div>
        <a href=${works[i].href} target='_blank'>
        <div class='row portfolio-piece-picture'>
        <h1 class='site-invitation'>GO TO LIVE SITE</h1>
        <div class='col-md-6 no-extra'>
        <img class='img-responsive left-project-pic' src=${works[i].frontPageImage}>
        </div>
        <div class='col-md-6 no-extra'>
        <img class='img-responsive right-project-pic' src=${works[i].featureImage}>
        </div>
        </div>
        </a>
        <br />
        `
      );
      $('#work').append(i + 1 < works.length ? `<br />` : ``); // appends <hr /> to all but last project
    }
    // turns portfolio picture reddish and shows the invitation to click
    $('.portfolio-piece-picture').mouseenter(function() {
      $(this).addClass('background-dark');
      $(this).find('img').addClass('opacity-down');
      $(this).find('h1').css('z-index','1000');
    });
    $('.portfolio-piece-picture').mouseleave(function() {
      $(this).removeClass('background-dark');
      $(this).find('img').removeClass('opacity-down');
      $(this).find('h1').css('z-index','auto');
    });
    // END WORK SECTION

    // ACTIVATE TOOLTIPS
    $(function () {
      $('.link-to-website').tooltip();
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    // END ACTIVATE TOOLTIPS

    // GET CURRENT YEAR
    $('#current-year').html(new Date().getFullYear());
    // END GET CURRENT YEAR

    // MAKE HAMBURGER ICON MENU DISAPPEAR UPON CLICKING AN ITEM
    $('.navbar-collapse ul li a').click(function(){
      $('.navbar-toggle:visible').click();
    });
    // END MAKE HAMBURGER ICON MENU DISAPPEAR UPON CLICKING AN ITEM

    // LOAD THE PARTIALS INTO THE PAGE
    $('#accordion_section').load('../partials/accordion_partial.html');
    $('#certifications_section').load('../partials/certifications_partial.html');
    $('#contact_section').load('../partials/contact_partial.html');
    $('#footer_section').load('../partials/footer_partial.html');
    // END LOAD THE PARTIALS INTO THE PAGE

  });

})();

const SKILLS = (function() {
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

  function getSkills() {
    return skills;
  }

  return {
    getSkills: getSkills
  }

})();

const WORKS = (function() {
  let works = [
    // FRONT PAGE PICS SHOULD BE WIDTH:952 BY HEIGHT:600
    // FEATURE PICS SHOULD BE WIDTH:238 BY HEIGHT:150 EACH
    {
      id: 'chamisama-tea',
      title: 'Chamisama - Japanese Tea Ecommerce App',
      hoverDescription: 'This is a Rails ecommerce app for selling Japanese and Chinese tea. People around the world like healthy, good-tasting Japanese tea and they can get it from this ecommerce store.',
      techUsed: 'HTML / CSS / JavaScript / jQuery / Ruby / Rails 5 / Stripe',
      frontPageImage: 'img/project_photos/chamisama_front.jpg',
      featureImage: 'img/project_photos/chamisama_features.jpg',
      githubLink: 'https://github.com/Bill-Horst/chamisama',
      href: 'https://chamisama.herokuapp.com/'
    },
    {
      id: 'hello-sensei',
      title: 'Hello Sensei - ESL / EFL Teacher Applicaion',
      hoverDescription: 'This is an AngularJS front / Rails 5 back API application for EFL teachers abroad. It can be hard to come up with a lesson idea spur of the moment, but this is an app that teachers can use to share and get ideas.',
      techUsed: 'HTML / CSS / JavaScript / AngularJS / TinyMCE / Ruby / Rails 5',
      frontPageImage: 'img/project_photos/hello_front.jpg',
      featureImage: 'img/project_photos/hello_features.jpg',
      githubLink: 'https://github.com/Bill-Horst/ELT-Angular-Front',
      href: 'http://elt-app.s3-website-us-west-2.amazonaws.com/#/'
    },
    {
      id: 'ruby-blog',
      title: 'Blog Application',
      hoverDescription: 'This is a sample blog application built on Rails 5.',
      techUsed: 'HTML / CSS / JavaScript / jQuery / Ruby / Rails 5 / TinyMCE',
      frontPageImage: 'img/project_photos/blog_front.jpg',
      featureImage: 'img/project_photos/blog_features.jpg',
      githubLink: 'https://github.com/Bill-Horst/cfblog',
      href: 'https://billsrubyblog.herokuapp.com/'
    }
  ];

  function getWorks() {
    return works;
  }

  return {
    getWorks: getWorks
  }
})();

const EFFECTS = (function() {
  function activateSmoothScrolling() {
    let $root = $('html, body');

    $('.navbar-nav a').click(function() {
      let href = $.attr(this, 'href');

      if (href != undefined && href != '#') {
        $root.animate({
          scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
        });
        return false;
      }
    });
  }

  function activateStellar() {
    $(window).stellar();
  }

  function adjustForParallax() {
    // if window is medium size or small size, move the parallax pictures over to the left accordingly
    if($(window).width() < 700) {
      $('.parallax-pics').addClass('small-screen-pic');
    } else if ($(window).width() < 1000) {
      $('.parallax-pics').addClass('medium-screen-pic');
    }

  }

  return {
    smoothScrolling: activateSmoothScrolling,
    stellar: activateStellar,
    parallax: adjustForParallax
  }

})();
