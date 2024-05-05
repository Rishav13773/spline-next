import React, { useEffect, useState } from "react";

type TwitterProps = {
  geminiResponse: string;
};

const TwitterChat = ({ geminiResponse }: TwitterProps) => {
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    let startIndex = geminiResponse.indexOf("**Twitter Post:**");
    let endIndex = geminiResponse.indexOf("**Facebook Post:**");
    let twitterPost = geminiResponse.substring(startIndex, endIndex).trim();

    setTweet(twitterPost);
  }, [geminiResponse]);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-medium">Twitter post</h3>
      <p className="text-[15px] bg-white bg-opacity-5 backdrop-blur-[60px] p-4 rounded-2xl">
        {tweet}
      </p>
    </div>
  );
};

export default TwitterChat;
