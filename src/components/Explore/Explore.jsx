import "./Explore.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../SectionTitle";
import Genres from "./Genres";
import FoundedMovies from "./FoundedMovies";

const searchMovieByNameURL = "https://api.themoviedb.org/3/search/movie?query=";

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { data: searchedMovies, refetch } = useQuery({
        queryKey: ["search", searchTerm],
        queryFn: async () => {
            const response = await axios.get(
                `${searchMovieByNameURL}${searchTerm}&api_key=${
                    import.meta.env.VITE_API_KEY
                }`
            );
            return response.data.results;
        },
        //everytime we invoke refetch, react query will work
        enabled: false,
    });

    const searchMovie = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setSearchTerm(formData.get("search"));
    };

    useEffect(() => {
        if (searchTerm) {
            refetch();
        }
    }, [searchTerm]);

    return (
        <div className="explore">
            <div className="section-center explore-center">
                <SectionTitle
                    title="explore genre"
                    subTitle="Dive into your favorite cinematic worlds."
                />
                <Genres />
                <form onSubmit={searchMovie}>
                    <input
                        type="search"
                        name="search"
                        placeholder="🔍 Search movie ..."
                    />
                    <button type="submit" className="btn btn-blue">
                        search
                    </button>
                </form>
                <FoundedMovies searchedMovies={searchedMovies} />
            </div>
        </div>
    );
};

export default Explore;
