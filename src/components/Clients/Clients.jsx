import React from 'react';
import Slider from "react-slick";
import {clients} from "../../Data/ClientsData";
import {Col, Container, Row} from "react-bootstrap";
import  {motion} from "framer-motion";

const Clients = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        rows: 3,
        slidesPerRow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
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
                                <h4 className="text-warning text-uppercase">Our Clients</h4>
                                {/*<h2 className="text-head-pros">Frequently Asked Questions</h2>*/}
                                {/*<p className="lead pra-head-pros">*/}
                                {/*    Conveniently mesh cooperative services via magnetic outsourcing. <br/> Dynamically grow value whereas*/}
                                {/*    accurate e-commerce vectors.*/}
                                {/*</p>*/}
                            </div>
                        </Col>
                    </Row>
            <Slider {...settings}>

                    {clients.map((client, index)=>{
                        return(
                            <div key={index}>
                                <img src={client.img} alt={client.name}/>

                            </div>
                        )
                    })}


            </Slider>

                </Container>
            </motion.section>
            </>
    );
};

export default Clients;