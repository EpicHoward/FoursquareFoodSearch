// JavaScript File

//client id : 53C4ONB5UQYN2EY13QJEMANEUW5M1ZB50FKAC0ZNDMPMFRGQ

//client secret: 0XFV5PM3LQUFZMJA2CKWFFHOBCPBSM3Z0PGXTEK5GEBSEA0V

$(document).ready(function() {

    $("button").on("click", function() {


        var zipcode = $("#zip").val();

        var food = $("#food").val();

        var url = "https://api.foursquare.com/v2/venues/search?client_id=53C4ONB5UQYN2EY13QJEMANEUW5M1ZB50FKAC0ZNDMPMFRGQ&client_secret=0XFV5PM3LQUFZMJA2CKWFFHOBCPBSM3Z0PGXTEK5GEBSEA0V&v=20151209" +
            "&near="
        zipcode +
            "&query=" + food;

        $.get(URL, function(data) {
            var venues = data.response.venues;
            var myresult = "";
            for (var i = 0; i < 2; i++) {
                myresult += "<li>NAME: " + venues[i].name;
                "</li>"
            }
            $("#result").html(myresult);
        })
    });
})
