import React, { useEffect, useState } from "react";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io";
import classes from "./home.module.css";
import Link from "next/link";

const HomeDash = ({ id }) => {
  const [boxShadow, setboxShadow] = useState("");

  useEffect(() => {
    const numShadows = 600;
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let boxShadow = "";
    for (let i = 0; i < numShadows; i++) {
      const x = getRandomInt(0, 2000);
      const y = getRandomInt(0, 2000);
      const color = "#fff";
      boxShadow += `${x}px ${y}px ${color}`;
      if (i < numShadows - 1) {
        boxShadow += ", ";
      }
    }
    setboxShadow(boxShadow);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col items-center h-[42rem] w-full text-cyan-50 ${classes.home}`}
        id={id}
      >
        <h1 className="text-[7rem] mt-32">Rajat Sundriyal</h1>
        <p>Passionate about changing the world with technology.</p>
        <div className="flex m-14 mb-7 gap-2 text-5xl">
          <a href="https://twitter.com/SundriyalRajat" target="_blank">
            <IoLogoTwitter className="hover:text-black" />
          </a>
          <a href="https://www.instagram.com/rajat.sundriyal/" target="_blank">
            <IoLogoInstagram className="hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajat-sundriyal-9a4a09133/"
            target="_blank"
          >
            <IoLogoLinkedin className="hover:text-black" />
          </a>
          <a href="https://github.com/rajats-dev" target="_blank">
            <IoLogoGithub className="hover:text-black" />
          </a>
        </div>
        <Link href={"/myportfolio/#about"}>
          <button className="border-2 border-solid border-white p-3 rounded-lg hover:bg-white hover:border-none hover:text-black m-5">
            More About Me
          </button>
        </Link>
        <div
          id={classes.stars}
          style={{ "--shadow": `${boxShadow}` || "none" }}
        ></div>
      </div>
    </>
  );
};

export default HomeDash;
