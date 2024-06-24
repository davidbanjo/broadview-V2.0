import React from 'react'
import TwoColumnSection from '../../../components/twoCol/TwoColumnSection'

const AdManagement = () => {
  return (
    <TwoColumnSection
        title="Ad Management"
        description="Get the most out of your advertising budget with our precise ad management services. We design, execute, and optimize campaigns across various platforms to reach your ideal audience and achieve your business goals."
        extra_code_1={
            <ul style={{ 
              listStyle: 'initial', 
              listStyleImage: "url('./img/check-Icon.png')"
            }}
              className='checkIcons flex flex-col gap-2 ml-40'
            >
                <li className=''>Campaign Strategy and Planning</li>
                <li className=''>Target Audience and Research</li>
                <li className=''>Ad Creation and Optimization</li>
                <li className=''>Performance Tracking and Reporting</li>
            </ul>
        }
        img_src="/img/assets/AdobeStock_Ads.jpeg"
        img_alt="social-media-image"
        overlay={true}
        testimonial={true}
        reverse={false}
        testimonial_review="Our social media presence has never been stronger thanks to their management!"
        client="Happy Client"
    />
  )
}

export default AdManagement