import { useState } from "react";
import "./SingleQuestion.css";
import { FaChevronCircleUp } from "react-icons/fa";

const SingleQuestion = (props) => {
    const { questionText, answerText } = props;
    const [showAnswerText, setShowanswerText] = useState(false);

    return (
        <article className="single-question">
            <header className={showAnswerText ? "mb-4" : ""}>
                <h4>{questionText}</h4>
                <button onClick={(event) => setShowanswerText(!showAnswerText)}>
                    <FaChevronCircleUp
                        className={showAnswerText ? "rotated" : ""}
                    />
                </button>
            </header>
            <p>{answerText}</p>
        </article>
    );
};

export default SingleQuestion;
