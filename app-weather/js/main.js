// initialize weather classes
const ui = new UI();
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather);

// change location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // change location
  weather.changeLocation("Miami", "FL");

  // set location in local storage
  storage.setLocationData(city, state);

  // get and display weather
  getWeather();

  //close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}