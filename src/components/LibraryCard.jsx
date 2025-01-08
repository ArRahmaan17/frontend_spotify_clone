import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
export default function LibraryCard(props) {
console.log(props)
  return (
    <div className="flex flex-row gap-x-2 my-1 rounded-md mx-3 px-1 py-1 transition-all duration-200 ease-in-out hover:bg-gray-800/40 cursor-pointer group">
      <div className="flex flex-col self-center">
        <div
          className={`${
            props.activeLibrary
              ? "h-[50px] w-[50px] absolute bg-slate-400 bg-opacity-25 bg-clip-content group-hover:block hidden transition-all duration-100 ease-in-out"
              : "hidden"
          }`}
        >
          <PlayIcon className={`${props.activeLibrary?"text-white scale-50 hover:scale-[.6] transition-all duration-100 ease-in-out": ""}`} />
        </div>
        <img
          src={`https://placehold.co/50x50?text=${props.title}`}
          alt={props.title}
          className={`${
            props.playlist ? "rounded-md" : "rounded-full"
          } select-none cursor-pointer`}
        />
      </div>
      <div className={`${props.activeLibrary?"flex flex-col self-center" : "hidden"}`}>
        <div className="text-white font-semibold">{props.title}</div>

        <div className="flex text-sm text-gray-400/95 gap-x-1 font-medium">
          <div className="">{props.title}</div>
          {props.subtitle && (
            <>
              <div>•</div>
              <div className="">{props.subtitle}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
