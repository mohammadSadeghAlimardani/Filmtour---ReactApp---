import "./CarouselCell.css";
import { NavLink } from "react-router-dom";

import { posterPathBaseURL } from "../../data";

const CarouselCell = (props) => {
    const { poster_path, original_title, id, index, count } = props;

    return (
        <NavLink
            to={`/movie/${id}`}
            className="carousel-cell"
            style={{ transform: `translateX(${(count + index) * 110}%)` }}
        >
            <img
                src={`${posterPathBaseURL}${poster_path}`}
                alt={original_title}
            />
            <h3>{original_title}</h3>
        </NavLink>
    );
};

export default CarouselCell;
