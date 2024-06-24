
import ButtonMagic from '../../components/buttons/ButtonMagic'
import { Spotlight } from '../../components/ui/Spotlight'
import { BackgroundBeams } from '../../components/ui/background-beams'
import HeroTextReaveal from '../home/hero/HeroTextReveal'
import { motion } from 'framer-motion'
import "./development.css"
import { Link } from 'react-router-dom'

const DevelopmentHero = () => {

    // ${<span className='bts_colored_text'>Business</span>}
    const  words = `Crafting Superior Software Solutions to Propel Your Business Forward`

  return (
    <div className="bg-inherit !h-max pt-48 bts-development_hero max-w-full w-[1240px] mx-auto">
        <Spotlight
            className="-top-10 left-0 md:left-60 md:-top-40"
            fill="#ccc"
        />
        <BackgroundBeams />
        <div className="bts_hero_row">
            <HeroTextReaveal 
                words={words}
                delay={0.4}
                className="fade-up"
            />
            {/* <h1 className="bts_hero_text">
                Empowering Your <span className='bts_colored_text'>Business</span> with Talent and Technology
            </h1> */}
            <motion.p 
                className="bts_hero_desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    delay: 3.3,
                    duration: 1
                 }}
            >
                Broadview Technical Solutions’ Software Development Services are designed to offer innovative and bespoke software solutions that align with your business's unique requirements and challenges.From MVP to fully custom-made software solutions, we can turn your ideas into pixels.
            </motion.p>
            <Link style={{ width: '100%' }} to="/contact">
                <ButtonMagic content="Get Started" />
            </Link>
        </div>
        
    </div>
  )
}

export default DevelopmentHero