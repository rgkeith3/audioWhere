import fetchJsonp from 'fetch-jsonp'
import Synth from './synth'

const synth = new Synth()

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    document.querySelector('#latitude').value = pos.coords.latitude;
    document.querySelector('#longitude').value = pos.coords.longitude;
  })
}

const fetchLocationData = () => {
  const lat = document.querySelector('#latitude').value;
  const lng = document.querySelector('#longitude').value;

  fetchJsonp(`http://www.datasciencetoolkit.org/coordinates2statistics/${lat},${lng}?statistics=elevation,land_cover,mean_temperature,population_density,precipitation`)
    .then(res => res.json())
    .then(data => synth.parse(data[0]))
}

document.addEventListener('DOMContentLoaded', () => {


  document.querySelector('#submit').addEventListener('click', fetchLocationData)
})
