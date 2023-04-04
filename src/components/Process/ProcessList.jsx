import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { process } from '../../Data/ProcessData'
import Process from './Process'
import flow from "../../assets/images/Work-Flow.png"
import { FcWorkflow } from "react-icons/fc";
import {motion} from "framer-motion";

const ProcessList = () => {
  return (
    <>
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, type: 'tween' }}
            className='work-process ptb-60'
        >
    <Container>
        <Row>
        <Col xs={12} lg={12}>
          <div className="content-head text-center pt-60 py-5">
            <h4 className="text-warning">Process</h4>
            <h2 className="">We Follow Our Work Process
            </h2>
            <p className="lead text-muted ">
              Enthusiastically engage cross-media leadership skills for alternative experiences. <br/> Proactively drive
              vertical systems than intuitive architectures.
            </p>
          </div>
        </Col>
        </Row>
        <Row>
        <Col className="col-md-6 col-sm-12" xs={12} md={6}>
          <div className="img-wrap">
            <img src={flow} alt="work process" className="img-fluid rounded-custom"/>
          </div>
        </Col>
       
        <Col xs={12} lg={6} >
        {process.map((proces, index)=>{
            const{step, head, text , icon} = proces;
            return(
                
                     <ul key={index} className="work-process-list list-unstyled text-left">
            <li className="d-flex align-items-start mb-4 wow animate__fadeInRight" data-wow-duration="2s" data-wow-offset="4" >
              <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                {/* <FcWorkflow className='icon-process'/> */}
                <i className="fa-solid fa-folder-tree"></i>
              </div>
              <div className="icon-content">
                  <Process key={index} icon={icon} step={step} head={head} text={text} />
                  </div>
            </li>
          
          </ul>
            
            )
        })}
            </Col>
        </Row>
    </Container>
        </motion.section>
   
    </>
  )
}

export default ProcessList