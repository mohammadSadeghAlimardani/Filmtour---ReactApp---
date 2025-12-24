import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BottomNav from "../components/BottomNav/BottomNav";

const ShareLayout = () => {
    return (
        <>
            <Navbar />
            <BottomNav />
            <Outlet />
        </>
    );
};

export default ShareLayout;
