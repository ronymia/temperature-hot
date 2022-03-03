const API_KEY = `5ef6423e5a17bc7ca85f13c6a1f6bac6`

const searchTemperature = () => {
    const city = document.getElementById('get-city-name').value;
    // console.log(city);
    // city.value = '';

    // load weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayTemperature = temperature => {
    // console.log(temperature);

    // set city
    setInnerText('city-name', temperature.name);
    //set current temp
    setInnerText('temperature', temperature.main.temp);
    // set condition
    setInnerText('set-condition', temperature.weather[0].main);
    // set weather icon
    const weatherUrl = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', weatherUrl);
};
