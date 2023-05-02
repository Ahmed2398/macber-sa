import React, {useState} from 'react'
import { Container, Col, Row } from "react-bootstrap";
import {works} from '../../Data/WorksData'
import OurWorks from './OurWorks';
import {motion} from "framer-motion";
import {IoIosArrowForward} from 'react-icons/io';
import {MDBCard,MDBCardImage} from "mdb-react-ui-kit";
import './OurWorks.css'
import {NavLink} from "react-router-dom";
const OurWorksList = () => {

    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changecontent=(project)=>{
        setpopupcontent([project]);
        setpopuptogle(!popuptogle);
    }
    return (
        <>
            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className="work ptb-60"
            >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head-content pb-3">
                                <h4 className="small-text text-warning text-center mb-5">
                                    Our Works
                                </h4>
                            </div>
                        </Col>




                    <div className="app_container">
                        <div className="content_container">
                            {works.map((work,index)=>{
                                return(

                                    <MDBCard className="h-100 box-work ">
                                        <button className="btn" style={{padding:0}}  onClick={()=> changecontent(work)}>
                                        <MDBCardImage src={work.imgCard} fluid alt={work.title} className="rounded" />
                                        </button>
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

                    <Col lg={12} className="pt-3 text-end">
                        <NavLink to={'softwaredev'}

                            className=""
                        >
                            <IoIosArrowForward className="arrow-link"/>
                        </NavLink>
                    </Col>
                </Row>








            </Container>
            </motion.section>

        </>
    )
}

export default OurWorksList