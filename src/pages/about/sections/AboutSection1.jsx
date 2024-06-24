import React from 'react'
import { ImagesSlider } from '../../../components/ui/images-slider'
import { motion } from 'framer-motion'

const AboutSection1 = () => {

    const images = [
                "/img/assets/AdobeStock_Hiring.jpeg",
                "/img/assets/AdobeStock_Software.jpeg",
                "/img/assets/AdobeStock_Ads.jpeg",
            ];

    const name = [
        "Staffing Solutions",
        "Development Services",
        "Digital Marketing"
    ]

    const url = [
      "/services/staffing-solutions",
      "/services/development-services",
      "/services/digital-marketing"
    ]

  return (
    <div className=' max-w-full w-[1240px] mx-auto px-4'>
         <ImagesSlider className="h-[40rem]" images={images} name={name} url={url}>
            <motion.div
                initial={{
                opacity: 0,
                y: -80,
                }}
                animate={{
                opacity: 1,
                y: 0,
                }}
                transition={{
                duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                
                
            </motion.div>
    </ImagesSlider>
    </div>
  )
}

export default AboutSection1