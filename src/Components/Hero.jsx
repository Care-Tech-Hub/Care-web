import About from "./About";
import Service from "./Services";
import { Contact } from "./Contact";
import Footer from "./Footer";
import { Nav } from "./Nav";
const Hero = ({windowWidth,setWindowWidth}) => {
    return (
        <>
            <Nav showNavLinks={true} windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
            <section id="HomeSection" className="hero_section">
                <h1>Welcome to Care Tech Hub <br /> Advancing Society with Technology</h1>
                <a href="./LearnMore"> <button className="main_learn_more_btn">Learn More</button></a>
            </section>
            <About />
            <Service />
            <Contact />
            <Footer />
        </>
    );
};
export default Hero;
