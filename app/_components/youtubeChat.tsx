import React, { useEffect, useState } from "react";

type YouTubeProps = {
  geminiResponse: string;
};

const YoutubeChat = ({ geminiResponse }: YouTubeProps) => {
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    let startIndex = geminiResponse.indexOf("**YouTube Script:**");
    let endIndex = geminiResponse.indexOf("**Blog");
    let youtubePost = geminiResponse.substring(startIndex, endIndex).trim();

    setYoutube(youtubePost);
  }, [geminiResponse]);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-medium">Youtube script</h3>
      <p className="text-[15px] bg-white bg-opacity-5 backdrop-blur-[60px] p-4 rounded-2xl">
        {youtube}
      </p>
    </div>
  );
};

export default YoutubeChat;
