import "./homepage.scss"
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Italy from "../../images/Italy.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"
import India from "../../images/India.png"
import Russia from "../../images/Russia.png"
import Brazil from "../../images/Brazil.webp"
import Argentina from "../../images/Argentina.webp"
import Japan from "../../images/Japan.svg.png"
import SouthAfrica from "../../images/SouthAfrica.png"
import Australia from "../../images/Australia.webp"



import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';


const flagImages = {
    ARS: Argentina,
    AUD: Australia,
    BRL: Brazil,
    CAD: Canada,
    CNY: China,
    EUR: Italy,
    GBP: UK,
    INR: India,
    JPY: Japan,
    RUB: Russia,
    ZAR: SouthAfrica,
    USD: UnitedStates,
}

const Homepage = () => {


    const conversion = {
        ARS: { countryCode: "ARG" },
        AUD: { countryCode: "AUS" },
        BRL: { countryCode: "BRA" },
        CAD: { countryCode: "CAN" },
        CNY: { countryCode: "CHN" },
        EUR: { countryCode: "ITA" },
        GBP: { countryCode: "GBR" },
        INR: { countryCode: "IND" },
        JPY: { countryCode: "JPN" },
        RUB: { countryCode: "RUS" },
        ZAR: { countryCode: "ZAF" },
        USD: { countryCode: "USA" },
    }


    const { cca3 } = useParams();
    const [countryData, setCountryData] = useState({})



    useEffect(() => {


        const getCountryCode = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/country/${cca3}`);

                setCountryData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCountryCode(cca3 || "USA")
    }, [cca3]);



    const [currency, setCurrency] = useState(null);
    const [amountSaved, setAmountSaved] = useState(1);
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
                    with up-to-date currency calculations
                    for the world traveler.
                </p>

                <h2 className="home__title">So Where Are You Going?</h2>
                <div className=" background__map">


                    {Object.keys(flagImages).map((currencyCode) => {
                        const countryData = conversion[currencyCode];
                        const countryCode = countryData.countryCode;

                        return (
                            <Link to={`/country/${countryCode}`} key={currencyCode}>
                                <div key={currencyCode} className={`country__${currencyCode.toLowerCase()}`}>
                                    <img
                                        className={`image__${currencyCode.toLowerCase()}`}
                                        src={flagImages[currencyCode]}
                                        alt={`flag of ${currencyCode}`}
                                        onClick={() => handleFlagClick(currencyCode)}
                                    />
                                </div>
                            </Link>
                        );
                    })}

                </div>

                <div className="converter">
                    <h2 className="converter__title">Travelling takes money... What's in your wallet?</h2>
                    <p className="converter__description">Here you can insert how much money you've set aside for travelling, then we'll convert it with ease! We're basically chatGPT for the new-wave traveller that has a grudge on Google...</p>
                    <h3 className="converter__input--title">You've Got Savings:</h3>
                    <div className="converter__input--flex">
                        <input
                            className="converter__input"
                            // type="number"
                            value={amountSaved}
                            onChange={handleAmountChange}
                            placeholder="Enter here!"
                        />

                        <div > <img className="converter__flag"
                            src={flagImages[selectedCurrency]}
                            alt={`flag of ${selectedCurrency}`}></img>
                        </div>

                        <p className="converter__calc">
                            Your <b>&#36;{amountSaved} USD</b> is equal to {countryData.currency && countryData.currency[selectedCurrency] && countryData.currency[selectedCurrency].symbol || "$"} <b>{convertAmount()} {selectedCurrency}</b>!
                        </p>
                    </div>
                </div>
                {countryData.countryName && (
                    <section className="description">

                        <h4 className="description__title">Lets find out more about {countryData.countryName}!</h4>
                        <p className="description__data"><b>Capital City:</b> Our capital city is {countryData.capitol}. </p>
                        <p className="description__data"><b>Population: </b>We have {countryData.population} people.</p>
                        {/* <p className="description__data">Flag: {countryData.flag} </p> */}
                        <p className="description__data"><b>Currency:</b> {countryData.currency && countryData.currency[selectedCurrency] && countryData.currency[selectedCurrency].name || "N/A"}.</p>
                        <p className="description__data"><b>Where do you drive?:</b> We drive on the <b>{countryData.roadSide}</b> side of the road. </p>

                    </section>

                )}

                <h3 className="converter__calc--title">Happy Travelling!</h3>

            </main >

        </>
    )
}
export default Homepage


























