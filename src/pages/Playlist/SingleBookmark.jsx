import { db } from "../../firebase";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import "./SingleBookmark.css";
import { NavLink } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../App";

import { posterPathBaseURL } from "../../data";

const SingleBookmark = (props) => {
    const { poster, title, id } = props;

    const { bookmarks, setBookmarks, user } = useContext(AppContext);

    const removeBookmark = async ({ user, id, title, poster }) => {
        if (!user) return;
        const userRef = doc(db, "users", user.uid);
        const bookmarkToRemove = {
            id: id,
            title: title,
            poster: poster,
        };
        setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
        try {
            await updateDoc(userRef, {
                bookmarks: arrayRemove(bookmarkToRemove),
            });
            toast.info("bookmark successfully removed");
        } catch (error) {
            console.error("Error removing bookmark:", error);
        }
    };

    return (
        <article className="bookmark" key={id}>
            <NavLink to={`/movie/${id}`}>
                <img src={`${posterPathBaseURL}${poster}`} alt={title} />
            </NavLink>
            <ul>
                <h3>{title}</h3>
                <button
                    onClick={(event) =>
                        removeBookmark({
                            user,
                            id,
                            title,
                            poster,
                        })
                    }
                >
                    <FaTrashAlt />
                </button>
            </ul>
        </article>
    );
};

export default SingleBookmark;
