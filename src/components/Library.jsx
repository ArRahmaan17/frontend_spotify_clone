import React, { useState } from "react";
import { navBarClassName } from "../helper/helper";
import {
  ChartBarIcon as ActiveCharBarIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import {
  ChartBarIcon,
  PlusIcon,
  ArrowRightIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Pill from "./Pill";
import LibraryCard from "./LibraryCard";

export default function Library() {
  let pills = [
    { title: "Playlists" },
    { title: "Artists" },
    { title: "Albums" },
  ];
  let libraryCards = [
    {
      title: "Playlists",
      subtitle: "Your Playlists",
      author: "You",
      playlist: true,
    },
    {
      title: "Playlists",
      subtitle: "Your Playlists",
      author: "You",
      playlist: true,
    },
    {
      title: "Playlists",
      subtitle: "Your Playlists",
      author: "You",
      playlist: true,
    },
    { title: "Artists" },
    { title: "Artists" },
    { title: "Artists" },
    { title: "Artists" },
    { title: "Albums", subtitle: "Your Albums", author: "You", playlist: true },
    { title: "Albums", subtitle: "Your Albums", author: "You", playlist: true },
    { title: "Albums", subtitle: "Your Albums", author: "You", playlist: true },
    { title: "Albums", subtitle: "Your Albums", author: "You", playlist: true },
  ];
  let [activeLibrary, setActiveLibrary] = useState(true);
  let [expandLibrary, setExpandLibrary] = useState(false);
  let [searchLibrary, setSearchLibrary] = useState(false);
  return (
    <div
      className={`rounded-md bg-gray-900/40 ${
        activeLibrary && expandLibrary
          ? "max-w-lg"
          : activeLibrary && !expandLibrary
          ? "max-w-80"
          : "max-w-20"
      } pt-2`}
    >
      <div className="flex flex-col">
        <div
          className={`flex flex-row ${
            activeLibrary ? " justify-between ps-4" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-center transition-all duration-200 ease-in-out text-gray-400 hover:text-white cursor-pointer px-2 py-1">
            {activeLibrary ? (
              <div
                className="flex flex-row gap-x-2 items-center"
                onClick={() => {
                  setActiveLibrary(!activeLibrary);
                  setExpandLibrary(expandLibrary);
                }}
              >
                <ActiveCharBarIcon className="h-8" />
                <div className="h-6 font-bold">Your Library</div>
              </div>
            ) : (
              <ChartBarIcon
                className="h-8"
                onClick={() => {
                  setActiveLibrary(!activeLibrary);
                  setExpandLibrary(expandLibrary);
                }}
              />
            )}
          </div>
          <div
            className={`${
              activeLibrary ? "flex flex-row gap-3 self-center" : "hidden"
            } text-gray-400`}
          >
            <PlusIcon className="size-6 h-10 transition-all duration-200 ease-in-out hover:text-white cursor-pointer" />
            {!expandLibrary ? (
              <ArrowRightIcon
                className="size-6 h-10  transition-all duration-200 ease-in-out hover:text-white cursor-pointer"
                onClick={() => {
                  setExpandLibrary(!expandLibrary);
                  setSearchLibrary(false);
                }}
              />
            ) : (
              <ArrowLeftIcon
                className="size-6 h-10  transition-all duration-200 ease-in-out hover:text-white cursor-pointer"
                onClick={() => {
                  setExpandLibrary(!expandLibrary);
                  setSearchLibrary(false);
                }}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            activeLibrary && expandLibrary
              ? "flex flex-row gap-x-0 justify-between"
              : activeLibrary && !expandLibrary
              ? "flex flex-col gap-x-2 p-2 mx-1"
              : "hidden"
          }`}
        >
          <div
            className={`flex flex-row gap-x-1 px-1 my-1 ${
              expandLibrary ? "ms-3" : "ms-1"
            }`}
          >
            {pills.map((pill, index) => (
              <Pill
                key={index}
                title={pill.title}
                expandLibrary={expandLibrary}
              />
            ))}
          </div>
          <div
            className={`flex flex-row py-0 mx-1 ${
              expandLibrary ? "my-2 justify-end gap-x-1" : "my-0 gap-x-1 justify-between"
            }`}
          >
            <div
              className={`${
                activeLibrary
                  ? `flex gap-x-1 h-7 transition-all delay-100 duration-200 ease-in-out rounded-md text-gray-400 max-w-[80%] ${
                      searchLibrary ? "bg-slate-800" : ""
                    }`
                  : "hidden"
              }`}
            >
              <MagnifyingGlassIcon
                onClick={() => {
                  setSearchLibrary(!searchLibrary);
                }}
                className="h-7 p-1 text-gray-400 transition-all duration-200 ease-in-out hover:text-white cursor-pointer rounded-full hover:bg-inherit/95"
              />
              <input
                type="text"
                placeholder="Search in Your Library"
                className={`${
                  searchLibrary
                    ? "opacity-100 z-1 translate-x-0 w-100"
                    : "-translate-x-72 -z-0 opacity-0 w-0"
                } ease-in-out delay-100 duration-100 transition-all bg-inherit outline-none max-h-fit rounded-e-md placeholder:text-sm max-w-[80%]`}
              />
            </div>
            <div
              className={`${
                activeLibrary
                  ? "flex flex-row align-middle self-center gap-x-2 text-gray-400 transition-all duration-200 ease-in-out hover:text-white hover:scale-y-105 cursor-pointer"
                  : "hidden"
              }`}
            >
              <div
                className={`${
                  searchLibrary ? "hidden" : "block"
                } text-sm font-medium`}
              >
                Recents
              </div>
              <ListBulletIcon className="h-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:h-[75vh] overflow-y-auto">
          {libraryCards.map((libraryCard, index) => (
            <LibraryCard
              key={index}
              {...libraryCard}
              activeLibrary={activeLibrary}
              expandLibrary={expandLibrary}
              searchLibrary={searchLibrary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
