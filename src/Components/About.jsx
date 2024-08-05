import AboutCareImg from "../Assets/hd_tech_img.webp";
import CareVisionImg  from "../Assets/person-using-ar-technology-their-daily-occupation.webp"
const About = () => {
    return (
        <section id="AboutSection" className="About_section">


            <div>
                <svg className="circle-Graphic circle-GraphicTop" width="73" height="187" viewBox="0 0 73 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="-20.5" cy="93.5" r="93.5" fill="#D9D9D9"/>
                </svg>
                <svg className="circle-Graphic circle-GraphicBottom" width="83" height="187" viewBox="0 0 83 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="93.5" cy="93.5" r="93.5" fill="#D9D9D9"/>
                </svg>
            </div>

            <h2 className="section_title">About</h2>

        <div className="sect_details_container">
            <div className="sections_detail">
                <article>
                    <h3 className="articleTitle">What is Care Tech Hub</h3>
                    care tech hub is an NGO committed to providing accessible technology
                    education and personal development programs.
                </article>
                <img className="about_care_img" width="600px" src={AboutCareImg} alt="About care" />
            </div>
            <div className="sections_detail">
                <img className="care_vision_img" width="470px" src={CareVisionImg} alt="Care vision" />
                <article>
                    <h3 className="articleTitle">Our Vision </h3>
                    We aim to create a world where everyone excel and contribute positively
                    to the society, regardless of their background
                </article>
            </div>
        </div>


        </section>
    );
};

export default About;
