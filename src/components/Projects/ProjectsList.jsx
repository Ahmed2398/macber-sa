import React, { useState } from 'react';
import { MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
   
     } from 'mdb-react-ui-kit'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { projects } from '../../Data/MobileProjectsData';
import { Container, Row , Col} from 'react-bootstrap';
import {ImOffice} from "react-icons/im";
const ProjectsList = () => {
  
      const [popupcontent, setpopupcontent] = useState([]);
      const [popuptogle, setpopuptogle] = useState(false);


    const changecontent=(project)=>{
        setpopupcontent([project]);
        setpopuptogle(!popuptogle);
    }
    return (
     <>
      <Container>
        <Row>

            <div className="app_container">
                <div className="content_container">
            {projects.map((project,index)=>{
                return(
                    <MDBCard className="h-100">
                        <MDBCardImage src={project.imgCard} fluid alt={project.title} className="rounded" />
                        <MDBCardBody className='text-center office-body'>
                            <div className='d-flex justify-content-center'>
                                <MDBCardTitle className='mx-3'>{project.title}</MDBCardTitle>
                            </div>
                            <MDBCardText className="p-card">
                                {project.description}
                            </MDBCardText>
                            <div className="my-3">
                                <button className="btn btn-purble my-1"  onClick={()=> changecontent(project)}>details</button>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
            );
            })}
                </div>

                {popuptogle && (
                    <div className="pop_up_container" onClick={changecontent}>
                <div className="pop_up_body scroll" onClick={(e)=> e.stopPropagation()}>
                    <div className="pop_up_header">
                        <button className="btn btn-purble m-2" onClick={changecontent}>x</button>
                    </div>
                    <div className="pop_up_content">
                        {popupcontent.map((pop)=>{
                            return(
                                <div className="pop_up_card">
                                    {/*<h3>{pop.title}</h3>*/}
                                    {/*<p>{pop.description}</p>*/}
                                    {/*<p>{pop.id}</p>*/}
                                    {/*<p>{pop.details}</p>*/}
                                    <img className="pdf" src={pop.details} alt={pop.title}/>
                                </div>
                            )
                        })}
                    </div>
                </div>


            </div>
                    )}
            </div>
         </Row>








                </Container>

         </>
      )
}

export default ProjectsList