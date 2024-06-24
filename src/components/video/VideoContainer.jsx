import React, { useEffect } from 'react';
import "./video.css";
import PrimaryBtn from '../buttons/PrimaryBtn';
import YouTube from 'react-youtube';

const VideoContainer = ({ videoId, title }) => {
  
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  // Define responsive dimensions based on breakpoints
  const getResponsiveDimensions = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1240) {
      return { width: '1240px', height: '700px' };
    } else if (screenWidth >= 768) {
      return { width: '800px', height: '450px' };
    } else {
      return { width: '100%', height: '240px' };
    }
  };

  const opts = {
    ...getResponsiveDimensions(),
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: videoId,
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
    },
  };

  useEffect(() => {
    // Update dimensions on window resize
    const handleResize = () => {
      const dimensions = getResponsiveDimensions();
      opts.width = dimensions.width;
      opts.height = dimensions.height;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bts-video-container'>
      <div className="bts-video-container-row">
        <div id='player' className="bts-video-container-col bts-yt-video">
          <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} className="yt-video" />
        </div>
      </div>
      <div className='bts-spacer-x1'></div>
      <div className="bts-video-info">
        <div className="bts-video-info-row">
          <div className="bts-video-info-col">
            <h2 className='bts-video-info-text'>When we're involved, <br />solutions swiftly unfold</h2>
          </div>
          <div className="bts-video-info-col">
            <PrimaryBtn value="Get Started" link="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
