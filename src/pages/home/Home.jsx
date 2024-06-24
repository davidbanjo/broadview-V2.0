import React from 'react'
import Hero from './hero/Hero'
import InfiniteScroll from '../../components/infinite-scroll/InfiniteScroll'
import VideoContainer from '../../components/video/VideoContainer'
import About_Section from './About_Section'
import Faq from '../../components/faq/Faq'
import CTA from '../../components/cta/CTA'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className='bts-spacer-x2'></div>
        <VideoContainer 
          videoId="QmsJ9OfngnY"
          // src="https://www.youtube.com/embed/QmsJ9OfngnY?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&playlist=QmsJ9OfngnY"
          title="Broadview Tech Website Presentation Video"
        />
        {/* <About_Section /> */}
        <InfiniteScroll
          height='40rem'
        />
        {/* <Faq />q */}
        <CTA />
    </div>
  )
}

export default Home

