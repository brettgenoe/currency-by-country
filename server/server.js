const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");



app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));


app.get("/currency-cad", async (req, res) => {

    url = "https://v6.exchangerate-api.com/v6/54d79f5447761709d2c1ff6b/latest/EUR"
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
    try{
        const response = await axios.get(`${url}`);
        const countryData = response.data;
        // const parsedCurrencyData = JSON.parse(countryData);

        res.json(countryData);
        

    } catch (error) {
   
    res.status(500).json({ error: "failed to fetch data" });
    }


});


app.listen(8080, () => {
  console.log("Listening on port 8080");
});
