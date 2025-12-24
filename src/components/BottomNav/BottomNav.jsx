import "./BottomNav.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { useState } from "react";
import PagesSubmenu from "./PagesSubmenu";

const BottomNav = () => {
    const [showPagesSubmenu, setShowPageSubmenu] = useState(false);

    return (
        <>
            <nav className="bottom-nav">
                <div className="section-center bottom-nav-center">
                    <NavLink to="/">
                        <AiFillHome />
                        <span>home</span>
                    </NavLink>
                    <NavLink to="/">
                        <RiPlayList2Fill />
                        <span>playlist</span>
                    </NavLink>
                    <button
                        onClick={(event) =>
                            setShowPageSubmenu(!showPagesSubmenu)
                        }
                    >
                        <RiPagesFill />
                        <span>pages</span>
                    </button>
                </div>
            </nav>
            <PagesSubmenu
                setShowPageSubmenu={setShowPageSubmenu}
                showPagesSubmenu={showPagesSubmenu}
            />
        </>
    );
};

export default BottomNav;
