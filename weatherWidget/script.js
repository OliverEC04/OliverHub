setTimeout(async () => {
    await updateWidget();
}, 100);

async function updateWidget() {
    let data = await owmOneCall('56.307301', '10.414130', 'a747d8d4db264ab04524b75c40b0f2c1');
    console.log(data);

    document.querySelector('#container').style.backgroundImage = `url(assets/backgrounds/${data.current.weather[0].icon}.png)`;
    document.querySelector('#icon').src = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`;
    document.querySelector('#icon').alt = `${data.daily[0].weather[0].main}`;
    document.querySelector('#tempNow').innerText = `${Math.round(data.current.temp - 273.15)}°`;
    document.querySelector('#tempHigh').innerText = `${Math.round(data.daily[0].temp.max - 273.15)}° ↑`;
    document.querySelector('#tempLow').innerText = `${Math.round(data.daily[0].temp.min - 273.15)}° ↓`;
    document.querySelector('#downfall').innerText = `${Math.round(data.daily[0].pop)} %`;
    document.querySelector('#wind').innerText = `${Math.round(data.daily[0].wind_speed * 3.6)} km/t`;
}

async function owmOneCall(lat, lon, apiKey) {
    let result;

    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            result = data;
        })
    
    return result;
}