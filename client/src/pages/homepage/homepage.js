import "./homepage.scss"
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Europe from "../../images/Europe.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"
import { useState, useEffect } from "react"
import axios from 'axios';

const Homepage = () => {

    const [currency, setCurrency] = useState(null)

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


    return (
        <>
            <p className="description" >
                Country by currency is a 24
                hackathon project to provide you
                with up-to-date currency calulations
                for the world traveller
            </p>
            <div className=" background__map">
                <div className="country__canada"><img
                    className="image__canada"
                    src={Canada}
                    alt="flag of Canada">
                </img></div>

                <div className="country__china"><img
                    className="image__china"
                    src={China}
                    alt="flag of China">
                </img></div>

                <div className="country__europe"><img
                    className="image__europe"
                    src={Europe}
                    alt="map of Europe">
                </img></div>
                <div className="country__uk"><img
                    className="image__uk"
                    src={UK}
                    alt="map of United Kingdom">
                </img></div>
                <div className="country__us"><img
                    className="image__us"
                    src={UnitedStates}
                    alt="map of United States">
                </img></div>
            </div>

            <div className="api-container">
                { currency && currency.conversion_rates && (
                    <p>Euros are equal to {currency.conversion_rates.EUR} USD</p>
                ) }
            </div>
        </>


    )

}

export default Homepage