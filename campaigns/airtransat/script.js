$( document ).ready(function() {
//usage:https://github.com/axios/axios

    axios({
    method:'get',
    url:'https://api.instagram.com/v1/users/self/media/recent/?access_token=3534838976.bfd54d4.a8f140115059455bbabfc61e6f9ea03b', 
    })

    .then(function (response) {
        var data = response.data;


        // $("#temp").html(Math.round(data.main.temp) + "°");
        // $("#cityName").html(data.name);
        // $("#description").html(data.description);

        var d = new Date();
        var posts;
        var randNum;

        for (var i = 0; i < 3; i++) {
            randNum = Math.floor(Math.random() * 20);
            data.data[randNum] = posts[i];
            console.log(posts[i]);
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

