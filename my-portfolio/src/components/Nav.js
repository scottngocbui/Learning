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
            <h3>Logo</h3>
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