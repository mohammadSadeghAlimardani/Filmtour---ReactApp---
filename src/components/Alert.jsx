const Alert = ({ error }) => {
    return (
        <div className="alert alert-danger">
            <div className="alert-icon">&#10799;</div>
            <p>{error.response}</p>
        </div>
    );
};

export default Alert;
