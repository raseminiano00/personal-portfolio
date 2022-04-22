import React from "react";

const Banner = () => {
  return (
    <section id="about" className="banner-section h-screen">
      <div className="w-screen w-100 max-w-full">
        <div className="absolute top-64 left-1/2">
          <h1 className="text-5xl flex-grow">Hello, I'm Roi and I'm </h1>
          <br></br>
          <h1 className="text-5xl flex-grow">a Javascript Web Developer.</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
