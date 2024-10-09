




fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=fcadc575434884a7afe78070ddd16010&units=metric`)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        console.log(res)
        document.getElementById("ans").innerHTML =


            `
       <div class=" " style="margin-top: 150px;">
            <h1 class="fw-bold">${res.name}</h1>
            <p class="pt-3" style="font-size: 18px;">Temperature - ${res.main.temp}°C</p>
            <p class="" style="font-size: 18px;">Wind Speed -${res.wind.speed} Km/h</p>
            <p class="" style="font-size: 18px;">${res.weather[0].description}</p>
            </div>
            <div class="" style="margin-top: 150px;">
             <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"></div>
        `
    })
    .catch((err) => {
        console.log(err)
    })




document.getElementById("b1").addEventListener("click", () => {
    var c = document.getElementById("a").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=fcadc575434884a7afe78070ddd16010`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("ans").innerHTML = tem(res)
        })
        .catch((err) => {
            console.log(err)
        })


    function tem(t) {
        console.log(t)

        var c = t.main.temp - (273.15)
        console.log(c.toFixed(2))

        var ws = parseInt(t.wind.speed * 3.6)



        return `<div class=" " style="margin-top: 150px;">
            <h1 class="fw-bold">${t.name}</h1>
            <p class="pt-3" style="font-size: 18px;">Temperature - ${c.toFixed(2)}°C</p>
            <p class="" style="font-size: 18px;">Wind Speed -${ws} Km/h</p>
            <p class="" style="font-size: 18px;">${t.weather[0].description}</p>
            </div>
            <div class="" style="margin-top: 150px;">
            <img src="https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png"></div>
        
              `
    }
})
