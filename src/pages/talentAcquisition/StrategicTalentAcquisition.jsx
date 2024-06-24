import React from 'react'
import HeroTextReaveal from '../home/hero/HeroTextReveal'
import { motion } from 'framer-motion'
import { BackgroundBeams } from '../../components/ui/background-beams'
import { Spotlight } from '../../components/ui/Spotlight'
import TAProcess from './TAProcess'
import ButtonMagic from '../../components/buttons/ButtonMagic'
import StaffingSolutions from './StaffingSolutions'
import Faq from '../../components/faq/Faq'
import SoftwareServices from './SoftwareServices'
import InfoCard from '../../components/infoCard/InfoCard'
import { Link } from 'react-router-dom'

const StrategicTalentAcquisition = () => {
  return (
    <div className='bts-talent-acquisition'>
        <div className='max-w-[100%] w-[1240px] mx-auto py-[8rem] pt-[10rem] flex flex-col justify-center gap-20 bts-talent-acquisition-hero'>
            <Spotlight 
                className="-top-10 left-0 md:left-60 md:-top-40"
                fill="#ccc"
            />
            <BackgroundBeams />
            <HeroTextReaveal
                words="Staffing & Recruiting"
                delay={0.4}
                className="fade-up"
            />
            <motion.p 
              className="bts_hero_desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                  delay: 1.3,
                  duration: 1
               }}
            >
              Broadview Technical Solutions specializes in a comprehensive recruitment strategy that’s meticulously designed to attract, identify, and onboard top-tier talent that aligns with your business objectives and culture. Our approach is holistic, encompassing a full understanding of the talent landscape and your industry's unique demands.
            </motion.p>
            <Link style={{ width: '100%' }} to="/contact">
              <ButtonMagic
                content="Get Started"
              />
            </Link>
        </div>
        {/* <InfoCard
          src="/img/broadview logo_var.png"
          alt="broadview-logo"
          content="Experience the intersection of quality and innovations where it matters"
          cta="Learn More"
          className="relative"
        /> */}
        <p className='py-20 max-w-full w-[1240px] mx-auto  text-[21px] bts-talent-acquisition-body-text'>
            With a commitment to integrity and a passionate pursuit of connecting great people with great organizations, Broadview Technical Solutions goes beyond being a mere pipeline of talent. Leveraging our dedicated core team and a robust track record in the industry, we ensure rapid delivery of the right skills to our clients, efficiently connecting you with the ideal team member for each job, thereby reducing turnover and costs. Our approach is based on understanding your needs, requirements, and business goals, enabling us to help you efficiently onboard and retain highly qualified candidates.
            <br /><br />To further enhance your staffing experience, our recruitment funnel is meticulously designed to minimize the risk of wrong hires, leveraging our market knowledge and processes. We ensure that you meet the right candidate every time, thanks to our team's comprehensive vetting and matching processes. Broadview Technical Solutions is dedicated to making a significant impact with every placement, helping businesses thrive by partnering with the most talented candidates globally.
        </p>
        <StaffingSolutions />
        <div className='bts-spacer-x2'></div>
        <TAProcess />
        <div className='bts-spacer-x2'></div>
        <SoftwareServices />
        <div className='bts-spacer-x2'></div>
        <Faq 
          service="staffing"
        />
    </div>
  )
}

export default StrategicTalentAcquisition