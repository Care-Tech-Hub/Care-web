import { useState } from "react";
import { Nav } from "./Nav"

const PrivacyPolicy = ()=>{
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    return(
        <>
            <Nav showNavLinks={false} windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
            <section role="document" className="Privacy_plcy_section">
                <h1>Privacy Policy</h1>
                <h4>June 2024 </h4>
                <p>Care Tech Hub is committed to protecting the privacy and security of our members and visitors.
                    This Privacy Policy outlines how we collect,<br/> use, disclose, and safeguard your information when you visit
                    our website <a href="https://care-web-pink.vercel.app/">Care Tech Hub</a> and engage with our services.
                </p>

                <h3>Information We Collect</h3>
                    <ol>
                        <li>
                            Personal Information:
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Address</li>
                                <li>Payment information(for membership and donations)</li>
                            </ul>
                        </li>
                        <li>
                            Non-Personal Information:
                            <ul>
                                <li>Browser Type</li>
                                <li>Device information</li>
                                <li>IP address</li>
                                <li>Pages visited on our website</li>
                                <li>Referring Website</li>
                            </ul>
                        </li>

                    </ol>
                    <h3>How We Use Your Information</h3>
                        <ol>
                            <li>
                                To Provide and Manage Services:
                                Process memberships, donations, and event<br/> registrations
                                Communicate with you about updates, events, and opportunities
                                Provide personalized content and recommendations
                            </li>
                            <li>
                                For Administrative Purposes:
                                <ul>
                                    <li>Improve our website and services</li>
                                    <li>Conduct research and analysis</li>
                                    <li>Monitor and prevent any fraudulent or unauthorized activity</li>
                                </ul>
                            </li>
                            <li>
                                For Legal Compliance:
                                <li>Comply with legal obligations</li>
                                <li>Enforce our terms and conditions</li>
                            </li>
                        </ol>
                    <h3>Information Sharing and Disclosure</h3>
                        <ul>
                            <li>
                                Third-Party Service Providers: We may share your information with
                                third-party service providers who assist us in operating our website,<br/>
                                conducting our business, or providing services to you.
                            </li>
                            <li>
                                Requirements: We may disclose your information if required
                                to do so by law or in response to valid requests by public authorities.
                            </li>
                            <li>
                                Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, 
                                your information may be transferred as part of that transaction.
                            </li>
                        </ul>
                    <h3 style={{fontSize: '25px'}}>Security</h3>
                    <p>We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure.
                        <br/>However, no internet or email transmission is ever fully secure or error-free,
                        so you should take special care in deciding what information you send to us.
                    </p>
                    <h3 style={{fontSize: '25px'}}>Your Rights</h3>
                        <ol>
                            <li>
                                You have the right to:
                                <ul>
                                    <li>Access the personal information we held about you</li>
                                    <li>Request the personal information we held about you</li>
                                    <li>request deletion of your personal information</li>
                                    <li>object to the processing of your personal information</li>
                                    <li>Request data portability</li>
                                </ul>
                            </li>
                        </ol>

                    <p>To exercise these rights, please contact us at <a href="https://caretechhub@gmail.com">caretechhub@gmail.com</a></p>

                    <h3>Changes to This Privacy Policy</h3>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued
                            use of our website and services after any changes indicates your acceptance of the new Privacy Policy.
                        </p>
                    <h3>Contact us</h3>
                        <ul>
                            <p>
                                Contact Us If you have any questions or concerns about this Privacy Policy, please contact us at: Care Tech Hub
                                Minister’s quarters, Mabushi, FCT
                            </p>
                            <p>
                                <a href="https://caretechhub@gmail.com">caretechhub@gmail.com</a>
                            </p>
                            <p>
                                <a href="tel:+2347061065498">+2347061065498</a> or <a href="tel:+2349117559163">+2349117559163</a>
                            </p>
                        </ul>
            </section>
        </>
    )
}

export default PrivacyPolicy