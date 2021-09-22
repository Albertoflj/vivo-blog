import { useState } from "react";

function HamburgerMenu() {
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburgerInactive");

  return (
    <button
      onClick={() => {
        hamburgerMenu === "hamburgerInactive"
          ? setHamburgerMenu("hamburgerActive")
          : setHamburgerMenu("hamburgerInactive");
      }}
      className={[hamburgerMenu, "hide-for-desktop hamburger-icon"].join(" ")}
      //   className="hide-for-desktop hamburger-icon"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
export default HamburgerMenu;
