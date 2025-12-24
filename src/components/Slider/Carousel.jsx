import "./Carousel.css";
import CarouselCell from "./CarouselCell";

const Carousel = (props) => {
    const { pouplarMovies, count } = props;

    return (
        <div className="carousel">
            {pouplarMovies?.map((popularMovie, index) => {
                return (
                    <CarouselCell
                        count={count}
                        key={popularMovie.id}
                        index={index}
                        {...popularMovie}
                    />
                );
            })}
        </div>
    );
};

export default Carousel;
