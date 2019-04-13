function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());

  var seconds = Math.floor((t / 1000) % 60);

  var minutes = Math.floor((t / 1000 / 60) % 60);

  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,

    days: days,

    hours: hours,

    minutes: minutes,

    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);

  var daysSpan1 = clock.querySelector('.days1');
  var daysSpan2 = clock.querySelector('.days2');

  var hoursSpan1 = clock.querySelector(".hours1");
  var hoursSpan2 = clock.querySelector(".hours2");

  var minutesSpan1 = clock.querySelector(".minutes1");
  var minutesSpan2 = clock.querySelector(".minutes2");

  var secondsSpan1 = clock.querySelector(".seconds1");
  var secondsSpan2 = clock.querySelector(".seconds2");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    document.getElementById("time-end").style.display = "none";

    var days = ("0" + t.days);
    var hours = ("0" + t.hours);
    var minutes = ("0" + t.minutes);
    var seconds = ("0" + t.seconds);

    if (days.length == 2) {
      daysSpan1.innerHTML = "0";
      daysSpan2.innerHTML = days.slice(1, 2);
    }

    if (days.length == 3) {
      daysSpan1.innerHTML = days.slice(1, 2);
      daysSpan2.innerHTML = days.slice(2, 3);
    }


    if (hours.length == 2) {
      hoursSpan1.innerHTML = "0";
      hoursSpan2.innerHTML = hours.slice(1, 2);
    }

    if (hours.length == 3) {
      hoursSpan1.innerHTML = hours.slice(1, 2);
      hoursSpan2.innerHTML = hours.slice(2, 3);
    }


    if (minutes.length == 2) {
      minutesSpan1.innerHTML = "0";
      minutesSpan2.innerHTML = minutes.slice(1, 2);
    }

    if (minutes.length == 3) {
      minutesSpan1.innerHTML = minutes.slice(1, 2);
      minutesSpan2.innerHTML = minutes.slice(2, 3);
    }


    if (seconds.length == 2) {
      secondsSpan1.innerHTML = "0";
      secondsSpan2.innerHTML = seconds.slice(1, 2);
    }

    if (seconds.length == 3) {
      secondsSpan1.innerHTML = seconds.slice(1, 2);
      secondsSpan2.innerHTML = seconds.slice(2, 3);
    }

    // hoursSpan1.innerHTML = ("0" + t.hours).slice(1, 2);
    // hoursSpan2.innerHTML = ("0" + t.hours).slice(-1);

    // if (t.hours > 9) { hoursSpan1.innerHTML = ("0" + t.hours).slice(1, 2); } else {
    //   hoursSpan1.innerHTML = "0";
    // }
    // hoursSpan2.innerHTML = ("0" + t.hours).slice(-1);


    // if (t.minutes > 9) { minutesSpan1.innerHTML = ("0" + t.minutes).slice(1, 2); } else {
    //   minutesSpan1.innerHTML = "0";
    // }
    // minutesSpan2.innerHTML = ("0" + t.minutes).slice(-1);


    // if (t.seconds > 9) { secondsSpan1.innerHTML = ("0" + t.seconds).slice(1, 2); } else {
    //   secondsSpan1.innerHTML = "0";
    // }
    // secondsSpan2.innerHTML = ("0" + t.seconds).slice(-1);
  }

  updateClock();

  var timeinterval = setInterval(updateClock, 1000);
}

//var deadline = new Date(2018,10,17);

var deadline = new Date("April 25, 2019 23:59:59");

// deadline.setDate(15);

console.log(deadline);

initializeClock("clockdiv", deadline);
