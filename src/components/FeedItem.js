import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem = ({
  avatar,
  content,
  displayName,
  timestamp,
  userName,
  image,
}) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="profile" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName} </h4>
          <span className="ml-2 text-gray-dark">{userName}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <div className="text-gray-dark ">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </div>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content} </p>
        {image && <img src={image} className="max-h-96 rounded-xl my-2" />}
        <ul className="my-2 flex justify-between max-w-md">
          <li className="group flex text-gray-dark text-sm">
            <div className="flex items-center justify-center rounded-full group-hover:bg-primary-light">
              <ReplyIcon />
            </div>
            <span className="group-hover:text-primary-base mx-2">2</span>
          </li>
          <li className="group flex text-gray-dark text-sm">
            <div className="flex items-center justify-center rounded-full group-hover:bg-primary-light">
              <ReTweetIcon />
            </div>
            <span className="group-hover:text-primary-base mx-2">3</span>
          </li>
          <li className="group flex text-gray-dark text-sm">
            <div className="flex items-center justify-center rounded-full group-hover:bg-primary-light">
              <LikeIcon />
            </div>
            <span className="group-hover:text-primary-base mx-2">30</span>
          </li>
          <li className="group flex text-gray-dark text-sm">
            <div className="flex items-center justify-center rounded-full group-hover:bg-primary-light">
              <ShareIcon />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
