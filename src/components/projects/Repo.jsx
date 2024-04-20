import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Repo = ({ data }) => {
  return (
    <>
      {data.map((repo, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 w-[40%] bg-white p-4 rounded-lg h-52 shadow-2xl"
        >
          <h2 className="text-md font-bold">{repo.name}</h2>
          <span className="flex gap-4 opacity-95">
            <a
              href={repo.cloneURL}
              className="flex items-center gap-1 border-slate-600 border-2 border-solid p-2 rounded-lg hover:bg-black hover:text-cyan-50 hover:cursor-pointer"
            >
              <AiFillGithub />
              Clone Project
            </a>
            <a
              href={repo.repoURL}
              className="flex items-center gap-1 border-slate-600 border-2 border-solid p-2 rounded-lg hover:bg-black hover:text-cyan-50 hover:cursor-pointer"
            >
              <AiFillGithub />
              Repo
            </a>
          </span>
          <hr></hr>
          <ul className="flex gap-3 font-bold text-xs items-center">
            Languages:
            <li className="bg-[#eaebec] p-1 rounded-lg">
              JavaScript: {repo.lang.javaScript}%
            </li>
            <li className="bg-[#eaebec] p-1 rounded-lg">
              HTML: {repo.lang.html}%
            </li>
            <li className="bg-[#eaebec] p-1 rounded-lg">
              Css: {repo.lang.css}%
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-1">
              <AiFillGithub />
              Stars: {repo.stars}
            </li>
            <li className="text-sm opacity-80">Updated on {repo.updatedAt}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Repo;
