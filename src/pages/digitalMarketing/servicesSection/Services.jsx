import React from 'react'
import SocialMedia from './SocialMedia'
import { HeroHighlight, Highlight } from '../../../components/ui/hero-highlight'
import { motion } from 'framer-motion'
import { StickyScrollReveal } from './ServicesStickyScroll'
import { InfiniteMovingText } from '../../../components/ui/infinite-moving-text'
import ContentCreation from './ContentCreation'
import AdManagement from './AdManagement'
import BrandManagement from './BrandManagement'
import InfiniteScroll from '../../../components/infinite-scroll/InfiniteScroll'

const Services = () => {
  return (
    <div className='bts-dm-services'>
        <div className='bts-dm-services-row'>
            <div className='bts-dm-services-col pt-10'>
                {/* <HeroHighlight>
                    <motion.h1
                        initial={{
                        opacity: 0,
                        y: 20,
                        }}
                        animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                        }}
                        transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-6 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto py-20"
                    >
                        Our{" "}
                        <Highlight className="text-white dark:text-white">
                            Digital Marketing Services
                        </Highlight>
                    </motion.h1>
                </HeroHighlight> */}
            <InfiniteMovingText title='Digital Marketing Services' className='pb-40' />
                {/* <h2 className='text-center text-[60px] py-10'>Our Digital Marketing Services</h2> */}
            </div>
            {/* <StickyScrollReveal /> */}
            <SocialMedia />
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <ContentCreation />
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <AdManagement />
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <BrandManagement />
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <InfiniteScroll
                height='32rem'
                extra_css={`border`}
            />
        </div>
    </div>
  )
}

export default Services