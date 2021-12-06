// https://openweathermap.org/weather-conditions
// https://openweathermap.org/api/hourly-forecast#call

const defCity = 456173;
const kelvins = 273.15
const wDiv = document.getElementById('weath')

mm(456173)

function mm(id = defCity) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${appid}`)
    .then(res => res.json())
    .then(data => rw(data))
    .catch(e => console.error(e))
}

function rw(data) {
  if(wDiv && data.cod == 200){
    let out = '<div class="weathme">'
    out += `<h2>${data.city.name}</h2><div id="weathmes">`
    data.list.forEach(element => {
      out += `<div class="wethtile"><h3>${element.dt_txt.substr(0, element.dt_txt.length - 3)}</h3><div>Temp: ${(element.main.temp - kelvins).toFixed(1)} &deg;C</div><div><img src="http://openweathermap.org/img/wn/${element.weather[0].icon}.png"></div> <div>${element.weather[0].main}</div><div>Wind: ${element.wind.speed} m/s <span style="transform: rotate(${element.wind.deg}deg);display: inline-block">&darr;</span></div></div>`
    });
    out += '</div></div>'
    wDiv.innerHTML = out
  }
}