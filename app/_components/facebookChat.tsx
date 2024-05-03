import React, { useEffect, useState } from "react";

type FacebookProps = {
  geminiResponse: string;
};

const FacebookChat = ({ geminiResponse }: FacebookProps) => {
  const [facebook, setFacebook] = useState("");

  useEffect(() => {
    let startIndex = geminiResponse.indexOf("**Facebook Post:**");
    let endIndex = geminiResponse.indexOf("**Instagram Post:**");
    let facebookPost = geminiResponse.substring(startIndex, endIndex).trim();

    setFacebook(facebookPost);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-medium">Facebook post</h3>
      <p className="text-[15px] bg-white bg-opacity-5 backdrop-blur-[60px] p-4 rounded-2xl">
        {facebook}
      </p>
    </div>
  );
};

export default FacebookChat;
