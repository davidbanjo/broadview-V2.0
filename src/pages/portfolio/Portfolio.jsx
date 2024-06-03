import ProjectCard from "./sections/projects/ProjectCard"
import Tab from "./sections/tabs/Tab"

const Portfolio = () => {
    return (
        <div className="bts_portfolio">
            <div className="bts-spacer-x1"></div>
            <Tab />
            <div className="bts-spacer-x1"></div>
            <ProjectCard />
            <div className="bts-spacer-x2"></div>
        </div>
    )
}

export default Portfolio