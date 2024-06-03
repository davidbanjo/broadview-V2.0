import React from 'react'
import './infocard.css'
import ButtonMagic from '../buttons/ButtonMagic'

const InfoCard = ({ src, alt, content, cta }) => {
  return (
    <div className='bts-info-card'>
        <div className="bts-info-card-row">
            <div className="bts-info-card-col">
                <img className='bts-info-card-logo' src={src} alt={alt} />
            </div>
            <div className="bts-info-card-col">
                <p className='bts-info-card-content'>{content}</p>
            </div>
            <div className="bts-info-card-col">
                <ButtonMagic content={cta} />
            </div>
        </div>
    </div>
  )
}

export default InfoCard