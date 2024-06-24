import React from 'react'

const ProjectImage = ({
    Image,
    title
}) => {
  return (
    <div className="bts_project_img" >
        <div className="bts_project_img_cont">
            <div>
                <img className="" src={Image} alt={title} />
                {/* <img className="" src={project.hero_img} alt={project.title} /> */}
            </div>
        </div>
    </div>
  )
}

export default ProjectImage

// removed code

// style={{ backgroundColor: `${color}` }}
{/* <img className='bts_project_logo' src={logo} alt="" /> */}