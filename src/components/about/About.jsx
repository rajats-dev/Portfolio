import Image from "next/image";
import React from "react";
import classes from "./about.module.css";

const About = ({ id }) => {
  return (
    <>
      <div
        className={`flex gap-3 w-full h-[30rem] p-10 items-center justify-evenly bg-[#e8ecef] ${classes.about}`}
        id={id}
      >
        <Image
          src="/image.jpg"
          alt="image"
          width={450}
          height={250}
          className={`rounded-[50%] ${classes.image}`}
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl m-7">About Me</h1>
          <p className="w-[40rem]">
            My name is Rajat Sundriyal. I’m a graduate from Uttrakhand Technical
            University, Roorkee with a degree in Bachelor of Information
            Technology. I'm most passionate about giving back to the community,
            and my goal is to pursue this passion within the field of software
            engineering. In my free time I like working on open source projects.
          </p>
          <a
            href="https://drive.google.com/file/d/1N2W2JvSmOYEdFa6INiCXewdW5eMVyiph/view?usp=sharing"
            target="_blank"
          >
            <button className="border-2 border-solid border-black p-2 rounded-lg hover:bg-black hover:border-black hover:text-cyan-50 m-6">
              Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
