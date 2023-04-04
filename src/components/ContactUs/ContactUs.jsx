import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import contact from '../../assets/images/contactHead.png'
import SocialMedia from '../SocialMedia/SocialMedia';
import {motion} from "framer-motion";
import './ContactUS.css';
const ContactUs = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ba10cc36-c997-4be3-9982-1c6e9191239c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
        }else{
            console.log("Error", res);
            setResult(res.message);
        }


        };
  return (
    <>
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, type: 'tween' }}
            class="contact-us ptb-60"
        >
    <Container>
        <Row>
            <Col xs={12} lg={6} className="m-auto">
                

            {/*<img src={contact} alt={contact}/>*/}
              <h2 className="text-warning contactHead">Contact Us LET’S WORK TOGETHER</h2>
          <p className="text-white ">Reach out to us for a consultation, overview, and to know more about our services.
          </p>
          
          <i className="fa-solid fa-location-dot text-white mt-2 mx-2"></i>
          <span className="text-white">Address: Building 2, Ground Floor, Apt. 1, Talaat Harb Axis, District 3, Area 4,
            Fifth settlement, New Cairo, Egypt</span>
            <SocialMedia className="s"/>
            </Col>
            <Col xs={12} lg={6} className="form-box">
            <form onSubmit={onSubmit}>
            <div className="mb-3 py-1">
              <input type="text" name="name" className="form-control p-3"  placeholder="Name"/>
            </div>
            <div className="mb-3 py-1">
              <input type="number" name="phone" className="form-control p-3"  placeholder="Phone Number"/>
            </div>
            <div className="mb-3 py-1">
              <input type="email" name="email"  className="form-control p-3"  placeholder="Email"/>
            </div>
            <div className="mb-3 py-1">
              <input type="text" name="company"  className="form-control p-3"  placeholder="Company"/>
            </div>
            <div className="mb-3 py-1">
              <textarea name="message" className="form-control p-3"  placeholder="Message"></textarea>
            </div>
            <button className="btn btn-costume-two btn-contact text-uppercase" type="submit">Submit Form</button>
        </form>
                <span>{result}</span>
            </Col>

        </Row>
    </Container>
        </motion.section>
    
    </>
 
  )
}

export default ContactUs