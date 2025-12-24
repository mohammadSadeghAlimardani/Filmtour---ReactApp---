import "./Details.css";
import { FaImdb } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Details = (props) => {
    const { year, vote_average, production_countries, runtime } = props;

    return (
        <ul className="details">
            <li>
                <span>{year}</span>
            </li>
            <li>
                <FaImdb />
                <span>{vote_average}/10</span>
            </li>
            <li>
                <span>{production_countries.join(", ")}</span>
            </li>
            <li>
                <FaClock />
                <span>{runtime} mins</span>
            </li>
        </ul>
    );
};

export default Details;
