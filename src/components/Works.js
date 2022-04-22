import React from "react";
import work1 from "../assets/work-1-img.png";

const works = [
  {
    title: "Crypto dashboard",
    description:
      "Dashboard that shows the current prices of your favorite cryptocurrencies",
    previewImage: work1,
    technologies: [
      "Angular",
      "Tailwind CSS",
      "NodeJs",
      "Express",
      "Binance API",
      "CoinGecko API",
    ],
    link: "https://crypto-dash-2400a.web.app/",
    repositoryLink: "",
  },
];
const Works = () => {
  return (
    <section className="work-section">
      <div  className="works-container h-screen">
        <div className="header mb-9">
          <p className="text-4xl text-center mb-2">Work</p>
          <div className="text-center">
            <p>Check my commercial and non-commercial projects,</p>
            <p>
              If you have any questions feel free to ask me for more
              information.
            </p>
          </div>
        </div>

        <div className="content">
          {works.map((work) => {
            return (
              <div
                key={work.title}
                className="work-container md:w-10/12 sm:w-full m-auto border-"
              >
                <div className="work-header text-3xl p-2 bg-gray-700 text-center text-white underline">
                  {work.title}
                </div>
                <a href={work.link} target="_new">
                  <img
                    className="w-full"
                    src={work.previewImage}
                    alt="work"
                  ></img>
                </a>
                <div className="text-center mt-3 mb-2">{work.description}</div>
                <div className="flex justify-center gap-2">
                  {work.technologies.map((tech) => {
                    return (
                      <span
                        key={tech}
                        className="bg-blue-700 rounded-md p-1 text-white text-xs"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
