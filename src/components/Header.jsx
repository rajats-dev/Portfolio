import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ handleNavigation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [phoneActive, setPhoneActive] = useState(false);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 900);
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const isScrolled = scrollTop > 20 * 40;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeHandler);
      setPhoneActive(window.innerWidth < 900);
    };
  }, []);

  return (
    <>
      <div
        className={`flex "bg-transparent" ${
          phoneActive && showModel
            ? "pt-5 mt-0 bg-slate-100 opacity-85 h-52"
            : "pt-1 items-center"
        } w-full z-20 ${scrolled && "bg-slate-100"} hover:cursor-pointer ${
          phoneActive && !showModel && "h-16"
        }`}
      >
        <h1
          className="text-2xl font-bold ml-7"
          onClick={() => handleNavigation("home")}
        >
          Rajat
        </h1>
        <ul
          className="flex m-4 font-thin text-lg"
          style={
            phoneActive
              ? {
                  position: "fixed",
                  top: showModel ? "1rem" : "-20rem",
                  transition: "all 0.3s",
                  marginTop: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }
              : {}
          }
        >
          <li className="mx-2" onClick={() => handleNavigation("project")}>
            Projects
          </li>
          <li className="mx-2">
            <a
              href="https://drive.google.com/file/d/1N2W2JvSmOYEdFa6INiCXewdW5eMVyiph/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="mx-2" onClick={() => handleNavigation("about")}>
            About
          </li>
          <li className="mx-2" onClick={() => handleNavigation("skills")}>
            Skills
          </li>
        </ul>
        {phoneActive && (
          <button
            className="absolute right-8 text-2xl pt-2"
            onClick={() => setShowModel((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
