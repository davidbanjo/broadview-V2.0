import React from 'react'
import HeroTextReaveal from '../home/hero/HeroTextReveal'
import { BackgroundBeams } from '../../components/ui/background-beams'
import { Spotlight } from '../../components/ui/Spotlight'
import ButtonMagic from '../../components/buttons/ButtonMagic'
import Services from './servicesSection/Services'
import Faq from '../../components/faq/Faq'
import { Link } from 'react-router-dom'

const DigitalMarketing = () => {
  return (
    <div className='bts-digital-marketing'>
        <div className='max-w-[100%] w-[1240px] mx-auto mt-[50px] py-[6rem] pt-[8rem] flex flex-col items-center gap-20'>
            <Spotlight 
                className="-top-10 left-0 md:left-60 md:-top-40"
                fill="#ccc"
            />
            <BackgroundBeams />
            <HeroTextReaveal
                words="Unlock Your Brand’s Potential with Our Comprehensive Digital Marketing Services"
                delay={0.4}
                className="fade-up"
            />
            <Link style={{ width: '100%' }} to="/contact">
                <ButtonMagic
                    content="Get Started"
                />
            </Link>
        </div>
        <Services />
        <Faq />
    </div>
  )
}

export default DigitalMarketing