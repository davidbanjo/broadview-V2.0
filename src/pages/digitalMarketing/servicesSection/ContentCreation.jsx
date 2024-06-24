import React from 'react'
import TwoColumnSection from '../../../components/twoCol/TwoColumnSection'

const ContentCreation = () => {
  return (
    <TwoColumnSection
        title="Content Creation"
        description="High-quality content is the cornerstone of any successful digital strategy. Our creative team produces engaging content that captivates your audience and drives conversions. From blog posts to videos, we bring your brand’s story to life."
        extra_code_1={
            <ul style={{ 
              listStyle: 'initial', 
              listStyleImage: "url('./img/check-Icon.png')"
            }}
              className='checkIcons flex flex-col gap-2 ml-40'
            >
                <li className=''>Blog posts and articles</li>
                <li className=''>Video Production</li>
                <li className=''>Infographics and Visuals</li>
                <li className=''>E-books and Whitepapers</li>
            </ul>
        }
        img_src="/img/assets/AdobeStock_ContentCreation.jpeg"
        img_alt="social-media-image"
        overlay={true}
        testimonial={true}
        reverse={true}
        testimonial_review="Our social media presence has never been stronger thanks to their management!"
        client="Happy Client"
    />
  )
}

export default ContentCreation