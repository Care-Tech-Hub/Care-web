import { Nav } from "./Nav"
import { ContactComponent } from "./Contact"
import confusedVector from '../Assets/—Pngtree—confused man thinking of problem_8791349 .webp'
import careVisionImg from '../Assets/careVisionImg.svg'
import { socialIcon } from "./Contact"
import Footer from "./Footer"
const LearnMore = ({windowWidth, setWindowWidth})=>{
    return(
        <>
            <section className="learn_more">
                    <Nav showLearnMore='' windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
                    <div className="sect_details_container learn_more_sect_details_container">
                    <h2 className="section_title learn_more_section_title">Learn More</h2>
                        <div className="sections_detail learn_more_sections_detail">
                            <article>
                                <h3 className="articleTitle">What is Care Tech Hub</h3>
                                We are dedicated to advancing society through technology,
                                innovation, and education. Our mission is to bridge the digital
                                divide, empowering individuals from all socioeconomic backgrounds
                                to live, be responsible citizens, and harness their creativity and
                                innovation. Your presence at <strong>Care Tech Hub</strong> is never a mistake,
                                you are in the right place at the right time.
                            </article>
                            <img width='347px' className="about_care_img" src={confusedVector} alt="About care" />
                        </div>
                        <div className="sections_detail learn_more_sections_detail flex_column">
                            <img className="care_vision_img" width="470px" src={careVisionImg} alt="Care vision" />
                            <article>
                                <h3 className="articleTitle">Our Objective </h3>
                                <strong>*Empowerment Through Education:</strong> <br />
                                    .Comprehensive technology education and training.
                                    ·Personal development courses focused on responsibility,
                                    creativity, and innovation.<br />
                                <strong>*Inclusive Community Engagement:</strong> <br />
                                    .Programs catering to both the economically disadvantaged
                                    and the affluent.
                                    ·Fostering a sense of community through collaborative projects
                                    and events.<br />
                                <strong>*Sustainable Development:</strong> <br />
                                    Promoting sustainable living practices through technology.
                                    Encouraging responsible use of technology to improve
                            </article>
                        </div>
                        
                        <div className="sections_detail join_us_sections_detail">
                            <article>
                                <h3 className="articleTitle">Join Us</h3>
                                Whether you're a beginner interested in learning new technologies
                                or looking to enhance your skills and make a positive impact,
                                Care Tech Hub is your space to thrive. Together, we can create
                                a supportive and vibrant community where we learn from each other
                                and collaborate to achieve our goals.
                            </article>
                            {<ContactComponent socialIcons={socialIcon} contactTitle='Join Our Growing Community'/>}
                        </div>
                    </div>
            </section>
            <Footer />
        </>
    )
}
export default LearnMore