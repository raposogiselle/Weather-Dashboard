$(document).ready(function() {

    var apiKey1 = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={b35f2282cec646ddcd73e29b68f7d6d3}`
    
    fetch(apiKey1, {
      cache: 'reload',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //   
    })