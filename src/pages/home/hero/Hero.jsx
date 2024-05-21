
import { BackgroundBeams } from '../../../components/ui/background-beams'
import "./hero.css"

const Hero = () => {
  return (
    <div className="bts_hero">
        <BackgroundBeams />
        <div className="bts_hero_row">
            <h1 className="bts_hero_text">
                Empowering Your <span className='bts_colored_text'>Business</span> with Talent and Technology
            </h1>
            <p className="bts_hero_desc">
                Welcome to MailJet, the best transactional email service on the web.
                We provide reliable, scalable, and customizable email solutions for
                your business. Whether you&apos;re sending order confirmations,
                password reset emails, or promotional campaigns, MailJet has got you
                covered.
            </p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2A388F_0%,#FA931C_50%,#2A388F_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Get Started
                </span>
            </button>
        </div>
        
    </div>
  )
}

export default Hero