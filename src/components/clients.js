import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Clients({className}) {
  return (
    <div className={`clients text-center ${className}`}>
        <h2 className='pb-3'>
            Trusted By:
        </h2>
        <div className='row g-3'>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
            <div className='col client'>
                <StaticImage src='../images/icon.png' imgClassName='img'/>
            </div>
        </div>
    </div>
  )
}
