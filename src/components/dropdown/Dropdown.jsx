import { Link } from "react-router-dom"
import software from "./assets/bts-software-dev.png"
import consulting from "./assets/bts-consulting.png"
import talent from "./assets/bts-talent.png"
import "./dropdown.css"

const Dropdown = () => {
    return (
        <div className="bts_dropdown">
            <ul>
                <li>
                    <Link className="bts_dropdown_link" to="/services/staffing-solutions">
                        <span>
                            <img className="bts_dropdown_icon" src={talent} alt="talent"/>
                        </span>
                        Staffing Solutions
                    </Link>
                </li>
                <li>
                    <Link className="bts_dropdown_link" to="/services/development-services">
                        <span>
                            <img className="bts_dropdown_icon" src={software} alt="software"/>
                        </span>
                        Development Services
                    </Link>
                </li>
                <li>
                    <Link className="bts_dropdown_link" to="/services/digital-marketing">
                        <span>
                            <img className="bts_dropdown_icon" src={talent} alt="talent"/>
                        </span>
                        Digital Marketing
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown