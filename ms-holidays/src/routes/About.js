import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="About"
        
        btnClass="none"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;