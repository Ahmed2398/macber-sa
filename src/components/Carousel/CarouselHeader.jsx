import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "../Carousel/CarouselHeader.css";
import girl from "../../assets/images/girl.png";
import boy from "../../assets/images/Boy.png";

import SocialMedia from "../SocialMedia/SocialMedia";
function CarouselHeader() {
  return (
    <Container >
    {/* <div className="bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div> */}
      <Carousel className="py-5">
        <Carousel.Item>
          <div className="mySlides  ">
            <div id="banner-one ">
              <Row>
                <div className="col-lg-6 col-sm-12 m-auto">
                  <h3 className="head-banner h3-banner ">Innovative </h3>
                  <h1 className="head-banner head-banner-h1">
                    Game <br /> Development
                  </h1>
                  <h3 className="head-banner h3-banner">Technologies </h3>
                  <p className=" text-banner text-muted">
                    Appsinnovate’s games development team is the most experience
                    dexpertise on mobile apps across all mobile platforms. with
                    more than 10 years of experience in digital business and
                    mobile development field, appsinnovate can help you better
                    engage your fans with mobile applications.
                  </p>
                  {/* <a href="#" className="btn btn-costume-two" style="margin-left: 10px;">See More</a> */}
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                  <img src={girl} alt="game" width="75%" />
                </div>
              </Row>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="mySlides">
            <div id="banner-two">
              <Row>
                <div className="col-lg-6 col-sm-12 m-auto">
                  <h3 className="head-banner h3-banner">Superior </h3>
                  <h1 className="head-banner head-banner-h1">
                  
                    Software <br /> Development
                  </h1>
                  <h3 className="head-banner h3-banner">Solutions </h3>
                  <p className=" text-banner text-muted">
                    Expertise on mobile apps across all mobile platforms. with more than 10 years of experience in digital business and mobile development field,
                    appsinnovate can help you better engage your fans with mobile applications for smartphones
                    and tablets.
                  </p>
                  {/* <a href="#" className="btn btn-costume-two" style="margin-left: 10px;">See More</a> */}
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                  <img  src={boy} alt="newsoftkey" width="75%" />
                </div>
              </Row>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="col-lg-2 m-auto">
           <SocialMedia/>
            </div>
          
    </Container>
  );
}

export default CarouselHeader;
