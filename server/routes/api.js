const express = require('express');
const router = express.Router();
const City = require('../model/City'); 
const axios = require('axios');
router.get('/weather/:cityName', function (req, res) {
    const cityname = req.params.cityName;
    const APIkey = "a534189d46b449f42456424903451526";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl)
        .then((result) => {
            const city =  result.data
            const resultCity = {name:city.name, temperature:city.main.temp,condition:city.weather[0].main,conditionPic:city.weather[0].icon}
            res.status(200).send(resultCity);

        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/Cities', function (req, res) {
    City.find()
        .then((cities) => {
            res.status(200).send(cities);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});
router.post('/City', (req, res) => {
    const city  = req.body;
    console.log(req.body)
    const newCity = new City(
        city
    );
    newCity.save()
        .then(() => {
            res.status(201).send("City added successfully");
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});
router.delete('/City/:cityName', (req, res) => {
    const cityname = req.params.cityName;
    City.findOneAndDelete({name:cityname })
        .then((deletedCity) => {
            if (deletedCity) {
                res.status(200).send(`City '${cityname}' deleted successfully`);
            } else {
                res.status(404).send(`City '${cityname}' not found`);
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});
module.exports = router;
