import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Clients({className}) {
  return (
    <div className={`clients text-center ${className}`}>
        <h2 className='pb-5'>
            Trusted By:
        </h2>
        <div className='row g-3 align-items-center'>
            <div className='col-4 col-md-2 client'>
                <StaticImage src='../images/brands/abs.png' imgClassName='img'/>
            </div>
            <div className='col-4 col-md-2 client'>
                <StaticImage src='../images/brands/carrier.png' imgClassName='img'/>
            </div>
            <div className='col-4 col-md-2 client'>
                <StaticImage src='../images/brands/donquest.png' imgClassName='img'/>
            </div>
            <div className='col-4 col-md-2 client'>
                <StaticImage src='../images/brands/nestoil.png' imgClassName='img'/>
            </div>
            <div className='col-4 col-md-2 client'>
                <StaticImage src='../images/brands/shell_live.png' imgClassName='img'/>
            </div>
            <div className='col-4 col-md-2 client'>
                <StaticImage src='../images/brands/trubond.png' imgClassName='img'/>
            </div>
        </div>
    </div>
  )
}
