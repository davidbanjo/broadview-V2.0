import NewsletterCTA from "../forms/NewsletterCTA"
import FooterMenu from "../menu/FooterMenu"
import footerLogo from "./assets/broadview-footer-logo.png"
// import Menu from "../menu/Menu"
import "./footer.css"
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';
import Twitter from '../icons/Twitter';
import Phone from '../icons/Phone';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bts_footer">
            <div className="bts_footer_container_row">
                <div className="bts_footer_col">
                    <img className="bts_footer_logo" src={footerLogo} alt="broadview footer logo" />
                    <div className="bts_footer_contact_info">
                        <div className="bts_footer_contact_info_address">
                        <p><b>New Jersey:</b> 3000 Atrium Way, Suite 200, Mt. Laurel, NJ, 08054</p>
                        <p><b>Delaware:</b> 18 Blevins Dr, Newcastle, DE 19720</p>
                        <p><b>Texas:</b> 2902 E Arkansas Ln, Suite C, Arlington, TX 76010</p>
                        </div>
                        <h5>Phone</h5>
                        <a href="tel:+16127729555">
                            <p>+1 (856) 552-0417</p>
                        </a>
                    </div>
                </div>
                <div className="bts_footer_col">
                    <h4>Quick Links</h4>
                    <FooterMenu />
                </div>
                <div className="bts_footer_col">
                    <h4>Service</h4>
                    <ul className="bts_footer_navitems">
                        <Link to="/services/talent-acquisition">
                            <li className="bts_footer_navitem">Strategic Talent Acquisition</li>
                        </Link>
                        <Link to="/services/software-development">
                            <li className="bts_footer_navitem">Software development</li>
                        </Link>
                        <Link to="/services/web-development">
                            <li className="bts_footer_navitem">Website Development</li>
                        </Link>
                    </ul>
                </div>
                <div className="bts_footer_col">
                    <h4 className="bts_footer_cta_text">Want to stay updated on latest trends related to your industry?</h4>
                    <p className="bts_footer_cta_desc">We send out value in a juicy newsletter. Only Value</p>
                    <NewsletterCTA />
                    <div className="bts_footer_socials">
                        <a href="https://www.instagram.com/broadviewtechnical">
                            <Instagram width="40" height="40" color="white" />
                        </a>
                        <a href="https://www.linkedin.com/company/broadviewtechnicalsolutions">
                            <Linkedin width="40" height="40" color="white" />
                        </a>
                        <a href="https://twitter.com/broadviewtech">
                            <Twitter width="40" height="40" color="white" />
                        </a>
                        <a href="tel:+18565520417">
                            <Phone width="40" height="40" color="white"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer