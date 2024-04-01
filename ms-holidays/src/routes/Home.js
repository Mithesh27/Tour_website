import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assests/home.jpeg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home (){
    return(
        <>
        <Navbar/>

        <Hero
        cName="hero"
        HeroImg={HomeImg}
        //HeroImg="https://images.unsplash.com/photo-1514480605825-a4804160b313?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // HeroImg="https://images.unsplash.com/photo-1484199383121-dfa3c30608cd?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;