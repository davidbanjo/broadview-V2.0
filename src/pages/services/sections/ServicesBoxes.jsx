import React from 'react'
import { MeteorsDemo } from '../../../components/meteorCard/Meteors'

const ServicesBoxes = () => {
  return (
    <div className='max-w-full w-[1240px] mx-auto'>
        <div className='bts-service-box flex justify-center gap-5'>
            <MeteorsDemo
                title="
                    STAFFING SOLUTIONS
                "
                // desc="
                //     Build a custom solution tailored to your business needs by engaging our domain expertise, extensive technology stack, custom SDLC, and constraint management framework.
                // "
                image="/img/assets/AdobeStock_Hiring.jpeg"
                service="staffing-solutions"
            />
            <MeteorsDemo
                title="
                    DIGITAL MARKETING
                "
                // desc="
                //     We’re ready to cover any of your staffing and ramp-up needs on-site and off-site with our talent nurturing and retention policies and our framework for managing distributed teams.
                // "
                image="/img/assets/AdobeStock_Ads.jpeg"
                service="digital-marketing"
            />
            <MeteorsDemo
                title="
                    SOFTWARE DEVELOPMENT
                "
                // desc="
                //     I don&apos;t know what to write so I&apos;ll just paste something
                //     cool here. One more sentence because lorem ipsum is just
                //     unacceptable. Won&apos;t ChatGPT the shit out of this.
                // "
                image="/img/assets/AdobeStock_Software.jpeg"
                service="development-services"
            />
        </div>
    </div>
  )
}

export default ServicesBoxes