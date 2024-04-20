import { AiFillHeart } from "react-icons/ai";
import { PiBracketsAngleLight } from "react-icons/pi";
import { LiaReact } from "react-icons/lia";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <div
      className={`flex flex-col items-center h-[17rem] w-full bg-[#e8ecef] ${classes.contact}`}
    >
      <h1 className="text-5xl m-7">Get In Touch</h1>
      <p className="w-[70%] text-center mb-8 text-lg">
        I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me
        at,
        <a
          href="mailto:rajatsundriyal1.com"
          className="font-thin text-blue-500"
        >
          rajatsundriyal1@gmail.com.
        </a>
      </p>
      <div className="flex items-center gap-1">
        <PiBracketsAngleLight />
        <p>with</p>
        <AiFillHeart />
        <p>by</p>
        <span className="bg-black text-cyan-50 text-xs p-1 rounded-md">
          Rajat Sundriyal
        </span>
        <p>using</p>
        <LiaReact />
      </div>
    </div>
  );
};

export default Contact;
