import "./Genres.css";
import { genresList } from "../../data";

const Genres = () => {
    return (
        <div className="genres">
            {genresList.map((genre) => {
                const { icon, genreTitle, number, genreID } = genre;
                return (
                    <article className="genre" key={genreID}>
                        <span>{icon}</span>
                        <div>
                            <h3>{genreTitle}</h3>
                            <h4>{number}</h4>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Genres;
