import './header.scss'
import Logo from '../../images/cbc-logo.png'
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Europe from "../../images/Europe.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"
import India from '../../images/India.png'
import Russia from '../../images/Russia.png'
import Brazil from '../../images/Brazil.webp'
import Argentina from '../../images/Argentina.webp'
import Japan from '../../images/Japan.svg.png'
import SouthAfrica from '../../images/SouthAfrica.png'
import Australia from '../../images/Australia.webp'


const Header = () => {

    return (
        <>
            <header className="header">

                <img className='header__logo' src={Logo} alt="logo" />

                <nav class="header__navbar">
                    <ul>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={UnitedStates} alt="" /></span> US</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img  className='header__flag' src={Canada} alt="" /></span>Canada</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={Europe} alt="" /></span>Europe</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={UK} alt="" /></span>UK</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={China} alt="" /></span>China</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={India} alt="" /></span>India</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={Russia} alt="" /></span>Russia</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={Brazil} alt="" /></span>Brazil</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={Argentina} alt="" /></span>Argentina</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={Japan} alt="" /></span>Japan</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={SouthAfrica} alt="" /></span>SA</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__flag' src={Australia} alt="" /></span>Australia</a></li>
                    </ul>
                </nav>

                <h1 className="header__title" >Welcome to <span className='header__euro'>&euro;</span> by C</h1>
            </header>

            
        </>
    )

}

export default Header