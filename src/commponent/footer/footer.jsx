import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="absolute bottom-0 h-12 w-full">
    <div className="bg-[#f5ba13] p-3 m-auto shadow-md flex   sm:flex-col md:flex-row justify-between items-center ">
      <h6 className="text-white text-md font-[McLaren cursive] ">
        © 2024 Keeper App. All rights reserved.
      </h6>
      <div className="flex gap-2">
      <a
      target="blank"
        className="text-white text-xl"
        href="https://github.com/Abdallahadel89"
      >
        {" "}
        <FaGithubAlt />
      </a>
        <a className="text-white text-xl" href="https://www.linkedin.com/in/abdallah-adel-414868285/"> <FaLinkedin />
</a>
</div>
    </div>
    </div>
  );
}
export default Footer;
