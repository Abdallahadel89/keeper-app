import { useState } from "react";
import React from "react";

function CreatArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "#ffffff" // Default color (white)
  });

  const colors = ["#ffffff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#cbf0f8"];

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
props.onAdd({ ...note, id: crypto.randomUUID() });
    setNote({ title: "", content: "", color: "#ffffff" });
    event.preventDefault();
  }

  return (
    <div 
      style={{ backgroundColor: note.color }} // Preview the color
      className="w-[350px] mb-5 p-4 rounded-md shadow-md relative m-auto transition-colors duration-300"
    >
      <form onSubmit={submitNote}>
        <input
          className="w-full text-lg mb-2 border-none outline-none bg-transparent"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          className="w-full text-lg border-none outline-none resize-none bg-transparent"
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        />

        {/* Color Selection Radio Buttons */}
        <div className="flex gap-2 mt-2 mb-4">
          {colors.map((c) => (
            <label key={c} className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value={c}
                checked={note.color === c}
                onChange={handleChange}
                className="hidden peer"
              />
              <div 
                style={{ backgroundColor: c }}
                className={`w-6 h-6 rounded-full border border-gray-300 peer-checked:ring-2 peer-checked:ring-gray-500`}
              ></div>
            </label>
          ))}
        </div>

        <button
          className="bg-[#f5ba13] rounded-full p-2 px-4 font-bold text-white border-none outline-none shadow-md absolute right-2 bottom-[-10px] hover:scale-105 transition-transform"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreatArea;