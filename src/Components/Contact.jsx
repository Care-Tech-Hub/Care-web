import xIcon from '../Assets/x icon.webp'
import instaIcon from '../Assets/imgbin_instagram-logo-icon-png.webp'
import facebookIcon from '../Assets/1657548367Facebook-logo.webp'
import linkedinIcon from '../Assets/vecteezy-linkedin-logo-png-linkedin-logo-transparent-png-linkedin-23986970-66ae048f0e528.webp'
import emailjs from '@emailjs/browser'
import {useState } from 'react'
const socialIcon =
    [
        <li key={xIcon}><a href="">
            <img width='50px' src={xIcon} alt="x" /></a></li>,
        <li key={instaIcon}><a href="https://www.instagram.com/caretechhub?igsh=YzljYTk1ODg3Zg==">
            <img width='50px' src={instaIcon} alt="instagram" /></a></li>,
        <li key={facebookIcon}><a href="https://www.facebook.com/profile.php?id=61561526923757">
            <img width='50px' src={facebookIcon} alt="facebook" /></a></li>,
        <li key={linkedinIcon}><a href="https://www.linkedin.com/in/care-tech-hub-256335320?trk=contact-info">
            <img width='50px' src={linkedinIcon} alt="linkedin" /></a></li>
    ]
const ContactComponent = ({contactTitle,socialIcons})=>{
    // **loading state***
    const [loading, setLoading] = useState(false)
    // **** checkbox checked value ****
    const [checked,setChecked] = useState({
        radio1: false,
        radio2: false,
        radio3: false,
    })
    // *** checkbox inquiry value ***
    const [checkValue, setCheckValue] = useState({})
    // *** user_data ***
    const [userDetails,setUserDetails] = useState({
        name: '',
        email: '',
        message: ''
    })
    // *** function called when the checkbox is clicked
    // const handleClick = (e) => {
    //     const { name } = e.target;
    //     setChecked((prevCheck) => ({ ...prevCheck, [name]: !prevCheck[name] }));

    //     setCheckValue({
    //         general: checked.radio1 ? 'General' : '',
    //         services: checked.radio2 ? 'Services' : '',
    //         join: checked.radio3 ? 'Join' : '',
    //     });
    //     console.log(checkValue);
    // };
    // *** user details updater
    const handleUserDetails = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };
    // *** form submit functionality
    const submitEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        const messageTemplate = {
            to_name: "Care Tech Hub",
            senderName: userDetails.name,
            senderEmail: userDetails.email,
            message: userDetails.message,
        };
        emailjs.send(
            'service_wllmb0f',
            'template_evk3xg9',
            messageTemplate,
            'AzaOCvrgv5jE1kmAg'
        )
            .then((response) => {
                setLoading(false)
                alert('Email Sent Successful',response);
                setUserDetails({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) =>{
                setTimeout(() => {
                    setLoading(false)
                    alert('Failed. Check your details and internet connection', error)
                }, 1000);
            })
    }

    const Loader = ()=>{
        return(
            <div className='loading_container'>
                <div className="loading_dots dot1"></div>
                <div className="loading_dots dot2"></div>
                <div className="loading_dots dot3"></div>
            </div>
        )
    }

    return(
        <div className="contact_details_container">
            <div className="contact_header">
                <h3>{contactTitle}</h3>
            </div>
            <form onSubmit={submitEmail} className="contact_body">
                <div className="inputs">
                <input
                    required={true}
                    onChange={handleUserDetails}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userDetails.name}/>
                <input
                    required={true}
                    onChange={handleUserDetails}
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={userDetails.email}/>
                </div>
                <div className="contact_body_details">
                    {/* <div title='Give us an insight of what you want to talk about' className="contact_inquiry">
                        <span>Inquiry:</span>
                            <label htmlFor='radio1'>General</label>
                            <input
                                onChange={handleClick}
                                checked={checked.radio1}
                                type="radio"
                                name='radio1' />
                            <label htmlFor='radio2'>Services</label>
                            <input
                                onChange={handleClick}
                                checked={checked.radio2}
                                type="radio"
                                name='radio2' />
                            <label htmlFor='radio3'>Join</label>
                            <input
                                onChange={handleClick}
                                checked={checked.radio3}
                                type="radio"
                                name='radio3' />
                    </div> */}
                    <textarea
                        required={true}
                        onChange={handleUserDetails}
                        placeholder='Message'
                        id="message"
                        name="message"
                        value={userDetails.message}>
                    </textarea>
                    <div className="messageFooter">
                        <ul>
                            {socialIcons}
                        </ul>
                        <button className='message_submit_btn' type='submit'>{loading ? <Loader /> : 'Submit'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
const Contact = ()=>{
    return(
        <section id="ContactSection" className="contact_section">
            <section className="Contact_right_sec">

            <ContactComponent  contactTitle='Contact Us' inquiry='Services' />

            </section>

            <section className="social_contact_sec">
                <div className="social_contact_title">
                    <h3>Reach Us On</h3>
                </div>

                <div className="social_icons">
                    <ul>
                        {[...socialIcon]}
                    </ul>
                </div>
            </section>
        </section>
    )
}
export  {Contact, ContactComponent, socialIcon}