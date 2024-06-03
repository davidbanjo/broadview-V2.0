import React from 'react'
import HeroTextReaveal from '../../home/hero/HeroTextReveal'
import { motion } from 'framer-motion'
import './contact-hero.css'

const ContactHero = () => {

    const word_1 = `Contact Us`
    const word_2 = `Let's Connect Online `

  return (
    <div className='bts_contact-hero'>
        <div className='bts_contact-hero-row'>
            <div className='bts_contact-hero-col'>
                <HeroTextReaveal 
                    words={word_1}
                    delay={0.4}
                />
                <HeroTextReaveal 
                    words={word_2}
                    delay={0.8}
                />
            </div>
        </div>
    </div>
  )
}

export default ContactHero