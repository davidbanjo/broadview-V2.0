import { Link, useParams } from "react-router-dom"
import projectData from "./projectdata"
// import CTA from './../../../../components/sections/cta-section/CTA';
import InfoCard from "../../../../components/infoCard/InfoCard"
import HeroTextReaveal from "../../../home/hero/HeroTextReveal"

const Project = () => {

    const { id } = useParams()

    // console.log(id)

    const project = projectData.find(Projects => {
        return Projects.title.replace(/\s+/g, '-') === id
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
                                words={project.title}
                                delay={0.4}
                                className="!text-left bts-text-left"
                            />
                        </div>
                        <p>{project.desc}</p>
                    </div>
                    <div className="bts_project_category">
                        {project.category.map((category) => (
                            <Link key={category.id} to={`/portfolio/category/${category.url}`}>
                                <p className="bts_not_clicked">{category.name}</p>
                            </Link>
                        ))   
                        }
                    </div>
                    <div className="bts_project_img">
                        <img className="" src={project.hero_img} alt={project.title} />
                    </div>
                </div>
            </div>
            <div className="bts-spacer-x1"></div>
            <div className="bts_project_row">
                <div className="bts_project_col">
                    {/* CLient Testimonial */}
                    <p className="bts_project_testimonial">{project.testimonial}</p>
                    <p className="bts_project_testimonial_author">{project.title}</p>
                </div>
            </div>
            <div className="bts-spacer-x1"></div>
            <div className="bts_project_row">
                <div className="bts_project_col bts_project_about-client">
                    {/* About Client */}
                    <div>
                        <h2>About <span className="bts_colored_text">{project.title}</span></h2>
                        <p>{project.desc}</p>
                    </div>
                    <img src={project.mockup_1} alt={project.title} />
                </div>
            </div>
            <div>
                <div>
                    {/* Challenge */}
                    {/* Gallery */}
                    {/* Client CTA */}
                    <InfoCard
                        src="img/broadview logo_var.png"
                        alt="broadview-logo"
                        content="Experience the intersection of quality and innovations where it matters"
                        cta="CONTACT US"
                    />
                </div>
            </div>
        </div>
    )
}

export default Project