$( document ).ready(function() {
//usage:https://github.com/axios/axios

    axios({
    method:'get',
    url:'https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&units=metric&APPID=ce41bb642943da1e1d39cad0b444d083', 
    })
    .then(function (response) {
        var data = response.data;

        if (Math.round(data.main.temp) < 20) {
            document.getElementById('drink-image').style.backgroundImage = "url('Images/starbucks_hotdrink-07.png')";
            document.getElementById('drink-title').style.backgroundImage = "url('Images/drink_title2-09.png')";

        }
        else {
            document.getElementById('drink-image').style.backgroundImage = "url('Images/frapp_div-05.png')";
            document.getElementById('drink-title').style.backgroundImage = "url('Images/frapp_title-06.png')";
        }


        $("#temp").html(Math.round(data.main.temp) + "°");
        $("#cityName").html(data.name);
        $("#description").html(data.description);

        var d = new Date();

        console.log(d.getHours());

        if (d.getHours() >= 7 && d.getHours() <= 20) { //daytime
            document.getElementById('column-left').style.backgroundImage = "url('Images/bg1.png')";
        }
        else{ //nighttime
            document.getElementById('column-left').style.backgroundImage = "url('Images/night_bg.jpg')";
        }

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[d.getDay()];

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var m = month[d.getMonth()];

        $("#dayofWeek").html(n + ", " + m + " " + d.getDate());


    });
});

