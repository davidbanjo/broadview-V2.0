import projectData from "./projectdata"
import "./projectcard.css"
import { Link } from "react-router-dom"

const ProjectCard = () => {
    return (
        <div className="bts_project_cards">
            { projectData.map((project) => (
            <Link key={project.id} to={`/portfolio/${project.name.replace(/\s+/g, '-')}`} className="bts_project-card_cont">
                <div className={`bts_project-card ${project.img}`} ></div>
                {/* <div className="bts_category_cont">
                    {project.category.map((category) => (
                        <p key={category.id}><span>{category.name}</span></p>
                    ))}
                </div> */}
                <h3>{project.name}</h3>
            </Link>
            ))}
        </div>
    )
}

export default ProjectCard