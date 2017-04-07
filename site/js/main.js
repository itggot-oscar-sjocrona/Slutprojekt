function display_message(element) {
  var temp = document.querySelector(element);
  temp.classList.add("hidden");
  var temp2 = document.querySelector('#message')
  temp2.classList.remove("hidden")
}

var start_time = 172800/2;
var seconds = start_time;
function timer() {
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('demo').innerHTML = "0" + days + ":" + hours + ":" + minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('demo').innerHTML = "0";
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);
