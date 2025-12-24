import "./Error.css";
import { useRouteError } from "react-router-dom";
import notFoundImage from "../../assets/images/404.svg";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <div className="error">
                <div className="section-center error-center">
                    <img src={notFoundImage} alt="404" />
                </div>
            </div>
        );
    }
    return (
        <div className="error">
            <div className="section-center error-center">
                <p>something went wrong...</p>
            </div>
        </div>
    );
};

export default Error;
