import "./FoundedMovies.css";
import SearchedMovieCard from "./SearchedMovieCard";

const FoundedMovies = (props) => {
    const { searchedMovies } = props;

    return (
        <div className="founded-movies column column-3">
            {searchedMovies?.map((searchedMovie) => {
                return (
                    <SearchedMovieCard
                        key={searchedMovie.id}
                        {...searchedMovie}
                    />
                );
            })}
        </div>
    );
};

export default FoundedMovies;
