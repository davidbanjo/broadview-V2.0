
import ButtonMagic from '../../../components/buttons/ButtonMagic'
import InfoCard from '../../../components/infoCard/InfoCard'
import { Spotlight } from '../../../components/ui/Spotlight'
import { BackgroundBeams } from '../../../components/ui/background-beams'
import HeroTextReaveal from './HeroTextReveal'
import { motion } from 'framer-motion'
import "./hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {

    // ${<span className='bts_colored_text'>Business</span>}
    const  words = `Empowering Your Business with Talent and Technology`
  return (
    <div className="bts_hero bg-black">
        <Spotlight
            className="-top-10 left-0 md:left-60 md:-top-40"
            fill="#ccc"
        />
        <BackgroundBeams />
        <div className="bts_hero_row">
            <HeroTextReaveal 
                words={words}
                delay={0.4}
                className="fade-up mobile-padding"
            />
            {/* <h1 className="bts_hero_text">
                Empowering Your <span className='bts_colored_text'>Business</span> with Talent and Technology
            </h1> */}
            <motion.p 
                className="bts_hero_desc mobile-padding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 1,
                    delay: 2
                 }}
            >
                Broadview Technical Solutions transforms businesses with exceptional staffing and recruiting, cutting-edge digital marketing, bespoke software development, and efficient project management. We connect you with top talent, create impactful marketing strategies, develop tailored software solutions, and manage projects seamlessly. Discover how Broadview can elevate your business to new heights!
            </motion.p>
            <Link to="/about" >
                <ButtonMagic content="Learn More" />
            </Link>
            <InfoCard
                src="img/broadview logo_var.png"
                alt="broadview-logo"
                content="Experience the intersection of quality and innovations where it matters"
                cta="Contact Us" 
                url="/contact"
            />
        </div>
        
    </div>
  )
}

export default Hero