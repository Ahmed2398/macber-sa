import React from 'react';
import CarouselHeader from '../components/Carousel/CarouselHeader';
import BenfitsList from '../components/Benfits/BenfitsList';
import Partners from '../components/Partners/Partners';
import ProcessList from '../components/Process/ProcessList';
import FaqList from '../components/Faq/FaqList';
import ContactUs from '../components/ContactUs/ContactUs';
import TeamList from '../components/Team/TeamList';
import OfficeList from '../components/Office/OfficeList';
import OurWorksList from '../components/OurWorks/OurWorksList';
import Clients from "../components/Clients/Clients";
import Services from "../components/Services/Services";
const Home = () => {
   
  return (
    <>
    <CarouselHeader/>    
    <BenfitsList/>
    <Partners/>
      <Services/>
    <ProcessList/>
      <OurWorksList/>
      <ContactUs/>
    {/*<TeamList/>*/}
    <OfficeList/>
      {/*<Clients/>*/}
      <FaqList/>

    </>
  )
}

export default Home