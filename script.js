// JavaScript File

//client id : 53C4ONB5UQYN2EY13QJEMANEUW5M1ZB50FKAC0ZNDMPMFRGQ

//client secret: 0XFV5PM3LQUFZMJA2CKWFFHOBCPBSM3Z0PGXTEK5GEBSEA0V

$(document).ready(function() {

        $("button").on("click", function() {


                var address = $("#address").val();

                var food = $("#food").val();

                var url = "https://api.foursquare.com/v2/venues/search?client_id=ZQS3S2ZWFOC4ZW1HQT41U2RXKRHEMEXOIPW4OZMIYFMLITZP&client_secret=IQJ30SJKZL12BHBRYI0IHQU5FAPX4BEGZHRGH40VMLFHX4GL&v=20151209&near=" +
                    address +
                    "&query=" + food;

            }

        }
