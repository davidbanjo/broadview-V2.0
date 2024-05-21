import Instagram from "../../icons/Instagram"
import Linkedin from "../../icons/Linkedin"
import Twitter from "../../icons/Twitter"
import MobileMenu from "../mobile/MobileMenu"
import drawerIcon from "./assets/broadview_icon.png"
import "./drawer.css"


const MenuDrawer = ({ isOpen, close }) => {

    return (
        <div className={`bts_drawer_container ${isOpen}`}>
            <img src={drawerIcon} className="bts_drawer_logo" alt="drawer_logo" />
            <MobileMenu close={close}/>
            <div className="bts_drawer_footer">
                <Linkedin width="25" height="25" color="white" />
                <Instagram width="25" height="25" color="white" />
                <Twitter width="25" height="25" color="white" />
            </div>
        </div>
    )
}

export default MenuDrawer