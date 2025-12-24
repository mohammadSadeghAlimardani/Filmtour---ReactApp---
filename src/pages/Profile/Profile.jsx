import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import "./Profile.css";
import picProfileSVG from "../../assets/images/pic-profile.svg";
import { useContext, useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { LuBookmarkMinus } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa";
import { AppContext } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem("user");
            navigate("/");
            toast.success("You have logged out successfully");
        } catch (error) {
            // console.error("Logout error:", error);
        }
    };

    return (
        <div className="profile">
            <div className="section-center profile-center">
                <header>
                    <img src={picProfileSVG} alt="pic-profile" />
                    <section>
                        <h4>email : {user?.email}</h4>
                    </section>
                </header>
                <div className="profile-links">
                    <NavLink to="/playlist">
                        <LuBookmarkMinus />
                        <span>bookmarks</span>
                    </NavLink>
                    <NavLink to="/FAQs">
                        <FaQuestion />
                        <span>FAQs</span>
                    </NavLink>
                </div>
                <button
                    onClick={handleLogout}
                    className="btn btn-red log-out-btn"
                >
                    log out <IoLogOutOutline />
                </button>
            </div>
        </div>
    );
};

export default Profile;
