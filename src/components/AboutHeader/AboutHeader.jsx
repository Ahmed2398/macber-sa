import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import aboutImage from "../../assets/images/aboutnew.png";
import awards1 from "../../assets/images/awards-01.png";
import awards2 from "../../assets/images/awards-02.png";
import image2 from "../../assets/images/shapesIcons/image-2.png";
import image3 from "../../assets/images/shapesIcons/feature-3.png";
import './AboutHeader.css';
import {motion} from "framer-motion";

const AboutHeader = () => {
    // Counter
    let counter = document.querySelectorAll(".counter");
    let arr = Array.from(counter);
    arr.map((item) => {
        let count = item.innerHTML;
        item.innerHTML = "";
        var countNumber = 0;
        function counterUp() {
            item.innerHTML = countNumber++;
            if (countNumber > count) {
                clearInterval(stop);
            }
        }

        let stop = setInterval(() => {
            counterUp();
        }, item.dataset.speed / count);

    });
    return (
        <>
            <motion.section whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, type: 'tween' }} fadedd className="hero-section-2 about-header-section ptb-120 position-relative overflow-hidden py-3 ">
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <Row>
                                <Col md={6} className=" m-auto">
                                    <h3 className="head-banner h3-banner">grow your </h3>
                                    <h1 className="head-banner head-banner-h1">  Business<br/> and Customer
                                    </h1>
                                    <p className=" text-banner text-muted lead ">Dynamically
                                        disintermediate technically sound technologies with
                                        compelling quality vectors error-free communities.
                                    </p>
                                </Col>
                                <div className="col-md-6">
                                    <img src={aboutImage} className="w-100 img-fluid"/>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </motion.section>

            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className="story ptb-60 "
            >

                <Container>
                    <Row>
                        <Col lg={5} sm={12} className="order-lg-1 ">
                            <div className="head-content">
                                <h4 className="small-text">Our Story</h4>
                                <h2>A Great Story Starts with a Friendly Team</h2>
                                <p className="text-secondary">Globally e-enable principle-centered e-business before
                                    dynamic
                                    quality
                                    vectors cross-media
                                    materials before proactive outsourcing leverage other's vertical technology
                                    leadership.
                                </p>
                            </div>
                            <div className="my-4">
                                <h6 className="mb-3">We Are Awarded By-</h6>
                                <img src={awards1} alt="awards" className="me-4 img-fluid"/>
                                <img src={awards2} alt="awards" className="me-4 img-fluid"/>
                            </div>
                        </Col>
                        <Col lg={7} sm={12} className="order-lg-0" >
                            <div className="story-grid-wrapper position-relative">

                                <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                                    <li className="layer layerTwo" data-depth="0.02">
                                        <img src={image2} alt="shape"
                                             className="img-fluid position-absolute color-shape-2 z-5"/>
                                    </li>
                                    <li className="layer layerOne" data-depth="0.03">
                                        <img src={image3} alt="shape"
                                             className="img-fluid position-absolute color-shape-3 "/>
                                    </li>
                                </ul>

                                <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                                    <div className="story-item bg-light border">
                                        <h3 className="display-5 fw-bold mb-1 text-success counter"
                                            data-speed="1000">152</h3>
                                        <h6 className="mb-0">Active Users</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-primary counter"
                                            data-speed="1000">29</h3>
                                        <h6 className="mb-0">Team Members</h6>
                                    </div>
                                    <div className="story-item bg-light border">
                                        <h3 className="display-5 fw-bold mb-1 text-warning ">7</h3>
                                        <h6 className="mb-0">Years In Business</h6>
                                    </div>
                                    <div className="story-item bg-light border">
                                        <h3 className="display-5 fw-bold mb-1 text-danger counter"
                                            data-speed="1000">401</h3>
                                        <h6 className="mb-0">Clients Worldwide</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-primary counter"
                                            data-speed="1000">1250</h3>
                                        <h6 className="mb-0">Projects Completed</h6>
                                    </div>
                                    <div className="story-item bg-white border">

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </motion.section>
        </>
    );
};

export default AboutHeader;