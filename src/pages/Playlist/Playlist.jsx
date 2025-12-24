import "./Playlist.css";
import { useContext } from "react";
import { AppContext } from "../../App";

import SingleBookmark from "./SingleBookmark";

const Playlist = () => {
    const { bookmarks } = useContext(AppContext);

    return (
        <div className="playlist">
            <div className="section-center playlist-center column column-3">
                {bookmarks.map((bookmark) => {
                    return <SingleBookmark key={bookmark.id} {...bookmark} />;
                })}
            </div>
        </div>
    );
};

export default Playlist;
