import techStackProgramsImg from '../Assets/computer-programming-programming-language-icon-software-technology-icon-210ad0497cff99276d84c71b8357ba5d 1.webp'
import personalDevelopmentImg from '../Assets/—Pngtree—future technology mobile internet business_5753881 1.webp'
import innovationForAllImg from '../Assets/innovation_for_all2 1.webp'
const Service = ()=>{
    const ServiceDisplay = (props)=>{
        return(
            <div className="our_services">
                <figure >
                    <img  src={props.serviceImg} alt="services" />
                    <figcaption>{props.servicesText}</figcaption>
                </figure>
                <article>
                    {props.serviceExplained}
                </article>
            </div>
        )
    }
    return(
        <section id='ServicesSection' className="Services_section">
            <div>
                <svg className="circle-Graphic circle-GraphicTop" width="73" height="187" viewBox="0 0 73 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="-20.5" cy="93.5" r="93.5" fill="#D9D9D9"/>
                </svg>
                <svg className="circle-Graphic circle-GraphicBottom" width="83" height="187" viewBox="0 0 83 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="93.5" cy="93.5" r="93.5" fill="#D9D9D9"/>
                </svg>
            </div>

            <h2 className="section_title">Our Services</h2>

        <div className="sect_details_container services_details">
            {
                <ServiceDisplay
                    servicesText='Tech Stack Programs '
                    serviceImg={techStackProgramsImg}
                    serviceExplained='From basic computer literacy to advanced programming concepts and technologies.'
                />
            }
            {
                <ServiceDisplay
                    servicesText='Personal Development'
                    serviceImg={personalDevelopmentImg}
                    serviceExplained='Workshops on ethical use of technology,
                    innovation seminars, and life skills training.'
                />
            }
            {
                <ServiceDisplay
                    servicesText='Innovation For All'
                    serviceImg={innovationForAllImg}
                    serviceExplained='Collaborative technology projects
                    and mentorship programs fostering innovation.'
                />
            }
        </div>
        </section>
    )
}

export default  Service