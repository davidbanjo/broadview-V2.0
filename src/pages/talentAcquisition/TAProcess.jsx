import React from 'react'
import './talent.css'
import { InfiniteMovingText } from '../../components/ui/infinite-moving-text'
import ButtonMagic from '../../components/buttons/ButtonMagic'
import { Link } from 'react-router-dom'

const TAProcess = () => {
  return (
    <div className='bts-taprocess max-w-full w-[1240px] mx-auto'>
        <div className='bts-taprocess-row'>
            <div className='bts-taprocess-col'>
                <InfiniteMovingText title='Recruitment Process' className='pt-10 pb-20' />
            </div>
            <div className='bts-taprocess-col flex justify-center gap-[40px]'>
                <div className='bts-taprocess-box flex flex-col gap-[50px] w-[600px]'>
                    <div className='flex justify-between items-center'>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center'>1.</p>
                        <div className='h-[1px] w-[70%] bg-white'></div>
                    </div>
                    <div>
                        <h3 className='text-[20px] !font-[600]'>
                            Contingent Staffing
                        </h3>
                        <div className='bts-spacer-x1'></div>
                        <p>
                        Our extensive database of qualified candidates is curated to meet industry standards, ensuring we connect you with the best talent that not only meets your business requirements but is also committed to exceeding your expectations.
                        </p>
                    </div>
                </div>
                <div className='bts-taprocess-box flex flex-col gap-[50px] w-[600px]'>
                    <div className='flex justify-between items-center'>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center'>2.</p>
                        <div className='h-[1px] w-[70%] bg-white'></div>
                    </div>
                    <div>
                        <h3 className='text-[20px] !font-[600]'>
                            Customized Solutions
                        </h3>
                        <div className='bts-spacer-x1'></div>
                        <p>
                            Whether your needs range from a few resources for short-term projects, expert consulting, or comprehensive project deliverables, Broadview offers tailored solutions.
                        </p>
                    </div>
                </div>
                <div className='bts-taprocess-box flex flex-col gap-[50px] w-[600px]'>
                    <div className='flex justify-between items-center'>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center'>3.</p>
                        <div className='h-[1px] w-[70%] bg-white'></div>
                    </div>
                    <div>
                        <h3 className='text-[20px] !font-[600]'>
                            Pre-Qualified Candidates
                        </h3>
                        <div className='bts-spacer-x1'></div>
                        <p>
                        Each candidate goes through a rigorous pre-qualification process to ensure a perfect fit.
                        </p>
                    </div>
                </div>
                <div className='bts-taprocess-box flex flex-col gap-[50px] w-[600px]'>
                    <div className='flex justify-between items-center'>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center'>4.</p>
                        <div className='h-[1px] w-[70%] bg-white'></div>
                    </div>
                    <div>
                        <h3 className='text-[20px] !font-[600]'>
                            Extensive Talent Pool
                        </h3>
                        <div className='bts-spacer-x1'></div>
                        <p>
                        Our broad talent network includes active and passive candidates, enabling us to swiftly meet diverse client needs.
                        </p>
                    </div>
                </div>
            </div>    
            <div className='bts-spacer-x2'></div>
            <div className='bts-taprocess-col flex justify-center gap-[40px]'>
                <div className='bts-taprocess-box flex flex-col gap-[50px] w-[600px]'>
                    <div className='flex justify-between items-center'>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center'>5.</p>
                        <div className='h-[1px] w-[70%] bg-white'></div>
                    </div>
                    <div>
                        <h3 className='text-[20px] !font-[600]'>
                            Best Fit Resources
                        </h3>
                        <div className='bts-spacer-x1'></div>
                        <p>
                        We focus on forming strong alliances and value our clients by providing personalized service to meet their unique demands.
                        </p>
                    </div>
                </div>
                <div className='bts-taprocess-box flex flex-col gap-[50px] w-[600px]'>
                    <div className='flex justify-between items-center'>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center'>6.</p>
                        <div className='h-[1px] w-[70%] bg-white'></div>
                    </div>
                    <div>
                        <h3 className='text-[20px] !font-[600]'>
                            Expert Recruitment in a Dynamic Market
                        </h3>
                        <div className='bts-spacer-x1'></div>
                        <p>
                        Our experienced recruiting teams have the expertise to navigate the ever-changing job market. Our ability to 'read between the lines' is a well honed skill that enables us to excel in handling a wide range of job orders, from the most complex to the most vague.
                        </p>
                    </div>
                </div>
            </div>    
        </div>  
        <div className='bts-taprocess-row'>
            <div className='bts-spacer-x2'></div>
            <Link to="/contact">
                <ButtonMagic
                    content="Get Started"
                />
            </Link>
            <div className='bts-spacer-x2'></div>
        </div>  
    </div>
  )
}

export default TAProcess