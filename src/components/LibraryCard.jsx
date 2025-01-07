import React from "react";

export default function LibraryCard(props) {
  console.log(props);
  return (
    <div className="flex flex-row gap-x-1 my-1 px-3">
      <img
        src="https://placehold.co/60x60"
        alt={props.title}
        className="rounded-md select-none cursor-pointer"
      />
      <div className="flex flex-col">
        <div className="flex">{props.title}</div>
        <div className="flex">{props.title}</div>
      </div>
    </div>
  );
}
