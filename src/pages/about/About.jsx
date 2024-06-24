import React from 'react'
import AboutHero from './sections/AboutHero'
import AboutSection1 from './sections/AboutSection1'
import CTA from '../../components/cta/CTA'


const About = () => {
  return (
    <div>
        <div className='max-w-[100%] mx-auto'>
            <AboutHero />
            <AboutSection1 />
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <CTA />
        </div>
    </div>
  )
}

export default About

{/* <InfoCard
                src="img/broadview logo_var.png"
                alt="broadview-logo"
                content="Experience the intersection of quality and innovations where it matters"
                cta="Learn More" 
                className="relative"
            /> */}
            {/* <VideoContainer 
                src="https://www.youtube.com/embed/Pz_DlcCh0Ws?autoplay=1&loop=1&controls=0&showinfo=0&start=2&end=37&mute=1&playlist=Pz_DlcCh0Ws&rel=0&modestbranding=1" 
                title="Broadview Tech Website Presentation Video"
            /> */}
            {/* <AboutSection2 /> */}
            {/* <div className='bts-spacer-x2'></div> */}
            {/* <div className='max-w-[100%] flex flex-col gap-10 py-16' style={{ paddingTop: "8rem" }}>
                <div className='max-w-[100%] w-[1240px] mx-auto flex justify-between'>
                    <h2>
                        Our Portfolio
                    </h2>
                    <PrimaryBtn 
                        value="View All"
                        link="/portfolio"
                    />
                </div>
                <InfiniteScroll
                    height='32rem'
                    extra_css={`border`}
                />
            </div> */}
            {/* <div className='bts-spacer-x2'></div> */}