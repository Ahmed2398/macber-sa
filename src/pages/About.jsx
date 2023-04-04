import React from 'react';
import AboutHeader from "../components/AboutHeader/AboutHeader";
import AboutValues from "../components/AboutHeader/AboutValues";
import TeamList from "../components/Team/TeamList";
import OfficeList from "../components/Office/OfficeList";
import Clients from "../components/Clients/Clients";
import Services from "../components/Services/Services";
import '../assets/style/MediaScreen.css';
const About = () => {
    return (
        <>
            <AboutHeader/>
            <AboutValues/>
            <Services/>
            {/*<TeamList/>*/}
            <OfficeList/>
            <Clients/>
        </>
    );
};

export default About;