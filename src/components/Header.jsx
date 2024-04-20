import React, { useEffect, useState } from "react";

const Header = ({ handleNavigation }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const isScrolled = scrollTop > 20 * 40;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center w-full z-20 ${
          scrolled ? "bg-slate-100" : "bg-transparent"
        } hover:cursor-pointer`}
      >
        <h1
          className="text-2xl font-bold ml-7"
          onClick={() => handleNavigation("home")}
        >
          Rajat
        </h1>
        <ul className="flex m-4 font-thin text-lg">
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
      </div>
    </>
  );
};

export default Header;
