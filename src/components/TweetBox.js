import React, { useState } from "react";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icon";
import db from "../firebase";
import firebase from "firebase";

const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "kerem esen",
        userName: "kerooxd",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image:"",
        avatar:
          "https://pbs.twimg.com/profile_images/1375377928758902784/AMQv4ZM3_400x400.jpg",
      });
      setContent("");
    }
  };
  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent "
        placeholder="What's Happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="text-primary-base flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <ImageIcon />
          </div>
          <div className="text-primary-base flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <GIFIcon />
          </div>
          <div className="text-primary-base flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <PollIcon />
          </div>
          <div className="text-primary-base flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <EmojiIcon />
          </div>
          <div className="text-primary-base flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <ScheduleIcon />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-10 font-medium py-2"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
