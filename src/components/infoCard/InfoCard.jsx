import React from 'react'
import './infocard.css'
import ButtonMagic from '../buttons/ButtonMagic'
import { Link } from 'react-router-dom'

const InfoCard = ({ src, alt, content, cta, className, url }) => {
  return (
    <div className={`bts-info-card ${className}`}>
        <div className="bts-info-card-row">
            <div className="bts-info-card-col">
                <img className='bts-info-card-logo' src={src} alt={alt} />
            </div>
            <div className="bts-info-card-col">
                <p className='bts-info-card-content'>{content}</p>
            </div>
            <div className="bts-info-card-col">
                <Link to={url}>
                    <ButtonMagic content={cta} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default InfoCard