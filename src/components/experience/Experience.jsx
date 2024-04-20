import Image from "next/image";
import React from "react";
import classes from "./experience.module.css";

const Experience = () => {
  return (
    <div
      className={`flex flex-col items-center gap-5 h-[26rem] ${classes.experience}`}
    >
      <h1 className="text-5xl m-7">Experience</h1>
      <div className={`flex gap-64 ${classes.spans}`}>
        <span className="flex flex-col m-4 items-center gap-5">
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={200}
            className={classes.img}
          />
          <h2 className="font-bold text-lg">Technical SEO</h2>
          <p className="font-thin text-lg">Aug 2019 - Mar-2023</p>
        </span>
        <span className="flex flex-col m-4 items-center gap-5">
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={200}
            className={classes.img}
          />
          <h2 className="font-bold text-lg">Freelance React-Developer</h2>
          <p className="font-thin text-lg">Mar-2023</p>
        </span>
      </div>
    </div>
  );
};

export default Experience;
