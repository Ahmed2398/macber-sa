import React, {useState} from 'react'
import Projects from '../components/Projects/Projects';
import {Container, Row , Col} from "react-bootstrap";
import {projects} from "../Data/MobileProjectsData";
const SoftwareDev = () => {
    const [popupcontent, setpopupcontent] = useState([]);
    const changecontent=(project)=>{
        setpopupcontent([project]);
    }
  return (
    
    <>
  <Projects/>
    </>
  )
}

export default SoftwareDev