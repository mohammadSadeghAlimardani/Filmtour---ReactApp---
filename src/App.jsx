import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import ShareLayout from "./pages/ShareLayout";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import FAQs from "./pages/FAQs/FAQs";
import Playlist from "./pages/Playlist/Playlist";
import Character, {
    loader as characterLoader,
} from "./pages/Character/Character";
import Movie, { loader as movieLoader } from "./pages/Movie/Movie";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ShareLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/FAQs",
                element: <FAQs />,
            },
            {
                path: "/playlist",
                element: <Playlist />,
            },
            {
                path: "/movie/:id",
                element: <Movie />,
                loader: movieLoader,
            },
            {
                path: "/character/:id",
                element: <Character />,
                loader: characterLoader,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export const AppContext = createContext();

const App = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [bookmarks, setBookmarks] = useState([]);

    const getUserBookmarks = async () => {
        if (!user) return [];

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data().bookmarks || [];
        } else {
            return [];
        }
    };

    useEffect(() => {
        if (user) {
            const getBookmarks = async () => {
                const bookmarks = await getUserBookmarks();
                setBookmarks(bookmarks);
            };
            getBookmarks();
        }
    }, [user]);

    return (
        <AppContext.Provider value={{ user, setUser, bookmarks, setBookmarks }}>
            <ToastContainer position="top-center" autoClose={1500} />
            <RouterProvider router={router} />
        </AppContext.Provider>
    );
};

export default App;
