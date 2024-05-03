import React, { useEffect, useState } from "react";

type InstagramProps = {
  geminiResponse: string;
};

const InstagramChat = ({ geminiResponse }: InstagramProps) => {
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    let startIndex = geminiResponse.indexOf("**Instagram Post:**");
    let endIndex = geminiResponse.indexOf("**YouTube Script:**");
    let instagramPost = geminiResponse.substring(startIndex, endIndex).trim();

    setInstagram(instagramPost);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-medium">Instagram post</h3>
      <p className="text-[15px] bg-white bg-opacity-5 backdrop-blur-[60px] p-4 rounded-2xl">
        {instagram}
      </p>
    </div>
  );
};

export default InstagramChat;
