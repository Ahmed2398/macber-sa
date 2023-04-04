import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import { teams } from '../../Data/TeamData'
import Team from './Team'
import {motion} from "framer-motion";

const TeamList = () => {
  return (
    <>
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, type: 'tween' }}
            className="team ptb-60"
        >
        <Container>
          <Row>
            <Col xs={12} lg={12}>
                <div className="content-head text-center">
                <h4 className="text-warning text-uppercase">Our Team</h4>
                <h2 className="text-head-pros">The People Behind Macber</h2>
                <p className="lead pra-head-pros">Intrinsicly strategize cutting-edge before interoperable applications
                <br/> incubate extensive expertise through integrated intellectual capital.</p>
                </div>
              </Col>
               
                  {teams.map((team, index)=>{
                    // const{id, name, title , img, social} = team;
                    return(
                      <Col xs={12} md={6} lg={3} key={index} >
                        <div  className="team-single-wrap mb-1">
                        <Team key={team.id} name={team.name} title={team.title} img={team.img} social={team.social}/>
                        </div>
                        </Col>
                    )
                  })}
                    

              


            </Row>
        </Container>
        </motion.section>
    </>
  )
}

export default TeamList