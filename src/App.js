import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import SoftwareDev from './pages/SoftwareDev';
import Contact from "./pages/Contact";

function App() {
  return (

    <>
    <Header/>
   <Routes>

   <Route path="/"  element={<Home />} />
   <Route path='about'  element={<About />}/>
   <Route path='softwaredev' element={<SoftwareDev />}/>
   <Route path='contact' element={<Contact />}/>

   </Routes>
    <Footer/>
    </>
  );
}

export default App;
