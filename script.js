// 89fa246160410dff1d548138c61317bc

async function getData() {
    let city = document.querySelector('input').value;
    city = city.trim();
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89fa246160410dff1d548138c61317bc`)
        .then(response => response.json())
        .then (data => {
            console.log(data);
            let place = document.getElementById('place');
            place.textContent = city + ` ${ data.sys.country}`;
            let temp = document.getElementById('temp');
            const celsius = Math.ceil(Number(data.main.temp) - 273.15);
            temp.textContent = celsius + '°C';
            let desc = document.getElementById('desc');
            document.querySelector('.weatherDesc').style.marginBlock = '2rem';
            desc.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1).toLowerCase();
            
            let humidityTag = document.getElementById('humidity');
            let humidity = data.main.humidity;
            humidityTag.textContent = `Humidity : ${humidity}%`;
            let windTag = document.getElementById('wind');
            let wind = data.wind.speed;
            windTag.textContent = `Wind : ${wind} KpH`;
            let tempMtag = document.getElementById('tempM');
            let tempMax = Math.ceil(Number(data.main.temp_max) - 273.15);
            let tempMin = Math.ceil(Number(data.main.temp_min) - 273.15);
            windTag.textContent = `Wind : ${wind} KpH`;
            tempMtag.textContent = `Max: ${tempMax}°C __ Min: ${tempMin}°C`;
            tempMtag.style.fontWeight = 50;
            tempMtag.style.fontSize = '1rem';
            document.querySelector('.weatherDesc img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector('.weatherDesc img').style.filter = 'brightness(500%)';
        })
        .catch(error => console.error(error));
        document.querySelector('.card').style.display = 'block';






}









