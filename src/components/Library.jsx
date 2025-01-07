import React, { useState } from "react";
import { ChartBarIcon as ActiveCharBarIcon } from "@heroicons/react/24/solid";
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
    { title: "Playlists" },
    { title: "Artists" },
    { title: "Albums" },
  ];
  let [activeLibrary, setActiveLibrary] = useState(true);
  return (
    <div className="rounded-md bg-gray-900/50 max-w-80 pt-2">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between ps-2 pe-4">
          <div className="flex flex-row items-center text-gray-500 hover:text-white cursor-pointer px-2 py-1">
            {activeLibrary ? (
              <div className="flex flex-row gap-x-2">
                <ActiveCharBarIcon className="size-7 h-10" />
                <div className="size-15 font-bold self-center">
                  Your Library
                </div>
              </div>
            ) : (
              <ChartBarIcon className="size-7 h-10" />
            )}
          </div>
          <div className="flex flex-row gap-3 text-gray-500 self-center">
            <PlusIcon className="size-6 h-10 hover:text-white cursor-pointer" />
            <ArrowRightIcon className="size-6 h-10 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-row gap-x-2 p-2 mx-1">
          {pills.map((pill, index) => (
            <Pill key={index} title={pill.title} />
          ))}
        </div>
        <div className="flex flex-col lg:h-[75vh] overflow-y-auto">
          <div className="flex flex-row gap-x-2 p-2 mx-1 justify-between">
            <div>
              <MagnifyingGlassIcon className="h-6 text-gray-500 hover:text-white cursor-pointer" />
              <input type="text" placeholder="" className="hidden" />
            </div>
            <div className="flex flex-row self-center gap-x-2 text-gray-500 hover:text-white hover:scale-y-105 cursor-pointer">
              <div>Recents</div>
              <ListBulletIcon className="h-6" />
            </div>
          </div>
          {libraryCards.map((libraryCard, index) => (
            <LibraryCard key={index} {...libraryCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
