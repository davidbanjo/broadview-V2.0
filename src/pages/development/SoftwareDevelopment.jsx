import React from 'react'
import TwoColumnSection from '../../components/twoCol/TwoColumnSection'

const SoftwareDevelopment = () => {
  return (
    <TwoColumnSection
        title="Software Development"
        description="Broadview Technical Solutions’ Software Development Services are designed to offer innovative and bespoke software solutions that align with your business's unique requirements and challenges.From MVP to fully custom-made software solutions, we can turn your ideas into pixels. Some of our software development services;"
        extra_code_1={
            <ul style={{ 
              listStyle: 'initial', 
              listStyleImage: "url('./img/check-Icon.png')"
            }}
              className='checkIcons flex flex-col gap-2 ml-40'
            >
                <li className=''>Custom Software Development</li>
                <li className=''>Mobile App Development</li>
                <li className=''>DevOps Services</li>
              <li className=''>IoT (Internet of Things)</li>
            </ul>
        }
        img_src="/img/assets/AdobeStock_Software.jpeg"
        img_alt="social-media-image"
        overlay={true}
        testimonial={true}
        testimonial_review="Our social media presence has never been stronger thanks to their management!"
        client="Happy Client"
    />
  )
}

export default SoftwareDevelopment