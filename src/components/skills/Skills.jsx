import React, { useState } from "react";
import TechnicalSkill from "./TechnicalSkill";
import SoftSkill from "./SoftSkill";

const Skills = ({ id }) => {
  const [section, setSection] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center h-[33rem] w-full" id={id}>
        <h1 className="text-5xl m-10 mb-14">Skills</h1>
        <div className="flex text-md justify-around w-[55rem] h-14 mb-10">
          <button
            onClick={() => setSection(false)}
            className={`${
              !section
                ? "border-black border-2 border-solid"
                : "border-b-2 border-t-0 border-x-0"
            } w-[30rem] border-opacity-10 border-b-0 rounded-md rounded-b-none hover:border-l-2 hover:border-t-2`}
          >
            Technicall Skills
          </button>
          <button
            onClick={() => setSection(true)}
            className={`${
              section
                ? "border-black border-2 border-solid"
                : "border-b-2 border-t-0 border-x-0"
            } w-[25rem] border-opacity-10 border-b-0 rounded-md rounded-b-none hover:border-r-2 hover:border-t-2`}
          >
            Soft Skills
          </button>
        </div>
        {!section ? <TechnicalSkill /> : <SoftSkill />}
      </div>
    </>
  );
};

export default Skills;
