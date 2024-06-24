import React from 'react'
import './service.css'
import ServicesHero from './sections/ServicesHero'
import ServicesBoxes from './sections/ServicesBoxes'
import InfoCard from '../../components/infoCard/InfoCard'
import CTA from '../../components/cta/CTA'
import Faq from '../../components/faq/Faq'
import InfiniteScroll from '../../components/infinite-scroll/InfiniteScroll'

const Service = () => {
  return (
    <div className='bts-services'>
        <div className='bts-services-row'>
            <div className='bts-services-col'>
                <ServicesHero />
                <ServicesBoxes />
                <div className='bts-spacer-x2'></div>
                <InfoCard
                  src="img/broadview logo_var.png"
                  alt="broadview-logo"
                  content="Experience the intersection of quality and innovations where it matters"
                  cta="Learn More" 
                  className="relative"
                  url="/contact"
                />
                {/* <InfiniteScroll 
                  height='40rem'
                /> */}
                {/* <Faq /> */}
                <CTA />
            </div>
        </div>
    </div>
  )
}

export default Service