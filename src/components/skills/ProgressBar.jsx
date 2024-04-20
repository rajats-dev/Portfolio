import React, { useEffect, useRef, useState } from "react";
import classes from "./skills.module.css";

const ProgressBar = ({ progress }) => {
  const [InViewPort, setInViewPort] = useState(false);
  const showRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInViewPort(true);
        observer.unobserve(showRef.current);
      }
    });
    if (showRef.current) {
      observer.observe(showRef.current);
    }

    return () => {
      if (showRef.current) {
        observer.unobserve(showRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`overflow-hidden w-[27rem] h-3 bg-[#e8ecef] rounded-lg ${classes.progress}`}
      >
        <div
          ref={showRef}
          className="h-full bg-[#0d6efd]"
          style={{
            width: `${InViewPort ? progress : "0%"}`,
            transition: "width 0.9s",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
