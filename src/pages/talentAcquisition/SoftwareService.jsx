const SoftwareService = ({ icon, title, edge_box, bottom_box, desc }) => {
    return (
        <div className={`bts_software_service ${edge_box} ${bottom_box} flex flex-col justify-center`}>
            <div>{icon}</div>
            <h5>{title}</h5>
            {/* <p>{desc}</p> */}
        </div>
    )
}

export default SoftwareService