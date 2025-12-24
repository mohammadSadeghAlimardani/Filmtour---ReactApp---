import { db } from "../../firebase";
import {
    doc,
    setDoc,
    arrayUnion,
    updateDoc,
    arrayRemove,
} from "firebase/firestore";

import "./Bookmark.css";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Bookmark = (props) => {
    const { bookmarks, setBookmarks, movieInfo, user } = props;

    const navigate = useNavigate();

    const addBookmark = async ({ user, id, title, poster }) => {
        const userRef = doc(db, "users", user.uid);
        try {
            await setDoc(
                userRef,
                {
                    bookmarks: arrayUnion({
                        id: id,
                        title: title,
                        poster: poster,
                    }),
                },
                { merge: true }
            );
            setBookmarks([
                ...bookmarks,
                {
                    id: id,
                    title: title,
                    poster: poster,
                },
            ]);
            toast.success("you bookmarked the movie");
        } catch (error) {
            toast.error("Error bookmarking movie:", error);
        }
    };

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
        <>
            {bookmarks?.find((bookmark) => bookmark.id === movieInfo.id) ? (
                <button
                    className="bookmark-btn"
                    onClick={(event) => {
                        removeBookmark({
                            user,
                            id: movieInfo.id,
                            title: movieInfo.original_title,
                            poster: movieInfo.backdrop_path,
                        });
                    }}
                >
                    <BsBookmarkPlusFill />
                </button>
            ) : (
                <button
                    className="bookmark-btn"
                    onClick={(event) => {
                        if (!user) {
                            navigate("/register");
                        } else {
                            addBookmark({
                                user,
                                id: movieInfo.id,
                                title: movieInfo.original_title,
                                poster: movieInfo.backdrop_path,
                            });
                        }
                    }}
                >
                    <BsBookmarkPlus />
                </button>
            )}
        </>
    );
};

export default Bookmark;
