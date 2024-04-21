import useFetch from "@/hooks/useFetch";
import Repo from "./Repo";
import classes from "./project.module.css";

const Projects = ({ id }) => {
  const repoObj = useFetch();

  return (
    <div
      className={`flex flex-col items-center h-[39rem] w-full bg-[#e8ecef] ${classes.project}`}
      id={id}
    >
      <h1 className="text-5xl m-7">Recent Projects</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Repo data={repoObj} />
      </div>
    </div>
  );
};

export default Projects;
