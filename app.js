const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time=document.querySelector('img.time');
const icon = document.querySelector('.icon img');


//create updateUI function
const updateUI = (data) =>{

    // const city = data.cityDetails;
    // const weather= data.weatherDetails;

    //destructure the above object properties
    const{ cityDetails, weatherDetails} = data;

    //create a template string and paste data
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //remove d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //update image and icon
    let timeSrc = null;
    if(weatherDetails.IsDayTime){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
};
//create updateCity async function
const updateCity = async (city) =>{

    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    //return city and weather details  in object as property and values
    //if both property&value are same then we can use only one
    return { cityDetails, weatherDetails };//it means both property&value are same
    //this data we will pass to another function to display data on UI.
};


cityForm.addEventListener('submit', e =>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();//clear all form fields

    //pass this city name to async function ........ update ui with new city
    updateCity(city)
        .then( data=> updateUI(data))
        .catch(err => console.log(err));

});
 