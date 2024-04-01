import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/12.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Service"
        
        btnClass="none"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;