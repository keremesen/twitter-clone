import React, { useState, useEffect } from "react";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import db from "../firebase";
import { PopulerIcon } from "../icons/Icon";
const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <main className="flex-1 flex flex-col border-l border-r border-gray-extraLight ">
      <header className="flex flex-row justify-between border-t border-b items-center p-3 border-gray-extraLight  bg-white sticky top-0">
        <span className="font-bold text-xl">Home</span>
        <div className="text-primary-base">
          <PopulerIcon />
        </div>
      </header>

      <div className="flex flex-row space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1375377928758902784/AMQv4ZM3_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
      {/* Feed */}
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
