import "./PagesSubmenu.css";
import { NavLink } from "react-router-dom";

const PagesSubmenu = (props) => {
    const { showPagesSubmenu } = props;

    return (
        <ul
            className={
                showPagesSubmenu
                    ? "pages-submenu"
                    : "pages-submenu show-pages-submenu"
            }
        >
            <li>
                <NavLink to="/about">about</NavLink>
            </li>
        </ul>
    );
};

export default PagesSubmenu;
