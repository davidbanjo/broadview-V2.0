import React from 'react'
import Hero from './hero/Hero'
import InfiniteScroll from '../../components/infinite-scroll/InfiniteScroll'
import VideoContainer from '../../components/video/VideoContainer'
import About_Section from './About_Section'

const Home = () => {
  return (
    <div>
        <Hero />
        <VideoContainer 
          src="https://www.youtube.com/embed/Pz_DlcCh0Ws?autoplay=1&loop=1&controls=0&showinfo=0&start=2&end=37&mute=1&playlist=Pz_DlcCh0Ws&rel=0&modestbranding=1" 
          title="Broadview Tech Website Presentation Video"
        />
        {/* <About_Section /> */}
        <InfiniteScroll />
    </div>
  )
}

export default Home

