import React from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  TwitterIcon,
} from "../icons/Icon";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between px-2 w-72 sticky top-0 h-screen">
      <div>
        <div className="cursor-pointer mt-1 mb-4 ml-1 flex hover:bg-gray-lightest w-12 h-12 rounded-full items-center justify-center  transform transition-colors duration-200">
          <TwitterIcon />
        </div>
        <nav className="mb-4">
          <ul>
            <li className="my-3 px-2">
              <a href="/home" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <HomeIcon />
                  <p className="mx-7">Home</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/explore" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <ExploreIcon />
                  <p className="mx-7">Explore</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/notification" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <NotificationIcon />
                  <p className="mx-7">Notification</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/messages" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <MessagesIcon />
                  <p className="mx-7">Messages</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/bookmarks" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <BookmarksIcon />
                  <p className="mx-7">Bookmarks</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/lists" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <ListsIcon />
                  <p className="mx-7">Lists</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/profile" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <ProfileIcon />
                  <p className="mx-7">Profile</p>
                </div>
              </a>
            </li>
            <li className="my-3 px-2">
              <a href="/more" className="hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200 w-auto h-auto flex">
                <div className="flex flex-row  font-bold text-xl items-center w-min   py-2">
                  <MoreIcon />
                  <p className="mx-7">More</p>
                </div>
              </a>
            </li>
            
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
