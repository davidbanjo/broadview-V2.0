
import ButtonMagic from '../../../components/buttons/ButtonMagic'
import InfoCard from '../../../components/infoCard/InfoCard'
import { Spotlight } from '../../../components/ui/Spotlight'
import { BackgroundBeams } from '../../../components/ui/background-beams'
import HeroTextReaveal from './HeroTextReveal'
import { motion } from 'framer-motion'
import "./hero.css"

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
                Welcome to MailJet, the best transactional email service on the web.
                We provide reliable, scalable, and customizable email solutions for
                your business. Whether you&apos;re sending order confirmations,
                password reset emails, or promotional campaigns, MailJet has got you
                covered.
            </motion.p>
            <ButtonMagic content="Get Started" />
            <InfoCard
                src="img/broadview logo_var.png"
                alt="broadview-logo"
                content="Experience the intersection of quality and innovations where it matters"
                cta="Learn More" 
            />
        </div>
        
    </div>
  )
}

export default Hero