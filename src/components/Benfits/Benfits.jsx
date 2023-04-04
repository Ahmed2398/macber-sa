import React from 'react'
import './Benfits.css'
const Benfits = ({img, name , text}) => {
  return (
  
     <>
            <img src={img} alt={name}/>
          <h5 className="about-content-head my-3 text-center">{name}</h5>
          <p className="lead about-content">{text}</p>
        
      </>
      
  
  )
}

export default Benfits