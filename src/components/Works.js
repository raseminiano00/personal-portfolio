import React from "react";
import work1 from "../assets/work-1-img.png";
import work2 from "../assets/work-2-img.jpeg";
import work3 from "../assets/work-3-img.jpeg";

const works = [
  {
    title: "Catering Management",
    description: `Catering management web application revolutionizing event organization by streamlining tasks such as data maintenance, event booking, contract generation, and report generation.`,
    previewImage: work3,
    technologies: [
      "Angular",
      "PrimeNG",
      "NodeJS",
      "NestJS",
      "MongoDB",
      "Microsoft Azure DevOps",
      "Google Compute Engine",
      "Google Cloud Storage",
    ],
    link: "",
    repositoryLink: "",
  },
  {
    title: "Crypto-dashboard",
    description: `Sandbox project that shows the current prices of your favorite cryptocurrencies, I'm planning to add functionalities on this project to have login and save your dashboard state
      based on your cryptocurrency needs.`,
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
  {
    title: "Macktails",
    description: `Online menu for a mocktail business, seamlessly blending creativity and functionality to provide users with an enticing platform to explore an array of refreshing mocktail offerings.`,
    previewImage: work2,
    technologies: ["React JS", "Materialize CSS", "Github Deployments"],
    link: "https://macktails-menu.github.io/",
    repositoryLink: "",
  },
];
const Works = () => {
  return (
    <section id="projects" className="work-section">
      <div className="works-container">
        <div className="header mb-9">
          <p className="text-4xl text-center mb-2">My Recent Projects</p>
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
                className="work-container md:w-6/12 sm:w-full m-auto  pb-9"
              >
                <div className="work-header text-3xl p-2 bg-gray-700 text-center text-white">
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
                <div className="flex flex-wrap justify-center gap-2">
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
