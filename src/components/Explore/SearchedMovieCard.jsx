import "./SearchedMovieCard.css";
import photoBlankSVG from "../../assets/images/video.svg";
import { NavLink } from "react-router-dom";

import { posterPathBaseURL } from "../../data";

const SearchedMovieCard = (props) => {
    const { backdrop_path, id, original_title } = props;

    return (
        <NavLink to={`/movie/${id}`} className="searched-movie-card">
            <img
                src={
                    backdrop_path === null
                        ? photoBlankSVG
                        : `${posterPathBaseURL}${backdrop_path}`
                }
                alt={original_title}
            />
            <h3>{original_title}</h3>
        </NavLink>
    );
};

export default SearchedMovieCard;
