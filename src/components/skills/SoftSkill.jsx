import { softProgress } from "../../data";
import ProgressBar from "./ProgressBar";

const SoftSkill = () => {
  return (
    <>
      <div className="bg-white">
        <span className="flex flex-wrap justify-center gap-5">
          {softProgress.map((item, i) => (
            <div key={i}>
              <h2 className="text-md">{item.lang}</h2>
              <ProgressBar progress={item.per} />
            </div>
          ))}
        </span>
      </div>
    </>
  );
};

export default SoftSkill;
