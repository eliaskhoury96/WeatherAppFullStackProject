
class CityWeather{
    constructor() {
      this.data = [];
      this.city ={}
    }
    async getAllCities() {
      try {
        const response = await $.get('/Cities'); 

        this.data = response;
        
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch cities');
      }
    }
    async getCityData(cityName) {
      try {
        const response = await $.get(`/weather/${cityName}`); 
        this.data.push(response)
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch data for ${cityName}`);
      }
    }
    async saveCityData(cityName) { 
        const city = this.data.find(e=>e.name===cityName)
      try {
         await $.post('/City',city) 
    
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to save data for ${cityName}`);
      }
    }
    async deleteCity(cityName) {
        const url = `/City/${cityName}`
      try {const city = await $.ajax({
        url:url,
        type: 'DELETE'
    });


      } catch (error) {
        console.error(error);
        throw new Error(`Failed to delete data for ${cityName}`);
      }
    }
  }
  
