const secondKey = 'WjQ06wp8hJ14R038YnSEA8Y2AAt2t7Ql';

//key+urlOfWeatherCondition+theTextByUser
//apikey is keyword for key and q is keyword for entering text

const findCity = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${secondKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

const findWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}&apikey=${secondKey}`;

    const response = await fetch(base+ query);
    const data = await response.json();

    return data[0];


}

// findWeather('260623');

// findCity('Gujranwala').then( data=>{
//     return findWeather(data.Key);
// }).then(data =>{
//     console.log(data);
// }).catch(err => console.log(err));