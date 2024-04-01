import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignUpImg from "../assests/8.jpg";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";


function SignUp (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        HeroImg={SignUpImg}
        title="SignUp"
        
        btnClass="none"
        />
        <SignUpForm/>
        <Footer/>
        </>
    )
}

export default SignUp;