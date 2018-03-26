var n = 10;
var secondsToRedirect = document.getElementById('seconds-to-redirect');
secondsToRedirect.innerHTML = `Redirecting in ${n} seconds`;
var tm = setInterval(countDown,1000);

function countDown(){
  n--;
  secondsToRedirect.innerHTML = `Redirecting in ${n} seconds`;
  if(n == 0){
    window.location.replace("http://www.billhorst.com");
    clearInterval(tm);
  }
}
