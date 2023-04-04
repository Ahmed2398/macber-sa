import React from 'react'
import Faqnewss from '../../assets/images/Faqnewss.png'
import { Col, Container, Row } from 'react-bootstrap'
import './Faq.css';
import { questions } from '../../Data/QuestionsData'
import Faq from './Faq'
import {motion} from "framer-motion";

const FaqList = () => {
  return (
    <>
       <motion.section
           whileInView={{ opacity: [0, 1] }}
           transition={{ duration: 1, type: 'tween' }}
           className="faq ptb-60 "
       >
    <Container>
      <Row>
        <Col xs={12} lg={12} className=" m-auto">
          <div className="content-head text-center">
            <h4 className="text-warning text-uppercase">FAQ</h4>
            <h2 className="text-head-pros">Frequently Asked Questions</h2>
            <p className="lead pra-head-pros">
              Conveniently mesh cooperative services via magnetic outsourcing. <br/> Dynamically grow value whereas
              accurate e-commerce vectors.
            </p>
          </div>
        </Col>
        </Row>
        <Row className="pt-5">
          <Col md={6} className="wow animate__fadeInLeft m-auto" data-wow-duration="5s" >
            {questions.map((question, index)=>{
                const {Qtext, answer} = question;
                return(
<div key={index} className="faq-item mb-5 text-left">
             <Faq Qtext={Qtext} answer={answer}/>
            </div>    
                )
            })}
             
          </Col>
          <Col md={6}>
            <img src={Faqnewss} alt="faq" className="img-fluid"/>
          </Col>
      </Row>
    </Container>
    
       </motion.section>
    </>
  )
}

export default FaqList