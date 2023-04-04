import React from 'react';
import {motion} from "framer-motion";
import {Col, Container, Row} from "react-bootstrap";
import phone from '../../assets/images/phone.png';
import './Services.css'
import {services} from "../../Data/ServiceData";
import {industries} from "../../Data/IndustriesData";
const Services = () => {
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
                            <div className="content-head text-center py-5">
                                <h4 className="text-warning text-uppercase">Our Services</h4>
                                {/*<h2 className="text-head-pros">Frequently Asked Questions</h2>*/}
                                {/*<p className="lead pra-head-pros">*/}
                                {/*    Conveniently mesh cooperative services via magnetic outsourcing. <br/> Dynamically grow value whereas*/}
                                {/*    accurate e-commerce vectors.*/}
                                {/*</p>*/}
                            </div>
                        </Col>
                        {services.map((service, index)=>{
                            return(
                                <Col lg={4} sm={12}>
                                    <div className=" my-5 text-center">
                                        <img src={service.img} alt={service.name} className="service-img"/>
                                        <div className="service-text m-auto">
                                            <h2 className="text-center my-4">
                                                {service.name}
                                            </h2>
                                            <p className="">{service.text}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}

                    </Row>
                </Container>
            </motion.section>

            {/*<motion.section*/}
            {/*    whileInView={{ opacity: [0, 1] }}*/}
            {/*    transition={{ duration: 1, type: 'tween' }}*/}
            {/*    className="faq ptb-60 "*/}
            {/*>*/}
            {/*    <Container>*/}
            {/*        <Row>*/}
            {/*            <Col xs={12} lg={12} className=" m-auto">*/}
            {/*                <div className="content-head text-center">*/}
            {/*                    <h4 className="text-warning text-uppercase">*/}
            {/*                        industries we worked on*/}
            {/*                    </h4>*/}
            {/*                    /!*<h2 className="text-head-pros">Frequently Asked Questions</h2>*!/*/}
            {/*                    /!*<p className="lead pra-head-pros">*!/*/}
            {/*                    /!*    Conveniently mesh cooperative services via magnetic outsourcing. <br/> Dynamically grow value whereas*!/*/}
            {/*                    /!*    accurate e-commerce vectors.*!/*/}
            {/*                    /!*</p>*!/*/}
            {/*                </div>*/}
            {/*            </Col>*/}
            {/*            {industries.map((industrie, index)=>{*/}
            {/*                return(*/}
            {/*                    <Col lg={4} md={6} sm={12}>*/}
            {/*                        <div className="d-flex my-4">*/}
            {/*                            <img src={industrie.img} alt={industrie.name} className="mx-3 industrie-img"/>*/}
            {/*                            <div className="service-text m-auto">*/}
            {/*                                <h2 className="">*/}
            {/*                                    {industrie.name}*/}
            {/*                                </h2>*/}
            {/*                                <p className="">{industrie.text}</p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </Col>*/}
            {/*                )*/}
            {/*            })}*/}

            {/*        </Row>*/}
            {/*    </Container>*/}
            {/*</motion.section>*/}
        </>
    );
};

export default Services;