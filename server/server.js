const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
app.use(express.json());

app.use(cors({ origin: "http://localhost:3001" }));


// app.get("/currency-usd", async (req, res) => {

//     url = "https://v6.exchangerate-api.com/v6/54d79f5447761709d2c1ff6b/latest/USD"

//     try {


//         const response = await axios.get(`${url}`);
//         const currencyData = response.data;
//         res.json(currencyData);

//     } catch (error) {

//         res.status(500).json({ error: "failed to fetch data" });
//     }
// });


app.get("/country/:cca3", async (req, res) => {
    const url = "https://restcountries.com/v3.1/all";


    try {
        const response = await axios.get(url);
        const countryData = response.data;
        const singleCountry = countryData.find(country => country.cca3 === `${req.params.cca3}`);

        if (singleCountry) {
            const selectedCountryData = {
                // id: uuid(),
                countryName: singleCountry.name.common,
                countryCode: singleCountry.cca3,
                currency: singleCountry.currencies,
                capitol: singleCountry.capital,
                flag: singleCountry.flag,
                population: singleCountry.population,
                googleMapLink: singleCountry.maps?.googleMaps,
                roadSide: singleCountry.car.side,
                languages: singleCountry.languages,
            };

            res.json(selectedCountryData);
        } else {
            res.status(404).json({ error: "COUNTRY data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }

});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

