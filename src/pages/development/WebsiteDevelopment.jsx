import React from 'react'
import TwoColumnSection from '../../components/twoCol/TwoColumnSection'

const WebsiteDevelopment = () => {
  return (
    <TwoColumnSection
        title="Website Development"
        description="In today's digital-first landscape, a robust online presence is more than just a necessity—it's a statement. At Broadview Technical Solutions, we understand the pivotal role that well-architected web solutions play in driving business growth and enhancing user experiences. We Offer;"
        extra_code_1={
            <ul style={{ 
              listStyle: 'initial', 
              listStyleImage: "url('./img/check-Icon.png')"
            }}
              className='checkIcons flex flex-col gap-2 ml-40'
            >
                <li className=''>User-Centric Designs</li>
                <li className=''>Robust Functionality</li>
                <li className=''>Scalable Solutions</li>
                <li className=''>Integrated Approach</li>
            </ul>
        }
        img_src="/img/assets/AdobeStock_webdesign.jpeg"
        img_alt="social-media-image"
        overlay={true}
        testimonial={true}
        testimonial_review="Our social media presence has never been stronger thanks to their management!"
        client="Happy Client"
        reverse={true}
    />
  )
}

export default WebsiteDevelopment