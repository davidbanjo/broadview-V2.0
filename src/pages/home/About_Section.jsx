import React from 'react'
import { TabComponent } from '../../components/Tabs/TabComponent'
import { eta_hero } from '../../assets/portfolioAssets/assets/assets'

const About_Section = () => {
  return (
    <div>
        <TabComponent 
            Image_alt="Default_image"
            Image_src={eta_hero}
        />
    </div>
  )
}

export default About_Section