import React from 'react'
import { InfiniteMovingText } from '../../components/ui/infinite-moving-text'
import StaffingSolutionCard from './StaffingSolutionCard'

const StaffingSolutions = () => {
  return (
    <div className='bts-staffing-solutions'>
        <div className='bts-staffing-solutions-row'>
            <div className='bts-staffing-solutions-col'>
            <InfiniteMovingText title='Staffing Solutions' className='pt-10 pb-20' />
            </div>
        </div>
        <div className='bts-staffing-solutions-row flex gap-10 max-w-full w-[1240px] mx-auto'>
            <StaffingSolutionCard 
                image="/img/assets/AdobeStock_Hiring.jpeg"
                title="Direct Hire"
                desc="We understand the sensitivity of certain positions due to the nature of the job, experience level, or financial implications. Broadview offers direct hire services to help you seamlessly fill both hybrid and on-site roles, employing best practices and efficient strategies to deliver top talent."
            />
            <StaffingSolutionCard 
                image="/img/assets/rpo.jpg"
                title="Recruitment Process Outsourcing (RPO)"
                desc="Broadview acts as an extension of your internal hiring function, significantly enhancing and expediting the recruitment process. Our scalable RPO model can be customized to align with specific business needs. By integrating our Team, Technology, and Framework, we deliver precise solutions tailored to your requirements."
            />
            <StaffingSolutionCard 
                image="/img/assets/staffing.jpg"
                title="Custom Staffing Solutions"
                desc="Your business is unique, you shouldn’t be forced to fit into a cookie cutter solution from other staffing agencies. Broadview can customize a staffing program to fit your specific needs and goals."
            />
        </div>
    </div>
  )
}

export default StaffingSolutions