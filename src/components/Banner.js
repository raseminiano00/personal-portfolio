import React from "react";
import emoji from "../assets/memoji.png";

const Banner = () => {
  return (
    <section className="banner-section h-[900px] max-h-[1200px] grid grid-cols-12">
      <div className="col-start-3 col-span-8">
        <div className="pt-72 h-4/5 ml-auto mr-auto max-w-screen-lg items-center md:pt-40 md:flex md:flex-row md:justify-between">
          <div>
            <h1 className="text-5xl flex-grow">Hello, I'm Roi </h1>
            <br></br>
            <h1 className="text-5xl flex-grow">a JavaScript Developer</h1>
          </div>

          <div className="hidden md:block">
            <img src={emoji} alt="personal-memoji"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
