//import scss
import "../../SCSS/Header.scss";
import "../../SCSS/mixins.scss";

//react imports
import { Link } from "react-router-dom";
import { useState } from "react";

//component imports

function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburgerInactive");
  const [menuDisplay, setMenuDisplay] = useState("display-none");
  function closeMenu() {
    setMenuDisplay("display-none");
    setHamburgerMenu("hamburgerInactive");
    document.body.style.overflow = "visible";
  }

  return (
    <header className="padding">
      <div className="header-content max-width ">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            VIVO
          </Link>
        </div>
        <button
          onClick={() => {
            if (hamburgerMenu === "hamburgerInactive") {
              setHamburgerMenu("hamburgerActive");
              setMenuDisplay("menu-center");
              document.body.style.overflow = "hidden";
            } else {
              setHamburgerMenu("hamburgerInactive");
              document.body.style.overflow = "visible";
              setMenuDisplay("display-none");
            }
          }}
          className={[hamburgerMenu, "hide-for-desktop hamburger-icon"].join(
            " "
          )}
          //   className="hide-for-desktop hamburger-icon"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="hide-for-mobile header-links">
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/liked">Liked</Link>
          </li>
          <li>
            <Link to="/add-blog">Add Blog</Link>
          </li>
        </ul>
      </div>

      <div
        className={[
          menuDisplay,
          "padding hamburger-menu hide-for-desktop",
        ].join(" ")}
        //className="hamburger-menu"
      >
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              News
            </Link>
          </li>
          <li>
            <Link to="/liked" onClick={closeMenu}>
              Liked
            </Link>
          </li>
          <li>
            <Link to="/add-blog" onClick={closeMenu}>
              Add Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
