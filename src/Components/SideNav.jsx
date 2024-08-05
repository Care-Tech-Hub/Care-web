import { useState } from "react";

const SideNav = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={`hand_buger_menue ${showSidebar ? 'animate': ''}`}>
                <div className="line line_1"></div>
                <div className="line line_2"></div>
                <div className="line line_3"></div>
            </div>
            <div
            className={`sidebar ${showSidebar ? 'show' : ''}`}
            >
            <ul>
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
            </div>
        </div>
    );};

export default SideNav;
