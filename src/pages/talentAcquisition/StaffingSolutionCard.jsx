import React from 'react'

const StaffingSolutionCard = ({ image, title, desc }) => {
  return (
    <div className='bts-staffing-solutions-col w-[450px]'>
        <img
            src={image}
            alt={title}
        />
        <div className='h-[50px] border border-[#fa921c] w-0 mx-auto'></div>
        <div className='border rounded-lg border-[#fa921c] p-5'>
            <h3 className='text-[24px] pb-2'>{title}</h3>
            <p className='text-left'>{desc}</p>
        </div>
    </div>
  )
}

export default StaffingSolutionCard