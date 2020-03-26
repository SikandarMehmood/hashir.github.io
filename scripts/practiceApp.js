const form=document.querySelector('form');


const updateCity = async (city) =>{

    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    return {
        city: cityDetails,
        weather: weatherDetails
    }

}

form.addEventListener('submit', e=>{
    e.preventDefault();

    const city=form.city.value.trim();
    form.reset();

    // console.log(city);
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));

});