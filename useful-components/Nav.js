import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>Logo goes here</h3>
            <nav ref={navRef}>
                <a href="#0">Home</a>
                <a href="#0">About Me</a>
                <a href="#0">Skills</a>
                <a href="#0">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars />
            </button>
        </header>
    );
};

export default Nav;

// This code gives a cool nav bar that is reactive and shows a hamburger menu for smart phones.