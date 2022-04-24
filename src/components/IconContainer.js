import { right } from '@popperjs/core'
import React from 'react'

export default function IconContainer({children,center=false,right=false}) {
  return (  
    <div className={`p-2 border-primary border-3 rounded-circle border-1 ${center?"mx-auto":""} ${right?"ms-auto":''}`} style={{width:"fit-content",height:"fit-content"}}>
        {children}
    </div>
  )
}
