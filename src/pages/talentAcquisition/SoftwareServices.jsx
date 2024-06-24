// import Heading from "../../../../components/headings/Headings"
import Blockchain from "../../components/icons/Blockchain"
import Code from "../../components/icons/Code"
import Coding from "../../components/icons/Coding"
import Design from "../../components/icons/Design"
import Devops from "../../components/icons/Devops"
import IOT from "../../components/icons/IOT"
import MobileDev from "../../components/icons/MobileDev"
import Server from "../../components/icons/Server"
import { InfiniteMovingText } from "../../components/ui/infinite-moving-text"
import SoftwareService from "./SoftwareService"
import './software.css'

const SoftwareServices = () => {
    return (
        <div className="bts_software_services">
            <div className="bts_software_services_row">
                <div className="bts_software_services_col">
                    <InfiniteMovingText
                        title="Areas of Expertise"
                        className="pt-4"
                    />
                    <div className="bts_software_services_container">
                        <SoftwareService
                            icon={<Coding width={35} height={35} color="white" />}
                            title="Software Engineering"
                            edge_box="bts_true"
                            // desc="Building tailored software solutions to meet specific business needs."
                        />
                        <SoftwareService
                            icon={<Devops width={40} height={40} color="white" />}
                            title="DevOps"
                            edge_box="bts_true"
                            bottom_box="bts_false"
                            // desc="Implementing DevOps practices to automate software development and deployment processes."
                        />
                        <SoftwareService
                            icon={<Code width={35} height={35} color="white" />}
                            title="Machine Learning"
                            edge_box="bts_true"
                            // desc=" This includes frontend development (HTML, CSS, JS) and backend development"
                        />
                        <SoftwareService
                            icon={<MobileDev width={35} height={35} color="white" />}
                            title="Project Management"
                            edge_box="bts_true"
                            // desc="Developing applications for mobile devices, including iOS and Android platforms"
                        />
                        <SoftwareService
                            icon={<Design width={35} height={35} color="white" />}
                            title="Engineering"
                            edge_box="bts_true"
                            // desc="Creating user-friendly and visually appealing interfaces for software applications."
                        />
                        <SoftwareService
                            icon={<Server width={40} height={40} color="white" />}
                            title="IT Technical Support"
                            edge_box="bts_false"
                            bottom_box="bts_true"
                            // desc="Using cloud platforms like AWS, Azure, or Google Cloud to host, scale, and manage applications."
                        />
                        <SoftwareService
                            icon={<Blockchain width={35} height={35} color="white" />}
                            title="Nursing"
                            edge_box="bts_false"
                            // desc="Building decentralized applications and smart contracts using blockchain technology."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwareServices