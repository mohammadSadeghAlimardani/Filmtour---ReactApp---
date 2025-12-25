import "./Likes_Dislikes__Count.css";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const Likes_Dislikes__Count = (props) => {
    const { likes, dislikes } = props;

    return (
        <section className="likes-dislikes__count">
            <article>
                <button className="like-btn">
                    <BiSolidLike />
                </button>
                <span>{likes}</span>
            </article>
            <article>
                <button className="dislike-btn">
                    <BiSolidDislike />
                </button>
                <span>{dislikes}</span>
            </article>
        </section>
    );
};

export default Likes_Dislikes__Count;
