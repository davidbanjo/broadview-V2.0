import "./development.css"

const ProcessCard = ({ number, icon, title, desc }) => {
    return (
        <div className="bts_process-card">
            <div className="bts_counter_cont">{number}</div>
            {icon === false ? "" :
                <div>{icon}</div>
            }
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
}

export default ProcessCard