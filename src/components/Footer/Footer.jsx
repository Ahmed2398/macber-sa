import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logos/World Networkwhite.svg';
import './Footer.css'
import SocialMedia from '../SocialMedia/SocialMedia';
import {NavLink} from "react-router-dom";
const Footer = () => {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between'>

   
    </section>
    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
            <NavLink to={'/'}> <img src={logo}/></NavLink>

            <SocialMedia/>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
            <p>
              <NavLink to={'/'} className='text-reset'>
              Home
              </NavLink>
            </p>
            <p>
              <NavLink to={'about'} className='text-reset'>
              About Us
              </NavLink>
            </p>
            {/*// <p>*/}
            {/*//   <a href='#!' className='text-reset'>*/}
            {/*//   Partners*/}
            {/*//   </a>*/}
            {/*// </p>*/}
            <p>
              <NavLink to={'contact'} className='text-reset'>
              Contact-us
              </NavLink>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
            <p>
              <NavLink to={'softwaredev'} className='text-reset'>
              Software Development 
              </NavLink>
            </p>
            {/*<p>*/}
            {/*  <a href='#!' className='text-reset'>*/}
            {/*  registration system*/}
            {/*  </a>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*  <a href='#!' className='text-reset'>*/}
            {/*  Game Development*/}
            {/*  </a>*/}
            {/*</p>*/}
          </MDBCol>

          <MDBCol md='4' lg='4' xl='4' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p className='text-white'>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              Building 2, Ground Floor, Apt. 1, Talaat Harb Axis, District 3, Area 4, Fifth settlement, New Cairo, Egypt
            </p>
            <p className='text-white'>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              info@macber-eg.com
            </p>
            <p className='text-white'>
              <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01009885898
            </p>

            {/*<p className='text-white'>*/}
            {/*<SocialMedia/>*/}
            {/*</p>*/}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright ©2023
      <NavLink className='text-reset fw-bold mx-1 text-uppercase' to={'/'}>Macber co</NavLink>
      .All Rights Reserved.
    </div>
  </MDBFooter>
  )
}

export default Footer