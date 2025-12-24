import { NavLink } from "react-router-dom";
import "./Join.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { AppContext } from "../../App";
import { useContext } from "react";

const Join = () => {
    const { user } = useContext(AppContext);

    return (
        <div className="join">
            <div className="section-center join-center">
                <article>
                    <h2>join the community</h2>
                    <p>share your options & connect with passionate critics.</p>
                    {user ? (
                        ""
                    ) : (
                        <NavLink to="/register" className="btn btn-white">
                            join
                        </NavLink>
                    )}
                </article>
                <BsFillPeopleFill className="community-img" />
            </div>
        </div>
    );
};

export default Join;
