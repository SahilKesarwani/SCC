import React from 'react'

export default function SccCarousel({href, imgSrc}) {
  return (
    <>
    <a className="carousel-item" href={href}>
            <img src={imgSrc} />
          </a>
    </>
  )
}
