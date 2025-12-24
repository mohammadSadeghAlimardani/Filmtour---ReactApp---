import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
    const { user } = useContext(AppContext);

    return (
        <nav className="navbar">
            <div className="section-center nav-center">
                <h1>
                    film
                    <span>Tour</span>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                </ul>
                {user ? (
                    <NavLink to="/profile" className="profile-btn">
                        <FaRegCircleUser />
                    </NavLink>
                ) : (
                    <NavLink
                        to="/register"
                        className="btn btn-red register-btn"
                    >
                        login
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
