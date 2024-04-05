import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full text-white bg-gradient-to-r from-black">
      <div className="relative  md:top-[15%] top-[9rem] left-[1rem] md:left-8 ">
        <p className="md:text-7xl ml-8 text-2xl font-bold md:py-2 cursor-default">
          {title}
        </p>
        <p className="md:inline-block text-[16px] my-4 ml-8 w-[350px] hidden  cursor-default font-[poppins]">
          {overview}
        </p>
        <div className="w-[400px] my-6 ml-8 ">
          <button className="md:px-5 md:py-2 sm:px-3 sm:py-1   mx-2 hover:bg-opacity-80 text-sm md:text-lg text-white sm:bg-black md:bg-gray-500 cursor-pointer rounded-xl font-[poppins] hover:border border-white">
            <i class="rounded-full px-3 py-1 mr-2 text-sm border border-white fa-solid fa-info"></i>{" "}
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
