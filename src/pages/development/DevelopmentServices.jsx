import React from 'react'
import { InfiniteMovingText } from '../../components/ui/infinite-moving-text'
import WebsiteDevelopment from './WebsiteDevelopment'
import SoftwareDevelopment from './SoftwareDevelopment'

const DevelopmentServices = () => {
  return (
    <div className='bts-development-services'>
        <InfiniteMovingText title='Our Development Services' className='pt-10 pb-28' />
        <WebsiteDevelopment />
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
            <div className='bts-spacer-x2'></div>
        <SoftwareDevelopment />
            <div className='bts-spacer-x2'></div>
    </div>
  )
}

export default DevelopmentServices