import React from 'react'
import CTAForm from '../forms/CTAForm'
import "./cta.css"

const CTA = () => {
  return (
    <div className='bts-cta py-10 px-10 max-w-[100%] w-[1240px] m-auto'>
        <div className='bts-cta-row flex justify-center gap-20'>
            <div className='bts-cta-col'>
                <div>
                    <img className='w-[600px] h-[300px] object-cover object-top' src='/img/assets/AdobeStock_ContactUs.jpeg' alt='conact_img' />
                    <div className='bts-spacer-x2'></div>
                    <h2 className="font-bold text-[50px] text-neutral-200 dark:text-neutral-200">
                        Reach Out To Us
                    </h2>
                    <div className='bts-spacer-x1'></div>
                    <p className="text-neutral-300 text-sm mt-2 dark:text-neutral-300 text-[16px]">
                        Fill out the form below to kick-start our journey together. Whether you're a startup, a growing business, or an established enterprise, we're here to drive your success through innovation and expertise.
                        Let's build the future together!
                    </p>
                </div>
            </div>
            <div className='bts-cta-col'>
                <CTAForm />
            </div>
        </div>
    </div>
  )
}

export default CTA