import React from 'react'
import './Process.css'
const Process = ({step,head,text}) => {
  return (
    <>
        <span className="text-warning h6">{step}</span>
        <h3 className="text-head-pros mb-2">{head}</h3>
        <p className="pra-head-pros">{text}</p>
    </>
  )
}

export default Process