import AboutUs from "./AboutUs";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Services from "./Services";


function Home(){
  return(
    <>

    

    <Navbar/>
    
    <Header/>
    <HowItWorks/>
    <AboutUs/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home;