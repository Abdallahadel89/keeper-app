import React from "react";
import { useState, useEffect } from "react";

function Note(props) {
  const [isVanish, setIsVanish] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  function handleAnimation() {
    setIsVanish(true); // Trigger the "fade out + blur" animation

    // Wait for the animation (500ms) before actually removing it from state
    setTimeout(() => {
      props.onDelete(props.id);
    }, 500);
  }
  return (
    <>
      <div
        style={{ backgroundColor: props.color || "#ffffff" }}
        className={`
        rounded-md p-3 pb-10 shadow-md m-2 w-[95%] sm:w-60 float-left relative 
           break-words
        transition-all duration-500 ease-in-out
        ${isShowing ? "opacity-100 scale-100" : "opacity-0 scale-95"} 
${isVanish ? "opacity-0 translate-y-[1000px] scale-95 " : ""}      `}
      >
        <h1 className="text-xl font-semibold mb-1">{props.title}</h1>
        <p className="text-xl white-space-pre-wrap ">{props.content}</p>
        <button
          className=" float-right text-red-400 hover:text-red-600 font-bold text-sm p-1 cursor-pointer"
          onClick={() => {
            handleAnimation();
          }}
        >
          {" "}
          Delete
        </button>
      </div>
    </>
  );
}

export default Note;
