const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
// const { v4: uuid } = require("uuid");
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));


app.get("/currency-usd", async (req, res) => {

    url = "https://v6.exchangerate-api.com/v6/54d79f5447761709d2c1ff6b/latest/USD"
    try{

        const response = await axios.get(`${url}`);
        const currencyData = response.data;
        // const parsedCurrencyData = JSON.parse(currencyData);
        res.json(currencyData);

    } catch (error) {

        res.status(500).json({ error: "failed to fetch data" });
    }
});


app.get("/country-data", async (req, res) => {

    url = "https://restcountries.com/v3.1/all"
    try {
        const response = await axios.get(`${url}`);
        const countryData = response.data;
        // const parsedCurrencyData = JSON.parse(countryData);
        res.json(countryData);

    } catch (error) {
    res.status(500).json({ error: "failed to fetch data" });

    }
});



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
            // const filePath = path.join(__dirname, "data", "data.json");
            // fs.readFile(filePath,  (readError, existingData) => {
            //     if (readError) {
            //         console.error(readError);
            //         return res.status(500).json({ error: "Failed to read data file" });
            //     }
            //     const existingDataObj = JSON.parse(existingData);
            //     const updatedData = { ...existingDataObj, selectedCountryData };
            //     fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), (writeError) => {
            //         if (writeError) {
            //             console.error(writeError);
            //             return res.status(500).json({ error: "Failed to write data to file" });
            //         }
            //         console.log("data.json updated correctly");
            //     });
            // });
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
  
  