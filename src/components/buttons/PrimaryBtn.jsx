import { Link } from "react-router-dom"
import "./buttons.css"

const PrimaryBtn = ({ value, type, link }) => {
    return (
        <Link to={link}>
            <button className={`bts_primaryBtn ${type}`}>
                {value}
            </button>
        </Link>
    )
}

export default PrimaryBtn