import React from "react";

export default function Pill(props) {
  return (
    <button
      className={`rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-700 bg-gray-700/70 text-white px-3 my-1 text-center ${
        props.expandLibrary ? "text-sm py-1" : "text-xs py-1"
      }`}
    >
      {props.title}
    </button>
  );
}
