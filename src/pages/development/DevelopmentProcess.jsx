// import Heading from "../../../../components/headings/Headings"
import Binoculars from "../../components/icons/Binoculars"
import Code from "../../components/icons/Code"
import Doc from "../../components/icons/Doc"
import Rocket from "../../components/icons/Rocket"
import { InfiniteMovingText } from "../../components/ui/infinite-moving-text"
import ProcessCard from "./ProcessCard"

const DevelopmentProcess = () => {
    return (
        <div className="bts_software_process max-w-full w-[1240px] mx-auto !items-start">
            <div className="bts_software_process_col">
                {/* <Heading 
                    align="bts_center"
                    smallHeading="OUR PROCESS" 
                    largeHeading="These are the steps we'll take your project through"
                /> */}
                <InfiniteMovingText
                    title="OUR DEVELOPMENT PROCESS"
                    className="py-20"
                />
                <div className="bts-spacer-x2"></div>
                <div className="bts_software_process_row">
                <ProcessCard
                    number="01."
                    icon={<Binoculars  width="40px" height="40px" color="white" />}
                    title="Initial Consultation"
                    desc="We start with a detailed consultation to understand your business needs and objectives, as well as the specific challenges you face.
                    The dialogue helps in crafting a preliminary vision for the solution, establishing the project's scope, and setting mutual expectations.
                    "
                />
                <ProcessCard
                    number="02."
                    icon={<Code width="40px" height="40px" color="white" />}
                    title="Requirement Analysis"
                    desc="Our analysts dive deep into the project requirements, studying the intricacies of your business model and market.
                    This phase results in a comprehensive requirement specification document, which guides subsequent stages.
                    "
                />
                <ProcessCard
                    number="03."
                    icon={<Doc width="40px" height="40px" color="white" />}
                    title="Planning and Design"
                    desc="We outline the project’s framework and timeline.
                    Our designers craft intuitive and user-friendly interfaces, while our architects develop a robust, secure, and scalable system architecture.
                    "
                />
                <ProcessCard
                    number="04."
                    icon={<Rocket width="40px" height="40px" color="white" />}
                    title="Development"
                    desc="Coding begins with adherence to the best industry practices and standards.
                    We incorporate agile methodologies, allowing for flexibility and accommodation of changes even during the development phase.
                    "
                />
                <ProcessCard
                    number="05."
                    icon={<Rocket width="40px" height="40px" color="white" />}
                    title="Quality Assurance"
                    desc="Every module undergoes rigorous testing to identify and rectify any bugs, errors, or inconsistencies.
                    We assure the final product aligns with the requirement specification and meets quality standards.                    
                    "
                />
                <ProcessCard
                    number="06."
                    icon={<Rocket width="40px" height="40px" color="white" />}
                    title="Deployment"
                    desc="The system is deployed in a staging environment first for final review and approval.
                    Once validated, it’s launched in the live environment for users to access.                    
                    "
                />
                <ProcessCard
                    number="06."
                    icon={<Rocket width="40px" height="40px" color="white" />}
                    title="Maintenance and Support"
                    desc="Post-launch, we offer continuous support and maintenance services.
                    From fixing issues to upgrading features, we ensure the software remains up-to-date and in sync with your evolving business needs.                                        
                    "
                />
                <ProcessCard
                    number="06."
                    icon={<Rocket width="40px" height="40px" color="white" />}
                    title="Continuous Improvement"
                    desc="We believe in ongoing enhancement. Based on user feedback and market trends, we propose and implement improvements to keep the software relevant and valuable to your business."
                />
                </div>  
            </div>
        </div>
    )
}

export default DevelopmentProcess