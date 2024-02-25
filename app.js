const formElement = document.querySelector("#form");

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const cityInputElement = document.querySelector("#city-input");

    const cityInputValue = cityInputElement.value;

    if (cityInputValue == "") {
        error.innerText = 'Enter the city!';
        cityInputElement.classList.add('border-red');
    } else {
        error.innerText = '';
        cityInputElement.classList.remove('border-red');

        const APIKEY = "e1612a0618eea4b194e061566236062f";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&units=metric&appid=${APIKEY}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const cityElement = document.querySelector("#city");
                const tempElement = document.querySelector("#temp");
                const feelsLikeElement = document.querySelector("#feels-like");
                const weatherElement = document.querySelector("#weather");
                const descElement = document.querySelector("#desc");
                const riseElement = document.querySelector("#rise");
                const setElement = document.querySelector("#set");


                cityElement.innerText = result.name;
                tempElement.innerText = result.name;
                feelsLikeElement.innerText = result.main.feels_like;
                weatherElement.innerText = result.weather[0].main;
                descElement.innerText = result.weather[0].description;

                // console.log(result);
                // console.log(result.name);
                // console.log(result.main.temp);
                // console.log(result.main.feels_like);
                // console.log(result.weather[0].main);
                // console.log(result.weather[0].description);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function updateWeatherUI(iconCode, description, temperature) {
        const weatherIconElement = document.querySelector('.weather-icon');
        const weatherDescriptionElement = document.querySelector('.weather-description');

        // Update the weather icon based on conditions
        if (description.includes('clouds')) {
            weatherIconElement.style.backgroundImage = `url("./clouds.jpg")`;
        } else if (temperature > 25) {
            weatherIconElement.style.backgroundImage = `url("./sun.jpg")`;
        } else if (description.includes('rain')) {
            weatherIconElement.style.backgroundImage = `url("./rain-clouds.jpg")`;
        } else if (description.includes('thunder')) {
            weatherIconElement.style.backgroundImage = `url("./thunder.jpg")`;
        }



        // Update the weather description
        weatherDescriptionElement.textContent = description;
    }

});