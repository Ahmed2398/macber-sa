import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import feature3 from "../../assets/images/feature-img3.jpg";
import './AboutHeader.css';

import {motion} from "framer-motion";

const AboutValues = () => {
    return (
        <>

                <motion.section className="values ptb-60" whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, type: 'tween' }}>
                <Container>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="head-content">
                                <h4 className="small-text text-warning">Our Values</h4>
                                <h2>The Core Values that Drive Everything</h2>
                                <p className="text-secondary">Quickly incubate functional channels with
                                    multidisciplinary
                                    architectures. Authoritatively fabricate formulate exceptional innovation.</p>
                            </div>
                            <ul className="list-unstyled mt-5">
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-primary rounded me-4 ">
                                        <i className="fa-solid fa-share-nodes text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3>Pixel Perfect Design </h3>
                                        <p className="text-secondary">
                                            Progressively foster enterprise-wide systems whereas equity invested
                                            web-readiness
                                            harness installed.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-danger rounded me-4 ">
                                        <i className="fa-solid fa-fingerprint"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3>Unique &amp; Minimal Design</h3>
                                        <p className="text-secondary">
                                            Dramatically administrate progressive metrics without error-free globally
                                            simplify
                                            standardized engineer efficient strategic.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-dark rounded me-4 ">
                                        <i className="fa-solid fa-gear"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3>Efficiency &amp; Accountability</h3>
                                        <p className="text-secondary">
                                            Objectively transition prospective collaboration and idea-sharing without
                                            focused
                                            maintain focused niche markets niches.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="feature-img-warp position-relative d-flex flex-column align-content-end">
                                <ul className="img-overlay-list list-unstyled position-absolute">
                                    <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                        <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                        <h6 className="mb-0">Create a Free Account</h6>
                                    </li>
                                    <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                        <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                        <h6 className="mb-0">Install Our Tracking Pixel</h6>
                                    </li>
                                    <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                        <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                        <h6 className="mb-0">Start Tracking your Website</h6>
                                    </li>
                                </ul>
                                <img src={feature3} alt="feature image"
                                     className="img-fluid rounded-custom"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </motion.section>
        </>
    );
};

export default AboutValues;