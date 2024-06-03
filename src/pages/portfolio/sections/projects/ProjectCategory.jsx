import { useLocation, useParams } from "react-router"
import NoProjectCategory from "./NoProjectCategory"
import projectData from "./projectdata"
import { Link } from "react-router-dom"
import Tab from "../tabs/Tab"

const ProjectCategory = () => {

    const { pathname } = useLocation()

    const { category } = useParams()

    const projects = projectData.filter(project => {
        if (pathname === "/portfolio") {
            return project
        }
        else {
            return project.category.some(projectCategory => projectCategory.url === category);
        }
    })
    
    // project.category.forEach(projectCategory => {
    //     if (projectCategory.url === category) {
    //         console.log(projectCategory, category)
    //         return project
    //     }
    // })
    // console.log(projects)

    return (
        <>
            <div className="bts-spacer-x1"></div>
            <Tab />
            <div className="bts-spacer-x1"></div>
            <div className="bts_project_cards">
                {projectData.length !== 0 ? projects.map((project) => (
                <Link to={`/portfolio/${project.title.replace(/\s+/g, '-')}`} className="bts_project-card_cont" key={project.id}>
                    <div className={`bts_project-card ${project.img}`} ></div>
                    <div className="bts_category_cont">
                    {project.category.map((category) => (
                        <p><span>{category.name}</span></p>
                    ))}
                    </div>
                    <h3>{project.title}</h3>
                </Link>
                )) : 
                <NoProjectCategory />}
            </div>
        </>
    )
}

export default ProjectCategory

