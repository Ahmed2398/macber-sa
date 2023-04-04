import React, { useState } from 'react';

import { Container, Row , Col} from 'react-bootstrap';
import {webprojects} from "../../Data/WebProjectsData";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdb-react-ui-kit";

const ProjectsList = () => {

    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);


    const changecontent=(webproject)=>{
        setpopupcontent([webproject]);
        setpopuptogle(!popuptogle);
    }
    return (
        <>
            <Container>
                <Row>
                    <div className="app_container">
                        <div className="content_container">
                            {webprojects.map((webproject,index)=>{
                                return(
                                    <MDBCard className="h-100">
                                        <MDBCardImage src={webproject.imgCard} fluid alt={webproject.title} className="rounded" />

                                        <MDBCardBody className='text-center office-body'>
                                            <div className='d-flex justify-content-center'>
                                                <MDBCardTitle className='mx-3'>{webproject.title}</MDBCardTitle>
                                            </div>

                                            <MDBCardText className=" p-card">
                                                {webproject.description}
                                            </MDBCardText>
                                            <button className="btn btn-purble my-1" onClick={()=> changecontent(webproject)}>details</button>
                                        </MDBCardBody>
                                    </MDBCard>
                                    // <div className="content-card my-3">
                                    //     <img src={webproject.imgCard} alt={webproject.title} className="card-img"/>
                                    //     <h2 className="text-center my-3 f-20 fw-bold">{webproject.title}</h2>
                                    //     <p className="text-center my-3 f-18 fw-bold">{webproject.description}</p>
                                    //     <button className="btn btn-purble my-1" onClick={()=> changecontent(webproject)}>details</button>
                                    // </div>
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