import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { offices } from '../../Data/OfficeData'
import Office from './Office';
import {motion} from "framer-motion";
import GoogelMap from "../GoogelMap/GoogelMap";

const OfficeList = () => {
  return (
    <>
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, type: 'tween' }}
            className="ptb-60 office"
        >
        <Container>
            <Row>
                <Col lg={12} sm={12}>
                    <div className="head-content text-center py-5">
                        <h4 className="text-warning text-uppercase">Our Office</h4>
                        <h2 className="text-head-pros">Located Around the World</h2>
                        <p  className="lead pra-head-pros">
                            Dynamically technically sound technologies with parallel task <br/> convergence quality
                            vectors through excellent relationships.
                        </p>
                    </div>
                </Col>
               
                    {/* style="background: url('images/office-img-1.jpg') no-repeat center center / cover" */}
                    {offices.map((office, index)=>{
                         const{id, country, address , img, link, mapLink} = office;
                        return(
                            <Col className=" mt-4 mt-lg-0 mt-xl-0" lg={4} md={6} key={index}>
                                <Office  id={id} country={country} address={address} img={img} link={link} mapLink={mapLink}/>
                </Col>
                
                         
                )
            })}
            </Row>
        </Container>
        </motion.section>
        {/*<GoogelMap/>*/}
    </>
  )
}

export default OfficeList