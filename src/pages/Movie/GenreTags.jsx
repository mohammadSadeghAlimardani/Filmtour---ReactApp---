import "./GenreTags.css";

const GenreTags = (props) => {
    const { genres } = props;
    return (
        <ul className="genre-tags">
            {genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
    );
};

export default GenreTags;
