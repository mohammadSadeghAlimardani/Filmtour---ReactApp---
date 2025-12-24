import "./Movie.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import Cast from "./Cast";
import Bookmark from "./Bookmark";
import Likes_Dislikes__count from "./Likes_Dislikes__count";
import GenreTags from "./GenreTags";
import Details from "./Details";

const searchMovieByID_ULR = "https://api.themoviedb.org/3/movie/";

export const loader = async ({ params }) => {
    const { id } = params;

    try {
        //get credits info
        const creditsResponse = await axios.get(
            `${searchMovieByID_ULR}${id}/credits?api_key=${
                import.meta.env.VITE_API_KEY
            }`
        );

        //get movie info
        const movieResponse = await axios.get(
            `${searchMovieByID_ULR}${id}?api_key=${
                import.meta.env.VITE_API_KEY
            }`
        );

        return {
            movieInfo: movieResponse.data,
            movieCredits: creditsResponse.data,
        };
    } catch (error) {
        return error;
    }
};

const Movie = () => {
    const { user, bookmarks, setBookmarks } = useContext(AppContext);
    const { movieInfo, movieCredits } = useLoaderData();

    let {
        backdrop_path,
        original_title,
        overview,
        genres,
        production_countries,
        runtime,
        vote_average,
        vote_count,
        release_date,
    } = movieInfo;

    const year = new Date(release_date).getFullYear();
    production_countries = production_countries.map((country) => country.name);
    vote_average = vote_average.toFixed(1);
    const likes = Math.round(vote_count * vote_average * 0.1);
    const dislikes = vote_count - likes;

    const { cast, crew } = movieCredits;

    return (
        <div className="movie">
            <div className="section-center movie-center">
                <img
                    src={
                        backdrop_path === null
                            ? photoBlankSVG
                            : `${
                                  import.meta.env.VITE_ORIGINAL_MOVIE_IMAGE_URL
                              }${backdrop_path}`
                    }
                    alt={original_title}
                />
                <Details
                    year={year}
                    vote_average={vote_average}
                    production_countries={production_countries}
                    runtime={runtime}
                />
                <h1>{original_title}</h1>
                <p className="overview">{overview}</p>
                <GenreTags genres={genres} />
                <Likes_Dislikes__count likes={likes} dislikes={dislikes} />
                <Cast cast={cast} />
                <Bookmark
                    bookmarks={bookmarks}
                    setBookmarks={setBookmarks}
                    movieInfo={movieInfo}
                    user={user}
                />
            </div>
        </div>
    );
};

export default Movie;
