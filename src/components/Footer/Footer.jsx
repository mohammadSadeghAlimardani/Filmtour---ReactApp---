import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaCircleChevronUp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-center footer-center">
                <section>
                    <ul>
                        <li>
                            <NavLink to="./">home</NavLink>
                        </li>
                        <li>
                            <NavLink to="./about">about</NavLink>
                        </li>
                    </ul>
                </section>
                <div className="border"></div>
                <section>
                    <ul>
                        <li>
                            <NavLink to="./">
                                <FaTwitter />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="./">
                                <FaLinkedin />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="./">
                                <FaInstagram />
                            </NavLink>
                        </li>
                    </ul>
                    <p>
                        &copy; {new Date().getFullYear()} all rights reserved.
                    </p>
                    <a href="#" className="goToTop-btn">
                        <FaCircleChevronUp />
                    </a>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
