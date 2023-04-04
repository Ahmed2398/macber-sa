import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import macberOffice from '../../assets/images/office/office.png'
import './MissionPartners.css'
import {motion} from "framer-motion";

const MissionPartners = () => {
  return (
    <>
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, type: 'tween' }}
            className="ptb-60"
        >
  <Container fluid>
    <Row>
        <Col  lg={12}>
            <img src={macberOffice} alt="office" className="rounded-custom w-100" />
        </Col>

    </Row>
  </Container>
        </motion.div>

{/*      <Row className="row pt-lg-5 pt-3 two-cards">*/}
{/*        <Col className="col-lg-6 mt-4 animate__fadeInUp ">*/}
{/*          <div className="position-relative d-flex flex-column h-100 flex-wrap p-5 rounded-custom ">*/}
{/*            <div className="cta-left-info mb-2">*/}
{/*              <h5><img src={goal} alt="cta img px-3" className="w-25"/> mission</h5>*/}
{/*              <p>match everything to brand and style We aspire to become the ultimate choice in the software industry in the mena region by delivering*/}
{/*high-quality, customized, and responsive applications to our clients.</p>*/}
{/*            </div>*/}
{/*            <div className="mt-auto">*/}
{/*            </div>*/}
{/*          </div>*/}
{/*        </Col>*/}
{/*        <Col className="col-lg-6 mt-4 animate__fadeInUp ">*/}
{/*          <div className="position-relative d-flex flex-column h-100 flex-wrap p-5 rounded-custom ">*/}
{/*            <div className="cta-left-info mb-2">*/}
{/*              <h5><img src={focus} alt="cta img px-3" className="w-25"/> vision</h5>*/}
{/*              <p>We aspire to become the ultimate choice in the software industry in the MENA region by*/}
{/*delivering high-quality, customized,*/}
{/*and responsive applications*/}
{/*to our clients.</p>*/}
{/*            </div>*/}
{/*            <div className="mt-auto">*/}
{/*            </div>*/}
{/*          </div>*/}
{/*        </Col>*/}
{/*      </Row>*/}
    </>
  )
}

export default MissionPartners