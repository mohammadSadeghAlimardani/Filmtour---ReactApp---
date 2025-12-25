import { useQuery } from "@tanstack/react-query";
import "./Slider.css";
import axios from "axios";
import Loading from "../Loading";
import Alert from "../Alert";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import CarouselIndicators from "./CarouselIndicators";
import SectionTitle from "../SectionTitle";

import { popularMoviesURL, api_key } from "../../data";

const Slider = () => {
    const [pouplarMovies, setPopularMovies] = useState([]);
    const [count, setCount] = useState(0);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["pouplarMovies"],
        queryFn: async () => {
            const response = await axios.get(`${popularMoviesURL}${api_key}`);
            return response.data;
        },
    });

    useEffect(() => {
        if (data?.results) {
            setPopularMovies(data.results);
        }
    }, [data]);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Alert error={error} />;
    }

    return (
        <div className="slider">
            <div className="section-center slider-center">
                <SectionTitle
                    title="popular movies"
                    subTitle="critically acclaimed movies loved by audiences worldwide."
                />
                <section className="carousel-container">
                    <Carousel pouplarMovies={pouplarMovies} count={count} />
                    <CarouselIndicators
                        sizeOfPopularMovies={pouplarMovies.length}
                        setCount={setCount}
                        count={count}
                    />
                </section>
            </div>
        </div>
    );
};

export default Slider;
