import React from 'react'
import "./video.css"
import PrimaryBtn from '../buttons/PrimaryBtn'

const VideoContainer = ({ src, title }) => {
  return (
    <div className='bts-video-container'>
      <div className="bts-video-container-row">
        <div className="bts-video-container-col bts-yt-video">
          <iframe 
            width="100%" 
            height="1005" 
            src={src} 
            title={title} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div className="bts-video-info">
        <div className="bts-video-info-row">
          <div className="bts-video-info-col">
            <h2 className='bts-video-info-text'>When we're involved, <br />solutions swiftly unfold</h2>
          </div>
          <div className="bts-video-info-col">
            <PrimaryBtn value="Get Started" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoContainer