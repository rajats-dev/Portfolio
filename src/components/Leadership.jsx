import Image from "next/image";
import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image7.png",
];

const Leadership = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className=" flex flex-col items-center">
        <h1 className="text-5xl m-7">Leadership</h1>
        <div className="relative h-[25rem] object-center rounded-lg mt-8 mb-8 flex items-center">
          {images.map((item, i) => (
            <Image
              key={i}
              src={`/${item}`}
              alt={`/${item}`}
              width={900}
              height={900}
              style={{ display: `${count === i ? "block" : "none"}` }}
              className="shadow-2xl"
            />
          ))}
          <span className="text-4xl">
            <button
              onClick={() =>
                setCount(count == 0 ? images.length - 1 : (prev) => prev - 1)
              }
              className="absolute bottom-46 left-10"
            >
              <AiFillLeftCircle
                style={{
                  color: "#dbd7d7",
                }}
              />
            </button>
            <button
              onClick={() =>
                setCount(count == images.length - 1 ? 0 : (prev) => prev + 1)
              }
              className="absolute bottom-46 right-10"
            >
              <AiFillRightCircle
                style={{
                  color: "#dbd7d7",
                }}
              />
            </button>
          </span>
        </div>

        <p className="w-[80%] text-xl font-thin text-center mb-10">
          As a React developer with leadership experience, I bring technical
          expertise, project management skills, and strong communication
          abilities to the table. I have a proven track record of building
          large-scale applications, optimizing code for performance, and
          implementing best practices. Additionally, I have experience leading
          teams and projects, creating and maintaining project plans, managing
          timelines and budgets, and ensuring timely delivery of high-quality
          work. I excel at communicating effectively with team members,
          stakeholders, and clients, both verbally and in writing, and am a
          skilled listener who can provide clear and constructive feedback. I am
          also passionate about mentoring and training other developers to help
          them develop their skills and achieve their goals. With my ability to
          solve complex technical problems and think creatively, I am always
          up-to-date with the latest developments in React and related
          technologies, and am able to innovate and inspire a positive,
          collaborative work environment.
        </p>
      </div>
    </>
  );
};

export default Leadership;
