import { useState } from "react"
import { Link } from "react-router-dom"
import "./menu.css"
import Dropdown from "../dropdown/Dropdown"

const Menu = () => {

    const [ hover, setHover ] = useState(false)

    const handle_hover = () => {
        setHover(true)
    }

    const handle_not_hover = () => {
        setHover(false)
    }

    return (
        <div className="bts_navbar_menu">
            <ul className="bts_navitems">
                <li className="bts_navitem">
                    <Link className="bts_nav_link" to="/">
                        Home
                    </Link>
                </li>
                <li className="bts_navitem">
                    <Link className="bts_nav_link" to="/about">
                        About Us
                    </Link>
                </li>
                <li className="bts_navitem" onMouseOver={handle_hover} onMouseLeave={handle_not_hover}>
                    <Link className="bts_nav_link" to="/services">
                        Services
                    </Link>
                    {hover &&
                        <Dropdown />
                    }
                </li>
                <li className="bts_navitem">
                    <Link className="bts_nav_link" to="/portfolio">
                        Portfolio
                    </Link>
                </li>
                {/* <li className="bts_navitem">
                    <Link className="bts_nav_link" to="/blog">
                        Blog
                    </Link>
                </li> */}
                <li className="bts_navitem">
                    <Link className="bts_nav_link" to="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu

