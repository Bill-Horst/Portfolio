$(document).ready(function() {

  // WORK SECTION
  for(let i = 0; i < works.length; i++) {
    $('#work').append(
      `
      <div class='row'>
      <div class='text-center'>
      <div class='panel'>
      <div class='panel-heading'>
      <h3 class='panel-title' data-toggle='tooltip' data-placement='top' title='${works[i].hoverDescription}'>${works[i].title}</h3>
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


});
