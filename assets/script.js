let  weathercontent = {
    apiKey : "5095b3ce391c405a62c28d9bfa698fcc",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city + "&appid=" 
        + this.apiKey + "&units=metric"
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
},

displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
    document.querySelector(".discription").innerText = description;
    document.querySelector(".temp").innerText = temp + "℃";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
}, 
search: function() {
    this.fetchWeather(document.querySelector(".form-control").value);   
}
};

document.querySelector(".searchbtn").addEventListener("click" , function () {
    weathercontent.search();
});

document.querySelector(".form-control").removeEventListener("keyup", function (event) {
if (event.key == "Enter") {
    weathercontent.search();
} 
})
