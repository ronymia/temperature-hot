const API_KEY = `5ef6423e5a17bc7ca85f13c6a1f6bac6`

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
};
