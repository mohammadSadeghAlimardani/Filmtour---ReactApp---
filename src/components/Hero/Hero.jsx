import { useEffect, useState } from "react";
import "./Hero.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink } from "react-router-dom";

const trendingMovieURL =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=";

const originalMovieImageURL = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
    const [trendMovie, setTrendMovie] = useState("");

    const { data } = useQuery({
        queryKey: ["trendMovie"],
        queryFn: async () => {
            const response = await axios.get(
                `${trendingMovieURL}${import.meta.env.VITE_API_KEY}`
            );
            return response.data;
        },
    });

    useEffect(() => {
        if (data?.results) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setTrendMovie(data.results[randomIndex]);
        }
    }, [data]);

    const { original_title, overview, id, backdrop_path } = trendMovie;

    return (
        <div
            className="hero"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                    import.meta.env.VITE_ORIGINAL_MOVIE_IMAGE_URL
                }${backdrop_path}) 50% 50%/cover`,
            }}
        >
            <div className="section-center hero-center">
                <h2>{original_title}</h2>
                <p>{overview}</p>
                <NavLink className="btn btn-red" to={`/movie/${id}`}>
                    read more
                </NavLink>
            </div>
        </div>
    );
};

export default Hero;
