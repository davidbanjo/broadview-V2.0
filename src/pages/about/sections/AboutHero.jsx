import React from 'react'
import HeroTextReaveal from '../../home/hero/HeroTextReveal'
import { motion } from 'framer-motion'
import ButtonMagic from '../../../components/buttons/ButtonMagic'
import { BackgroundBeams } from '../../../components/ui/background-beams'
import { Spotlight } from '../../../components/ui/Spotlight'
import { Link } from 'react-router-dom'

const  AboutHero = () => {
  return (
    <div className='bts-about-hero max-w-full w-[1240px] mx-auto pt-[10rem] pb-[5rem] px-4'>
        <div className='bts-about-hero-row mx-auto'>
        <Spotlight
            className="-top-10 left-0 md:left-60 md:-top-40"
            fill="#ccc"
        />
        <BackgroundBeams />
            <div className='bts-about-hero-col flex flex-col gap-10'>
                <HeroTextReaveal
                    words="Who we are"
                    delay={0.4}
                />
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        delay: 1.3,
                        duration: 1
                    }}
                    className='text-center max-w-[100%] w-[100%] mx-auto' 
                >
                    At Broadview Technical Solutions, we're not just a service provider—we're your partner in driving success. We understand the intricacies of a dynamic business landscape, offering bespoke software solutions and connecting you with the industry’s top tech talent. Our team is committed to delivering products and services designed to streamline your operations, boost productivity, and facilitate growth. With Broadview, you gain an ally dedicated to empowering your business with unmatched talent and cutting-edge technology solutions
                </motion.p>
                <Link style={{ width: '100%' }} to='/contact' >
                    <ButtonMagic content="Get Started" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutHero