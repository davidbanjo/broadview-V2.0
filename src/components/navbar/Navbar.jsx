import { useState } from "react"
import MobileCTA from "../buttons/MobileCTA"
import PrimaryBtn from "../buttons/PrimaryBtn"
import Menu from "../menu/Menu"
import MenuDrawer from "../menu/drawer/MenuDrawer"
import "./navbar.css"
import Phone from "../icons/Phone"
import Twitter_X from "../icons/Twitter-X"
import ButtonMagic from "../buttons/ButtonMagic"
import { Link } from "react-router-dom"
import Linkedin from "../icons/Linkedin"

const Navbar = () => {

    const [ open, setOpen ] = useState("bts_slide_in")

    const handle_click_open = () => {
        setOpen("bts_slide_out")
    }

    const handle_click_close = () => {
        setOpen("bts_slide_in slide_in")
    }

    return (
        <div className="bts_navbar">
            <div className="bts_navbar_container_row">
                <div className="bts_navbar_col bts_mobile_CTABtn_cont">
                    <MobileCTA />
                </div>
                <div className="bts_navbar_col">
                    <div className="bts_logo_container">
                        <Link to="/">
                            <img className="bts_logo" src="/img/broadview_logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="bts_navbar_col menu_container">
                    <Menu />
                </div>
                <div className="bts_navbar_col bts_navbar_btn_container">
                    <div className="bts_navbar_btn">
                        {/* <PrimaryBtn value="Free Consultation" link="https://calendly.com/btech-informational/broadview-technical-information-session" /> */}
                        <Link to="tel:+18565520417">
                            <Phone color="#FA931C" width="16" height="16" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/broadviewtechnicalsolutions">
                            {/* <Twitter_X color="#FA931C" width={16} height={16} /> */}
                            <Linkedin color="#FA931C" width={16} height={16} />
                        </Link>
                        <Link to="/contact">
                            <ButtonMagic content="Get Started" />
                        </Link>
                    </div>
                </div>
                <div className="bts_navbar_col bts_hamburger_cont" onClick={handle_click_open}>
                    <svg className="bts_hamburger" xmlns="http://www.w3.org/2000/svg" height="30" fill="white" viewBox="0 -960 960 960" width="30">
                        <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"></path>
                    </svg>
                </div>
                {open === "bts_slide_out" ?
                <div className="bts_close_cont" onClick={handle_click_close}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        fill="currentColor" 
                        className="bi bi-x-lg" 
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div> : ""
                }
                <MenuDrawer isOpen={open} close={handle_click_close} />
            </div>
        </div>
    )
}

export default Navbar