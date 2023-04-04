import { MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

const SocialMedia = () => {
  return (
    <>
     <ul className="list-inline list-icons">
            <li className="list-item item-icon">
              <a href="https://www.facebook.com/Macberllc/" target="_blank">
              <MDBIcon color='secondary' fab icon='facebook-f' />

              </a>
            </li>
            <li className="list-item item-icon">
              <a href="https://www.instagram.com/macberegypt/?igshid=ODBkMDk1MTU%3D" target="_blank">
              <MDBIcon color='secondary' fab icon='instagram' />
              </a>
            </li>
            <li className="list-item item-icon">
              <a href="https://www.linkedin.com/company/macbercompany/" target="_blank">
              <MDBIcon color='secondary' fab icon='linkedin' />
              </a>
            </li>
           
           
          </ul> 
    
    </>
  )
}

export default SocialMedia