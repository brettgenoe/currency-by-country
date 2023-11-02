import "./homepage.scss"
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Europe from "../../images/Europe.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"
import { useState, useEffect } from "react"
import axios from 'axios';

const flagImages = {
    CAD: Canada,
    CNY: China,
    EUR: Europe,
    GBP: UK,
    USD: UnitedStates,

}



const Homepage = () => {

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
            <main className="home__container">
                <p className="home__description" >
                    Welcome! Currency by Country is a 24
                    hackathon project to provide you
                    with up-to-date currency calulations
                    for the world traveller.
                </p>

                <h2 className="home__title">So Where Are You Going?</h2>
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

                <div className="converter">
                    <h2 className="converter__title">Travelling takes money... What's in your wallet?</h2>
                    <p className="converter__description">Here you can insert how much money you've set aside for travelling, then we'll convert it with ease! We're basically chatGPT for the new-wave traveller that has a grudge on Google...</p>
                    <h3>You're Savings:</h3>
                    <input
                        className="converter__input"
                        // type="number"
                        value={amountSaved}
                        onChange={handleAmountChange}
                        placeholder="Enter here!"
                    />

                    <div className="converter__flag"> { }  </div>
                    {/* <select value={selectedCurrency} onChange={handleCurrencyChange}>
                        {currency && currency.conversion_rates && Object.keys(currency.conversion_rates).map((currencyCode) => (
                            <option key={currencyCode} value={currencyCode}>
                                {currencyCode}
                            </option>
                        ))}
                    </select> */}
                    <h3 className="converter__calc--title">Happy Travelling!</h3>
                    <p className="converter__calc">
                        Your <b>&#36;{amountSaved} USD</b> is equal to <b>{convertAmount()} {selectedCurrency}</b>!
                    </p>

                </div>

            </main>
        </>


    )

}

export default Homepage