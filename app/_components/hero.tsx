"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { run } from "@/lib/gemini";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import TwitterChat from "./twitterChat";
import FacebookChat from "./facebookChat";
import InstagramChat from "./instagramChat";
import YoutubeChat from "./youtubeChat";

const Hero = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState<string>("");

  const msg =
    "You are content expert, a person I hired to create post for the following platform - twitter, facebook, instagram, youtube. And you can generate these posts by a topic given to you also you can generate max two images from this given topic and two blogs of 500 word limit and also for youtube prepare a full script and last thing split the content like this example - **Twitter Post:** etc. So the topic is ";

  const onChange = (e: any) => {
    const newText = msg + e.target.value;
    // console.log(newText);
    setText(newText);
  };

  const onSubmit = async () => {
    if (text === "") {
      return;
    }
    setLoading(true);
    const response = await run(text);
    console.log(response);
    setGeminiResponse(response);
    setLoading(false);
    setText("");
  };

  return (
    <div className="relative flex flex-col justify-center gap-3 mt-[8rem] items-center max-w-[300px] mx-auto md:max-w-[600px] md:mx-auto text-white">
      <h1 className="font-bold text-5xl mb-4">Spline</h1>
      <p className="font-normal text-2xl">
        Where Content Comes Full Circle ! Transform one idea into ready-to-post
        content for blogs, social media, and YouTube, saving you hours of
        effort.
      </p>

      {/* <div className="absolute left-0 mt-[8rem] md:mt-[2rem] font-bold">
        <p className="font-normal">Topic</p>
      </div> */}
      <Input
        onChange={onChange}
        className="mt-16 mr-4 md:mr-8 rounded-2xl w-[96%] p-7 text-lg text-white bg-slate-800 bg-opacity-96"
        type="text"
        placeholder="Enter the topic"
      />
      <div className="flex justify-center mt-4 ">
        <Button
          disabled={loading}
          onClick={onSubmit}
          className="w-[200px] rounded-xl p-6 text-xl"
        >
          {!loading ? (
            <span>Submit</span>
          ) : (
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </Button>
      </div>

      <div className="flex flex-col gap-10">
        {geminiResponse !== "" && (
          <TwitterChat geminiResponse={geminiResponse} />
        )}
        {geminiResponse !== "" && (
          <FacebookChat geminiResponse={geminiResponse} />
        )}
        {geminiResponse !== "" && (
          <InstagramChat geminiResponse={geminiResponse} />
        )}
        {geminiResponse !== "" && (
          <YoutubeChat geminiResponse={geminiResponse} />
        )}
      </div>
    </div>
  );
};

export default Hero;
