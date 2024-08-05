import {useEffect } from 'react'
import careLogo from '../Assets/care_tech_hub_logo.webp'
import SideNav from './SideNav'

const Nav = ({showNavLinks, windowWidth, setWindowWidth})=>{

useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
};
}, []);

const mobileScreenSize = windowWidth <= 897 ? true : false;
    // scroll behavior
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link =>{
    link.addEventListener('click',event =>{event.preventDefault()
        document.querySelectorAll('.nav_links_container ul li a').forEach(link =>{
            link.classList.remove('active');
        })
        const target = document.querySelector(link.getAttribute('href'));
        // document.getElementById().classList.add('active')
        target.scrollIntoView({
        behavior: 'smooth' ,
        block: 'start',
        inline: 'nearest'
        })
    },);
    })
    return(
        <nav className={showNavLinks ? 'nav_bar' : 'centerNavText'}>
            <div className='nav_logo_container'>
                <a title="Home" href="."><img width='88px' src={careLogo} alt="Logo" /></a>
                {windowWidth > '485px' && <h1 className='logo_heading'>Care Tech Hub</h1>}
            </div>
            {
            showNavLinks &&
                <div className='nav_links_container'>
                    {
                        mobileScreenSize ?
                        <SideNav /> :
                        <ul>
                        {/* remember to add underlining to the current link in */}
                        <li>
                            <a href="#HomeSection">Home</a>
                        </li>
                        <li>
                            <a href="#AboutSection">About</a>
                        </li>
                        <li>
                            <a href="#ServicesSection">Service</a>
                        </li>
                        <li>
                            <a href="#ContactSection">Contact</a>
                        </li>
                    </ul>
                    }
                </div>
            }
        </nav>
    )
}
export {Nav,careLogo}