// if window is medium size or small size, move the parallax pictures over to the left accordingly
if($(window).width() < 700) {
  $('.parallax-pics').addClass('small-screen-pic');
} else if ($(window).width() < 1000) {
  $('.parallax-pics').addClass('medium-screen-pic');
}
