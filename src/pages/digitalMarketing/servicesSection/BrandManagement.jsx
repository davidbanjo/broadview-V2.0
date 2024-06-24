import React from 'react'
import TwoColumnSection from '../../../components/twoCol/TwoColumnSection'

const BrandManagement = () => {
  return (
    <TwoColumnSection
        title="Brand Management"
        description="Your brand is your business’s identity. Our brand management services ensure a consistent and powerful brand image across all channels. We help you build, maintain, and enhance your brand to stand out in a crowded market."
        extra_code_1={
            <ul style={{ 
              listStyle: 'initial', 
              listStyleImage: "url('./img/check-Icon.png')"
            }}
              className='checkIcons flex flex-col gap-2 ml-40'
            >
                <li className=''>Brand Strategy Development</li>
                <li className=''>Brand Identity Design</li>
                <li className=''>Brand Messaging and Voice</li>
                <li className=''>Consistency Across all Platforms</li>
            </ul>
        }
        img_src="/img/assets/AdobeStock_brand.jpeg"
        img_alt="social-media-image"
        overlay={true}
        testimonial={true}
        reverse={true}
        testimonial_review="Their brand management expertise helped us redefine our image and boost our market presence."
        client="Satisfied Client"
    />
  )
}

export default BrandManagement