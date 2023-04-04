import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
 
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/logos/World Network.svg';
import './Header.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
   
  return (
    <>
      
      <MDBNavbar expand='lg'  >
        <MDBContainer fluid>
        <MDBNavbarBrand href={`/home`}>
          <NavLink to={'/'}>
            <img
              src={logo}
              height='100'
              alt=''
              loading='lazy'
            />
          </NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right  className='mb-2 mb-lg-0 justify-content-lg-end '>
              <MDBNavbarItem >
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#ffc107' : '#818181',
                })} to={'/'} className="nav-link">
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#ffc107' : '#818181',
                })} to={'about'} className="nav-link">About</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#ffc107' : '#818181',
                })} to={'softwaredev'} className="nav-link" >
                  software development
                  </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink style={({ isActive }) => ({
                  color: isActive ? '#ffc107' : '#818181',
                })} to={'contact'} className="nav-link" >Contact US</NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    
    </>
  )
}

export default Header