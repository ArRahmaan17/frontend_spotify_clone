import React from "react";
import { NavLink } from "react-router";

export default function SearchBar(props) {
  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      {props.searchIcon}
      <input
        className="placeholder:text-gray-400 h-10 placeholder:text-justify bg-transparent focus:outline-none"
        type="text"
        placeholder="What do you want to play?"
      />
      {props.minusIcon}
      <NavLink to="/search">{props.stackIcon}</NavLink>
    </div>
  );
}
