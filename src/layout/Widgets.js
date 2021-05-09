import React from "react";
import { Timeline } from "react-twitter-widgets";
import { SearchIcon } from "../icons/Icon";
const Widgets = () => {
  return (
    <aside className="w-80 sticky top-0 h-screen">
      <div className="flex items-center p-2 m-3 bg-gray-200 rounded-full space-x-4 text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent focus:outline-none placeholder-gray-dark w-full text-sm"
        ></input>
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "kerooxd",
          }}
          options={{
            height: "640",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
