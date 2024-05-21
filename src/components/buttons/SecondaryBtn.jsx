import { Link } from "react-router-dom"

const SecondaryBtn = ({ content, icon, color, type, main_icon, icon_position, url }) => {
    return (
        <Link to={url}>
            <button className={`bts_secondary_btn ${color} ${type} ${icon_position}`}>
                <>
                    { icon ? main_icon : ""}
                </>
                <>
                    { content }
                </>
            </button>
        </Link>
    )
}

export default SecondaryBtn