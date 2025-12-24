import "./Cast.css";
import picProfile from "../../assets/images/pic-profile.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { posterPathBaseURL } from "../../data";

const Cast = (props) => {
    const { cast } = props;

    const [castPeople, setCastPeople] = useState(cast.slice(0, 5));
    const [showMoreCast, setShowMoreCast] = useState(false);

    return (
        <section className="cast">
            <div className="cast-people">
                {castPeople?.map((castPerson) => {
                    const { original_name, profile_path, id } = castPerson;
                    return (
                        <NavLink
                            to={`/character/${id}`}
                            className="cast-person"
                            key={id}
                        >
                            <img
                                src={
                                    profile_path === null
                                        ? picProfile
                                        : `${posterPathBaseURL}${profile_path}`
                                }
                                alt={original_name}
                            />
                            <h5>{original_name}</h5>
                        </NavLink>
                    );
                })}
            </div>
            {showMoreCast ? (
                <button
                    onClick={(event) => {
                        setCastPeople(cast.slice(0, 5));
                        setShowMoreCast(false);
                    }}
                    className="cast-btn"
                >
                    show less
                </button>
            ) : (
                <button
                    onClick={(event) => {
                        setCastPeople(cast);
                        setShowMoreCast(true);
                    }}
                    className="cast-btn"
                >
                    show more...
                </button>
            )}
        </section>
    );
};

export default Cast;
