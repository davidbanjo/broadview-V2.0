import { Link, useParams } from "react-router-dom"
import projectData from "./projectdata"
// import CTA from './../../../../components/sections/cta-section/CTA';
import InfoCard from "../../../../components/infoCard/InfoCard"
import HeroTextReaveal from "../../../home/hero/HeroTextReveal"
import ProjectImage from "./ProjectImage"
import InfiniteScroll from "../../../../components/infinite-scroll/InfiniteScroll"

const Project = () => {

    const { id } = useParams()

    // console.log(id)

    const project = projectData.find(Projects => {
        return Projects.name.replace(/\s+/g, '-') === id
    })

    return (
        <div className="bts_project">
            {/* <div className="bts-spacer-x1"></div> */}
            <div className="bts_project_row">
                <div className="bts_project_col">
                    {/* Project Summary */}
                    <div className="bts_project_summary">
                        <div>
                            <div className="bts-spacer-x2"></div>
                            <div className="bts-spacer-x2"></div>
                            {/* <div className="bts-spacer-x2"></div>                */}
                            {/* <img className="bts_project_logo" src={project.logo} alt={project.title} /> */}
                            <HeroTextReaveal 
                                words={project.name}
                                delay={0.4}
                                className="!text-left bts-text-left"
                            />
                        </div>
                        <p>{project.desc}</p>
                    </div>
                    {/* <div className="bts_project_category">
                        {project.category.map((category) => (
                            <Link key={category.id} to={`/portfolio/category/${category.url}`}>
                                <p className="bts_not_clicked">{category.name}</p>
                            </Link>
                        ))   
                        }
                    </div> */}
                    <div className="bts-spacer-x2"></div>
                    <ProjectImage 
                        Image={project.url}
                        title={project.name}
                    />
                </div>
            </div>
            <div className="bts-spacer-x2"></div>
            <div className="bts-spacer-x2"></div>
            <div className="bts_project_row">
                <div className="bts_project_col bts_portfolio_details">
                    <div className="bts_about_client">
                        <div className="project-main">
                            <h3>{project.name}</h3>
                        </div>
                        <div className="project-sub">
                            <p style={{ fontSize: "17px" }}>{project.desc_1}</p>
                        </div>
                    </div>
                </div>
                <div className="bts_project_col bts_portfolio_details">
                    <div className="bts_about_client">
                        <div className="project-main">
                            <h3>Goals and Results</h3>
                        </div>
                        <div className="project-sub">
                            <p style={{ fontSize: "18px" }}>{project.testimonial}</p>
                        </div>
                    </div>
                </div>
                <div className="bts_project_col bts_portfolio_details">
                    <div className="bts_about_client">
                        <div className="project-main">
                            <h3>Visit</h3>
                        </div>
                        <div className="project-sub">
                            { project.link ? 
                                <a href={project.link}>
                                    <p style={{ fontSize: "18px" }}>{project.name} Website</p>
                                </a> :
                                <Link to={`https://www.${project.name.replace(/\s/g, '' )}.com`}>
                                    <p style={{ fontSize: "18px" }}>{project.name} Website</p>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bts-spacer-x1"></div>
            <div className="bts-spacer-x1"></div>
            
            <InfiniteScroll extra_css="bg-[#242424]" />
            <div>
                <div>
                    {/* Challenge */}
                    {/* Gallery */}
                    {/* Client CTA */}
                    <InfoCard
                        src="/img/broadview logo_var.png"
                        alt="broadview-logo"
                        content="Experience the intersection of quality and innovations where it matters"
                        cta="CONTACT US"
                        className="relative"
                        url="/contact"
                    />
                </div>
            </div>
        </div>
    )
}

export default Project

// removed code 

{/* <div className="bts_project_row">
                <div className="bts_project_col bts_project_about-client">
                    About Client
                    <div>
                        <h2>About <span className="bts_colored_text">{project.title}</span></h2>
                        <p>{project.desc}</p>
                    </div>
                    <img src={project.mockup_1} alt={project.title} />
                </div>
            </div> */}


            // TEstimonial 

            // <div className="bts_project_row">
            //     <div className="bts_project_col">
            //         <p className="bts_project_testimonial">{project.testimonial}</p>
            //         <p className="bts_project_testimonial_author">{project.title}</p>
            //     </div>
            // </div>