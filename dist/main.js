const city=new CityWeather()
const renderer = new Renderer()
   
  async function renderAll() {
    const cities = await city.getAllCities()
    renderer.renderCities(city.data)
     }
      renderAll()
       async function saveCity(cityName,) {
        await city.saveCityData(cityName);
          renderer.renderCities(city.data)
     }
        async function deleteCity(cityName) {
        await city.deleteCity(cityName);
          renderer.renderCities(city.data)
     }
     async function countercity() {
        const cityName = $("#newCityName").val()
         await city.getCityData(cityName);
          renderer.renderCities(city.data)
     }








    
   