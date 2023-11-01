const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");



app.use(express.json());

console.log("running")


app.use(cors({ origin: "http://localhost:3000" }));


app.get("/currency", async (req, res) => {

    url = "https://v6.exchangerate-api.com/v6/54d79f5447761709d2c1ff6b/latest/USD"
    try{
        const response = await axios.get(`${url}`);
        const currencyData = response.data;
        res.json(currencyData);
        

    } catch (error) {
   
    res.status(500).json({ error: "failed to fetch data" });
    }

});




app.listen(8080, () => {
  console.log("Listening on port 8080");
});
