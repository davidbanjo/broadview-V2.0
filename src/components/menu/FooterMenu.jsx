import { Link } from "react-router-dom"

const FooterMenu = () => {
    return (
        <div className="bts_footer_menu">
            <ul className="bts_footer_navitems">
                <Link to="/">
                    <li className="bts_footer_navitem font-normal">Home</li>
                </Link>
                <Link to="/about">
                    <li className="bts_footer_navitem font-normal">About Us</li>
                </Link>
                <Link to="/services">
                    <li className="bts_footer_navitem font-normal">Services</li>
                </Link>
                <Link to="/portfolio">
                    <li className="bts_footer_navitem font-normal">Portfolio</li>
                </Link>
                {/* <Link to="/blog">
                    <li className="bts_footer_navitem">Blog</li>
                </Link> */}
                <Link to="/contact">
                    <li className="bts_footer_navitem font-normal">Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}

export default FooterMenu