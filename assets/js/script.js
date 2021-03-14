$(document).ready(function() {

  var key = 'b35f2282cec646ddcd73e29b68f7d6d3'; 
  // var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Jacksonville&appid=b35f2282cec646ddcd73e29b68f7d6d3';
 
  // fetch(baseURL)
  // .then((data) => {console.log('response',data.json()) })
  // .catch((error) => {console.log(error)}) 
  
    var requestCity = async (city) => {
      var baseURL = 'http://api.openweathermap.org/data/2.5/weather'
      var query = `?q=${city}appid=${key}`;
    }  
    
    //make fetch call (promise call)
    var response = await fetch(baseURL+query);
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
    })