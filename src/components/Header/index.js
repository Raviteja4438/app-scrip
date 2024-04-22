import {useState} from 'react'
import './index.css'

const Header = () => {
    const [onClickHam, setClickHam] = useState(false)

    const onClickHamburger = () => {
        setClickHam(prev => !prev)
    }

    return (
        <div>
            <div className="header-container-lg">
                <div>
                    <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1713594666/Logo_zzrvqd.png"
                    alt="logo"
                    className="logo" />
                </div>
                <h2 className="logo-title">LOGO</h2>
                <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1713594783/Icons_nbirtc.png"
                alt="header-icons"
                className="header-icons" />
            </div>
            <div className="header-container-md">
                <div>
                    <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1713594887/solar_hamburger-menu-linear_qyeipa.png"
                    alt="hamburger"
                    className="hamburger"
                    onClick={onClickHamburger} />
                    <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1713594666/Logo_zzrvqd.png"
                    alt="logo"
                    className="logo" />
                </div>
                <h2 className="logo-title">LOGO</h2>
                <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1713595795/Icons_mobile_crflnl.png"
                alt="header-icons"
                className="header-icons" />
            </div>
            <div className="navigation-btn-container">
                <button type="button" className="navigation-buttons">SHOP</button>
                <button type="button" className="navigation-buttons">SKILLS</button>
                <button type="button" className="navigation-buttons">STORIES</button>
                <button type="button" className="navigation-buttons">ABOUT</button>
                <button type="button" className="navigation-buttons">CONTACT US</button>
            </div>
            {onClickHam && (
                <div className="navigation-container">
                    <div className="navigation-btn-container-md">
                        <div className="close-btn-container">
                            <button type="button" onClick={onClickHamburger} className="close-button">&#10060;</button>
                        </div>
                        <ul>
                            <li className="nav-li"><button type="button" className="navigation-buttons">SHOP</button></li>
                            <li className="nav-li"><button type="button" className="navigation-buttons">SKILLS</button></li>
                            <li className="nav-li"><button type="button" className="navigation-buttons">STORIES</button></li>
                            <li className="nav-li"><button type="button" className="navigation-buttons">ABOUT</button></li>
                            <li className="nav-li"><button type="button" className="navigation-buttons">CONTACT US</button></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
