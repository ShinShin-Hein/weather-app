$(document).ready(function () {
    function weatherFunction() {
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://open-weather13.p.rapidapi.com/city/yangon/EN',
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9daff039d0msh246b9903214469cp1346d4jsne066a93fa7eb',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        $.ajax(settings).done(function (response) {
            const temperature = response.main.temp;
            const windSpeed = response.wind.speed;
            const humidity = response.main.humidity;

            $(".temperature").text(`Temperature: ${temperature} °C`);
            $(".windSpeed").text(`Wind Speed: ${windSpeed} m/s`);
            $(".humidity").text(`Humidity ${humidity} %`);
        });
    }
    weatherFunction();
})