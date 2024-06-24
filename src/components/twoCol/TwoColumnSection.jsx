import React from 'react'
import { FaStar } from 'react-icons/fa'
import ButtonMagic from '../buttons/ButtonMagic'
import './twocol.css'
import { Link } from 'react-router-dom'

const TwoColumnSection = ({ title, description, extra_code_1, img_src, img_alt, extra_code_2, overlay, testimonial = false, testimonial_review, client, reverse }) => {
  return (
    <div className={`bts-dm-services-col flex items-center gap-32 max-w-full w-[1240px] mx-auto ${reverse ? "flex-row-reverse" : ""}`}>
        <div className='w-[50%]'>
            <h3 className='bts-two-col-title text-[55px]'>
                { title }
            </h3>
            <div className='bts-spacer-x1'></div>
            <p  className='py-4'>
                { description }
            </p>
            <div className='w-full h-[1px] bg-[#f9f9f981] mb-5'></div>
            { extra_code_1 }
            <div className='bts-spacer-x1'></div>
            <Link to="/contact" style={{ width: '100%' }}>
                <ButtonMagic
                    content="Get Started Now!"
                />
            </Link>
        </div>
        <div className='w-[50%]'>
            <div className='bts-image relative'>
                <img
                    src={ img_src }
                    alt={ img_alt }
                />
                {overlay ?
                    <div className='bts-contact-form-cont absolute top-0 left-0 w-full h-full opacity-[0.3]'></div>
                    :
                    ""
                }
                {!testimonial ? 
                    <div className='bts-two-col-testimonial bg-white p-5 absolute bottom-[-30px] right-[-30px] rounded-md w-[400px] flex flex-col gap-2 shadow-2xl'>
                        <div className='bts-review-stars flex'>
                            <FaStar className='text-[#FF9529]' />
                            <FaStar className='text-[#FF9529]' />
                            <FaStar className='text-[#FF9529]' />
                            <FaStar className='text-[#FF9529]' />
                            <FaStar className='text-[#FF9529]' />
                        </div>
                        <p className='text-black'>{ testimonial_review }</p>
                        <p className='text-right text-black !font-bold'>-{ client }</p>
                    </div> 
                    : 
                    ""
                }
            </div>
                { extra_code_2 }
        </div>
    </div>
  )
}

export default TwoColumnSection