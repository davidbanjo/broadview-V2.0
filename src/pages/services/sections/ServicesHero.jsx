import React from 'react'
import HeroTextReaveal from '../../home/hero/HeroTextReveal'
import { BackgroundBeams } from '../../../components/ui/background-beams'
import { Spotlight } from '../../../components/ui/Spotlight'
import '../service.css'

const ServicesHero = () => {
  return (
    <div className="bts_portfolio-hero pt-40 pb-32 !z-[-1] max-w-[100%] w-[1240px] mx-auto">
        <Spotlight
            className="-top-10 left-0 md:left-60 md:-top-40"
            fill="#ccc"
        />
        <HeroTextReaveal 
            words="The Broadview Advantage"
            delay={0.4}
        />
        <div className='bts-spacer-x1'></div>
        <p className='text-center max-w-full w-[1000px] mx-auto'>
        Broadview Technical Solutions drives business success through comprehensive services in staffing and recruiting, digital marketing, software development, and project management. We connect you with top-tier talent, craft innovative marketing strategies, develop tailored software solutions, and manage projects with precision. Partner with us to elevate your business to new heights.
        </p>
        <BackgroundBeams />
        
    </div>
  )
}

export default ServicesHero