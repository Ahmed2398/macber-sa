import React from 'react'
import './Team.css';


const Team = ({id, name, title, img, social}) => {
  // console.log(social)
  return (
  
    <>
   <div className="team-img rounded-custom">
                            <img src={img} alt="team" className="img-fluid position-relative"/>
                            {/* <ul className="list-unstyled team-social-list d-flex flex-column mb-0" >
                                <li className="list-inline-item"><a href={social.fac}><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            </ul> */}
                        </div>
                        <div className="team-info mt-4 text-center">
                            <h5 className="h6 mb-1">{name}</h5>
                            <p className="text-muted small mb-0">{title}</p>
                        </div>
    </>
  )
}

export default Team