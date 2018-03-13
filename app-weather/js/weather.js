class Weather {
  constructor(city, state) {
    this.api_key = "053edace9a270590";
    this.city = city;
    this.state = state;
  }

  // fetch weather from API https://www.wunderground.com/api
  async getWeather() {
    const repsonse = await fetch(`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await repsonse.json();
    // console.log(responseData.current_observation.wind_string);
    return responseData.current_observation; // object from api
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}