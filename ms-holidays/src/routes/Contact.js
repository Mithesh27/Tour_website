import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assests/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        HeroImg={ContactImg}
        title="Contact"
        
        btnClass="none"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;