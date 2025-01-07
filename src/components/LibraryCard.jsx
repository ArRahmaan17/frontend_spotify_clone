import React from "react";

export default function LibraryCard(props) {
  return (
    <div className="flex flex-row gap-x-2 my-1 rounded-md mx-3 px-1 py-2 transition-all duration-200 ease-in-out hover:bg-gray-800/40 cursor-pointer">
      <img
        src="https://placehold.co/60x60"
        alt={props.title}
        className="rounded-md select-none cursor-pointer"
      />
      <div className="flex flex-col self-center">
        <div className="text-white font-semibold">{props.title}</div>
        <div className="text-gray-300 text-sm font-light">{props.title}</div>
      </div>
    </div>
  );
}
