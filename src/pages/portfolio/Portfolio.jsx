import HeroTextReaveal from "../home/hero/HeroTextReveal"
import ProjectCard from "./sections/projects/ProjectCard"
import Tab from "./sections/tabs/Tab"
import './portfolio.css'
import { Spotlight } from "../../components/ui/Spotlight"
import { BackgroundBeams } from "../../components/ui/background-beams"

const Portfolio = () => {
    return (
        <div className="bts_portfolio max-w-[100%] w-[1540px] mx-auto">
            {/* <div className="bts-spacer-x1"></div> */}
            <Spotlight
                className="-top-10 left-0 md:left-60 md:-top-40"
                fill="#ccc"
            />
            {/* <BackgroundBeams /> */}
            <div className="bts_portfolio-hero py-40 !z-[-1]">
                <HeroTextReaveal 
                    words="Prior Work Samples"
                    delay={0.4}
                />
            </div>
            {/* <Tab /> */}
            <div className="bts-spacer-x1"></div>
            <ProjectCard />
            <div className="bts-spacer-x2"></div>
        </div>
    )
}

export default Portfolio