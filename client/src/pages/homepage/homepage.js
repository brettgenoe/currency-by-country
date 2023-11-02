import "./homepage.scss"
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Europe from "../../images/Europe.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios';

const flagImages = {
    CAD: Canada,
    CNY: China,
    EUR: Europe,
    GBP: UK,
    USD: UnitedStates,

}



const Homepage = () => {

    const { cca3 } = useParams();
    const [ countryData, setCountryData] = useState({})

 

    useEffect(() => {
        const getCountryCode = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/country/${cca3}`);
                console.log(data);
                setCountryData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCountryCode(cca3 || "USA")
    }, [cca3]);


    const [currency, setCurrency] = useState(null);
    const [amountSaved, setAmountSaved] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("USD")

    useEffect(() => {

        const getCurrency = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/currency-usd`)
                console.log(data);
                setCurrency(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCurrency()
    }, [])

    const handleAmountChange = (event) => {
        setAmountSaved(event.target.value);
    }

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    }
    const convertAmount = () => {
        if (currency && currency.conversion_rates) {
            const conversionRate = currency.conversion_rates[selectedCurrency];
            return (amountSaved * conversionRate).toFixed(2);
        }
        return "Loading..."
    }
    const handleFlagClick = (currencyCode) => {
        setSelectedCurrency(currencyCode);
    }


    return (
        <>
            <p className="description" >
                Currency by Country is a 24
                hackathon project to provide you
                with up-to-date currency calulations
                for the world traveller.
            </p>
            <div className=" background__map">


                {Object.keys(flagImages).map((currencyCode) => (
                    <div key={currencyCode} className={`country__${currencyCode.toLowerCase()}`}>
                        <img
                            className={`image__${currencyCode.toLowerCase()}`}
                            src={flagImages[currencyCode]}
                            alt={`flag of ${currencyCode}`}
                            onClick={() => handleFlagClick(currencyCode)}
                        />
                    </div>
                ))}

            </div>

            <div className="converter__container">
                <div className="converter">
                    <input
                        className="converter__input"
                        type="number"
                        value={amountSaved}
                        onChange={handleAmountChange}
                        placeholder="Enter your savings!"
                    />

                    <div className="selected-flag"> { }  </div>
                    {/* <select value={selectedCurrency} onChange={handleCurrencyChange}>
                        {currency && currency.conversion_rates && Object.keys(currency.conversion_rates).map((currencyCode) => (
                            <option key={currencyCode} value={currencyCode}>
                                {currencyCode}
                            </option>
                        ))}
                    </select> */}

                    <p>
                        {amountSaved} USD is equal to {convertAmount()} {selectedCurrency}
                    </p>
                </div>
            </div>
        <div>
            <p>{countryData.countryName}</p>
        </div>
        </>


    )

}

export default Homepage