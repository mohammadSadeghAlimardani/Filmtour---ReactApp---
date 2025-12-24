import "./FAQs.css";
import { questions } from "../../data";
import SingleQuestion from "./SingleQuestion";

const FAQs = () => {
    return (
        <div className="FAQs">
            <div className="section-center FAQs-center">
                {questions.map((question) => {
                    return (
                        <SingleQuestion
                            key={question.questionID}
                            {...question}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FAQs;
