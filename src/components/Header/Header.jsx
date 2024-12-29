import './Header.css'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll"
const Header = () => {
    const mobile = window.innerWidth < 768 ? true : false
    const [menuOpened, setMenuOpened] = useState(false)


    return (
        <div className="header" id="header">
            <img src={Logo} alt="logo img" className="logo" />
            {menuOpened === false && mobile === true ? (
                <div style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}><img src={Bars} alt="menu" style={{ width: '1.5rem', height: '1.5rem' }} onClick={() => setMenuOpened(true)} /></div>
            ) : (
                <ul className="header-menu">
                    <li >
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="hero"
                            spy={true}
                            smooth={true}
                        > Hero </Link>
                    </li>
                    <li >
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="programs"
                            spy={true}
                            smooth={true}
                        > Programs </Link>
                    </li>
                    <li >
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="reasons"
                            spy={true}
                            smooth={true}
                        > Reasons </Link>
                    </li>
                    <li >
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="plans"
                            spy={true}
                            smooth={true}
                        > Plans </Link>
                    </li>
                    <li >
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="testimonials"
                            spy={true}
                            smooth={true}
                        > Testimonials </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}
export default Header