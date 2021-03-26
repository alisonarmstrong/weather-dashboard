$(document).ready(function() {
    var apiKey = "5dae4d27225fbee47ae93d617a1b3c19";
    var queryURL =
      "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}" + apiKey;
});      

$("#searchButton").click(function(e) {
    var cityValue = $("#cityInput").val();
    var parameters = {
      url: queryURL + "&q=" + cityValue,
      method: "GET"
    }});

    $.ajax(parameters).done(function(response) {
      console.log(response);
      $("#currentWeather").empty();
      var iconCode = response.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      var cityElement = $("<p></p>").text(response.name);
      $("#currentWeatherr").prepend(cityElement);
      var icon = $("<img>").attr("src", iconURL);
      var temperatureElement = $("<p></p>").text(
        "Temperature: " + response.main.temp
      );
      var humidityElement = $("<p></p>").text(
        "Humidity: " + response.main.humidity
      );
      var windspeedElement = $("<p></p>").text(
        "Wind Speed: " + response.wind.speed
      );
      $("#currentWeather").append([
        icon,
        temperatureElement,
        humidityElement,
        windspeedElement
      ]);
    });
    $("ol").append("<li>" + cityValue + "</li>");
