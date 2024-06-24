import { Link } from "react-router-dom"
import "./../menu.css"
import { useState } from "react"
import ArrowRight from "../../icons/ArrowRight"

const MobileMenu = ({ close }) => {

    const [ click, setClicked ] = useState(false)

    const handle_mobile_dropdown = () => {
            setClicked(!click)
    }

    return (
        <div className="bts_mobile_menu">
            <ul className="bts_mobile_navitems">
                <Link to="/" onClick={close}>
                    <li className="bts_mobile_navitem">Home</li>
                </Link>
                <Link to="/about" onClick={close} >
                    <li className="bts_mobile_navitem">About Us</li>
                </Link>
                    <li className="bts_mobile_navitem">
                    <Link to="/services" onClick={close} style={{ color: 'white' }}>
                        Services
                    </Link>
                        <span className="bts-arrow-cont" onClick={handle_mobile_dropdown}>{<ArrowRight width={30} height={30} color="white" />}</span></li>
                    {click &&
                        <ul className="bts_mobile_subnavitem_cont !mt-0a">
                            <Link to="/services/staffing-solutions" onClick={close}>
                                <li className="bts_mobile_subnavitem">Staffing Solutions</li>
                            </Link>
                            <Link to="/services/development-services" onClick={close}>
                                <li className="bts_mobile_subnavitem">Development Services</li>
                            </Link>
                            <Link to="/services/digital-marketing" onClick={close}>
                                <li className="bts_mobile_subnavitem">Digital Marketing</li>
                            </Link>
                        </ul>
                    }
                <Link to="/portfolio" onClick={close}>
                    <li className="bts_mobile_navitem">Portfolio</li>
                </Link>
                {/* <Link to="/blog" onClick={close}>
                    <li className="bts_mobile_navitem">Blog</li>
                </Link> */}
                <Link to="/contact" onClick={close}>
                    <li className="bts_mobile_navitem">Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileMenu