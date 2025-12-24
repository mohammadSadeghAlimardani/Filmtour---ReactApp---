import "./CarouselIndicators.css";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const CarouselIndicators = (props) => {
    const { setCount, count } = props;

    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div className="carousel-indicators">
            <button className="prev" onClick={(event) => increaseCount()}>
                <FaCircleChevronLeft />
            </button>
            <button className="next" onClick={(event) => decreaseCount()}>
                <FaCircleChevronRight />
            </button>
        </div>
    );
};

export default CarouselIndicators;
