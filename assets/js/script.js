//  renderlast searched city
renderLast();

// event listener search button
$(".btn").on("click", function (e) {
    e.preventDefault();
    

    var city = $("#search-input").val();
    // last searched item to local storage forr page reload
    cityOnload = localStorage.setItem("cityStored", city);
    
    if (city === "") {
        return
    } else {
        // else run the function to get weather data for city
        getWeatherDetails(city, true);
    }
});

// 
$("#saved-cities").on("click", function (e) {
    if (!e.target.matches(".btnCity")) return;

    var saveCity = e.target.id;
    getWeatherDetails(saveCity, false);
    console.log(saveCity);
});


function getWeatherDetails(city, addButton) {
    const apikey = "b35f2282cec646ddcd73e29b68f7d6d3";
    const query = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

    // AJAX call to retrieve data
    $.ajax({
        method: "GET",
        url: query,
    }).then(function (weather) {

        console.log(weather);
        var lat = weather.city.coord.lat;
        var lon = weather.city.coord.lon;

        $("#five-day").text("");
        for (let i = 5; i < 40; i += 8) {
            // grabbing the date from ajax response
            var dateText = weather.list[i].dt_txt;
            // splitting date and time values
            var shortDate = dateText.split(" ");
            // setting variable to date text only
            
            
            var date = shortDate[0];
            // variable to grab icon for wether
            var iconFC = weather.list[i].weather[0].icon;
            // variable for temp
            var cardTemp = Math.round(kelvinToF(weather.list[i].main.temp));
            // variable for humidity
            var cardHum = weather.list[i].main.humidity;

            cardForecast(date, iconFC, cardTemp, cardHum);
        }
        if (addButton) {
            searchHistory(weather.city.name);
        }
        $("#current-city").text("");
        $("#current-city").append(
            $("<h2>").text("City: " + weather.city.name),

            $("<p>").text("Wind: " + weather.list[0].wind.speed),

            $("<p>").text("Humidity: " + weather.list[0].main.humidity + "%"),

            $("<p>").text("Temp(F): " + Math.round(kelvinToF(weather.list[0].main.temp))),
        );

        // api call 5 day weather forecast
        const apikey = "b35f2282cec646ddcd73e29b68f7d6d3";
        const queryTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apikey}`;

        $.ajax({
            method: "GET",
            url: queryTwo,
        }).then(function (uvIndex) {
            $("#current-city").append(
                $("<p>").text("UV Index: " + uvIndex.current.uvi).attr("id", "ultra-violet"))
                if (uvIndex.current.uvi <= 2){
                    $("#ultra-violet").attr("class", "good")
                }else if (uvIndex.current.uvi <= 5){
                    $("#ultra-violet").attr("class", "moderate")
                }else if (uvIndex.current.uvi > 5){
                    $("#ultra-violet").attr("class", "severe")
                };
        });
    });
}
function kelvinToF(k) {
    return ((k - 273.15) * 1.8 + 32).toFixed(2);
}

function cardForecast(date, iconFC, cardTemp, cardHum) {
    $("#five-day").append(
        $("<div>").attr("class", "card col")
            .append(
                $("<h6>").text(date),
                $("<img>").attr("src", "http://openweathermap.org/img/wn/" + iconFC + "@2x.png"),
                $("<p>").text("Temp (F): " + cardTemp),
                $("<p>").text("Humidity: " + cardHum)))

}
function searchHistory(cityName) {

    $("#saved-cities").append(
        $("<button>").text(cityName)
            .attr("class", "btnCity btn-block col btn-outline-info")
            .attr("id", cityName)
            .text(cityName)
    );
}
function renderLast(cityOnload) {
    var cityOnload = localStorage.getItem("cityStored")
    if (!cityOnload) {
        return
    }else {
        getWeatherDetails(cityOnload, true);
    }
}
























// $(document).ready(function() {
  
//   var cityname = 'Jacksonville'
//   var key = 'b35f2282cec646ddcd73e29b68f7d6d3'; 
//   var baseURL = `https://openweathermap.org/data/2.5/weather?q=$Jacksonville&appid=${key}`
  
//   // function currentCity (cityname) {
//   fetch(baseURL)
//   .then(response => response.json())
//   .then(data => console.log(data));
  // } 
  
  // currentCity(cityname)







  // fetch(baseURL)
  // .then((data) => {console.log('response',data.json()) })
  // .catch((error) => {console.log(error)}) 
  
  //   var requestCity = async (city) => {
  //     var baseURL = 'https://api.openweathermap.org/data/2.5/weather'
  //     var query = `?q=${city}&appid=${key}`;
  //   }  
    
  //   //make fetch call (promise call)
  //   var response = await fetch(baseURL + query);

  //   //promise data
  //   var data = await response.json();
  //   return data;
   
  //   var searchForm = document.querySelector('.search-location');
  //   var cityValue = document.querySelector('.search-location input');
  //   var currentCity =document.querySelector('.current-city h2');
    
  //   updateWeatherDashboard = (city)=>{
  //       cityName.textContent = city.name;

  //   }
    
    
  //   //add event listener to form
  //   searchForm.addEventListener('submit', e =>{
  //       e.preventDefault();
  //       var citySearched = cityValue.value.trim();
  //       console.log(citySearched)
  //       searchForm.requestFullscreen();

  //       requestCity(citySearched)
  //       .then((data) => {
  //           updateWeatherDashboard(data);

  //        })
  //       .catch((error) => {console.log(error) })
  //   })

    
    
    
    
    
    
    
    
    
    
    
    
    
      
  