import React from 'react'
import { FaChartLine, FaComments, FaTrophy } from 'react-icons/fa'
import Image from '../../../components/image/Image'
import TwoColumnSection from '../../../components/twoCol/TwoColumnSection'
import { Icon } from 'lucide-react'
import "./servicessection.css"

const SocialMedia = () => {
  return (
    <TwoColumnSection
        title="Social Media Marketing"
        description="Maximize your brand’s presence on social media with our expert management services. From crafting compelling posts to engaging with your audience, we ensure your social media channels are always buzzing with activity and growing your brand’s influence."
        extra_code_1={
            <ul style={{ 
              listStyle: 'initial', 
              listStyleImage: "url('./img/check-Icon.png')"
            }}
              className='checkIcons flex flex-col gap-2 ml-40'
            >
                <li className=''>Customized social media strategies</li>
                <li className=''>Content creation and scheduling</li>
                <li className=''>Community Engagement</li>
                <li className=''>Performance analytics and reporting</li>
            </ul>
        }
        img_src="/img/assets/good-social-media-dashboard-example.png"
        img_alt="social-media-image"
        // extra_code_2={
        //     <div className='w-[50%] flex items-center'>
        //         <div className='py-3 px-4 w-max rounded-full bg-[#4A90E2] flex items-center gap-5'>
        //             <p className='text-[18px]'>Engage</p> 
        //             <FaComments size={15} />
        //         </div>
        //         <div className='py-3 px-4 w-max rounded-full bg-[#28a745] flex items-center gap-5'>
        //             <p className='text-[18px]'>Grow</p>
        //             <FaChartLine size={15} />
        //         </div>
        //         <div className='py-3 px-4 w-max rounded-full bg-[#FFD700] flex items-center gap-5'>
        //             <p className='text-[18px]'>Succeed</p>
        //             <FaTrophy size={15}/>
        //         </div>
        //     </div>
        // }
        overlay={true}
        testimonial={true}
        testimonial_review="Our social media presence has never been stronger thanks to their management!"
        client="Happy Client"
    />
  )
}

export default SocialMedia