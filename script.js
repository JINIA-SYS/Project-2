    let submit=document.querySelector('submit')

    function Weather(city) {
        const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${city}%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0`;
        const options = {
            method: 'GET', headers: {
                'X-RapidAPI-Key': 'f691fbbe6bmsh2da196fb343b774p186171jsn97aff31669c4',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };


        fetch(url, options).then(res => res.text()).then(data => console.log(data))


    }


    function Weather_Ninja(city) {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const options = { method: 'GET', headers: { Accept: "application/json", 'X-RapidAPI-Key': 'f691fbbe6bmsh2da196fb343b774p186171jsn97aff31669c4', 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' } };
        fetch(url, options).then(res => res.json()).then(res => {
            console.log(res)
            cities.innerHTML = city
            cloud_pct.innerHTML = res.cloud_pct
            temp.innerHTML = res.temp
            temp_2.innerHTML = res.temp
            feels_like.innerHTML = res.feels_like
            humidity.innerHTML = res.humidity
            humidity_2.innerHTML = res.humidity
            min_temp.innerHTML = res.min_temp
            max_temp.innerHTML = res.max_temp
            wind_speed.innerHTML = res.wind_speed
            wind_speed_2.innerHTML=res.wind_speed
            wind_degrees.innerHTML = res.wind_degrees
            sunrise.innerHTML = res.sunrise
            sunset.innerHTML = res.sunset
        })
    }
    let places;
    const arr=["Kolkata","London","Sydney","Berlin","New York","Moscow"]
    arr.forEach(element=>{
        places=document.getElementById(`#${element}`);
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${element}`;
        const options = { method: 'GET', headers: { Accept: "application/json", 'X-RapidAPI-Key': 'f691fbbe6bmsh2da196fb343b774p186171jsn97aff31669c4', 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' } };
        fetch(url, options).then(res => res.json()).then(res => {
            document.getElementById(`cloud_pct_${element}`).innerHTML = res.cloud_pct
            document.getElementById(`temp_${element}`).innerHTML = res.temp
            document.getElementById(`feels_like_${element}`).innerHTML = res.feels_like
            document.getElementById(`humidity_${element}`).innerHTML = res.humidity
            document.getElementById(`min_temp_${element}`).innerHTML = res.min_temp
            document.getElementById(`max_temp_${element}`).innerHTML = res.max_temp
            document.getElementById(`wind_speed_${element}`).innerHTML = res.wind_speed
            document.getElementById(`wind_degrees_${element}`).innerHTML = res.wind_degrees
            document.getElementById(`sunrise_${element}`).innerHTML = res.sunrise
            document.getElementById(`sunset_${element}`).innerHTML = res.sunset
        })
    })


    const search=document.querySelector("#search_city")
    const form = document.querySelector("#submit");
    let value;

    search.addEventListener("input",Search_city)
    function Search_city(cities)
    {
        value=cities.target.value;
        console.log(value)
    }
    form.addEventListener("click", (e) => {
        e.preventDefault()
    Weather_Ninja(value)
    })


    Weather_Ninja("Delhi")
