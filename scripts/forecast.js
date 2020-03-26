const key = 'JG9ZA8suscsVzt5o0bxwaZCXMyZqIT65';

//another key for weather forecast
// const key = 'WjQ06wp8hJ14R038YnSEA8Y2AAt2t7Ql';

//get weather condition
const getWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


//get City
const getCity = async (city) =>{

    //end point api 
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// getCity('Khobar')
//     .then( data => {
//         return getWeather(data.Key);
//     }).then( data=>{
//         console.log(data);
//     }).catch(err => console.log(err));

