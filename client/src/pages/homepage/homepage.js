import "./homepage.scss"
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Europe from "../../images/Europe.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"

const Homepage = () => {

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
        </>


    )

}

export default Homepage