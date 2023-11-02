import './header.scss'
import Logo from '../../images/cbc-logo.png'
import Canada from "../../images/Canada.png"
import China from "../../images/China.png"
import Europe from "../../images/Europe.png"
import UnitedStates from "../../images/United_States.png"
import UK from "../../images/United_Kingdom.webp"


const Header = () => {

    return (
        <>
            <header className="header">

                <img className='header__image' src={Logo} alt="logo" />

                <h1 className="header__title" >Welcome to <span className='header__euro'>&euro;</span> by C</h1>

                <nav class="header__navbar">
                    <ul>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__US' src={UnitedStates} alt="" /></span> US</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img  className='header__Canada' src={Canada} alt="" /></span>Canada</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__Europe' src={Europe} alt="" /></span>Europe</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__UK' src={UK} alt="" /></span>UK</a></li>
                        <li class="header__navbar--item"><a class="header__navbar--item--link" href=""><span><img className='header__China' src={China} alt="" /></span>China</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Header