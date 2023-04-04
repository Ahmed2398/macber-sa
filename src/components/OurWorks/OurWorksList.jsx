import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import {works} from '../../Data/WorksData'
import OurWorks from './OurWorks';
import {motion} from "framer-motion";
import {IoIosArrowForward} from 'react-icons/io';
const OurWorksList = () => {
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
        </Row>

        <Row>
            {works.map((work, index)=>{
                const {id, title, description, img} = work;
                return(
                    <Col lg={2} md={6} sm={12} className="pb-3" key={index}>
                          <div className="box-work h-100  ">
                            <OurWorks key={id} title={title} description={description} img={img}/>
                          </div>
                    </Col>
                )
            })}
          
         
         </Row>
 
         <div lg={12} className="pt-3 text-end">
           <a
             href={`/softwaredev`}
             className=""
           >
           <IoIosArrowForward className="arrow-link"/>
           </a>
         </div>
       </Container>
        </motion.section>
     
    </>
  )
}

export default OurWorksList