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
                    <Link className="bts_dropdown_link" to="/services/talent-acquisition">
                        <span>
                            <img className="bts_dropdown_icon" src={talent} alt="talent"/>
                        </span>
                        Strategic Talent Acquisition
                    </Link>
                </li>
                <li>
                    <Link className="bts_dropdown_link" to="/services/software-development">
                        <span>
                            <img className="bts_dropdown_icon" src={software} alt="software"/>
                        </span>
                        Software Development
                    </Link>
                </li>
                <li>
                    <Link className="bts_dropdown_link" to="/services/web-development">
                        <span>
                            <img className="bts_dropdown_icon" src={talent} alt="talent"/>
                        </span>
                        Web Development
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown