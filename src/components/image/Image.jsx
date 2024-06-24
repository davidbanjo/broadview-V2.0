import React from 'react'

const Image = ({
    src,
    width,
    height,
    className,
    alt
}) => {
  return (
    <img src={src} width={width} height={height} className={className} alt={alt} />
  )
}

export default Image