import React from "react";
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
    <section
      id="projects"
      className="about-me-section md:max-h-[1200px] grid grid-cols-12"
    >
      <div className="col-start-2 col-span-10">
        <div className="flex flex-col ml-auto mr-auto max-w-screen-lg pt-24">
          <p className="text-4xl mb-8">My Projects</p>
          <div className="mb-8">
            <p className="text-md leading-8 text-left">
              Explore my portfolio of projects to see what I've accomplished. If
              you're curious about my NDA projects, feel free to ask or take a
              look at my CV.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {works.map((work, i) => {
              return (
                <div
                  key={i}
                  className={`py-6 px-6 bg-neutral-100 rounded-md max-w-screen-lg gap-5 md:flex md:flex-row md:justify-between ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-2/3 md:h-[400px]">
                    <img
                      className="size-full"
                      src={work.previewImage}
                      alt="work"
                    ></img>
                  </div>
                  <div className="mt-3 md:mt-0 md:size-6/12 flex flex-col items-start">
                    <p className="text-lg mb-3">{work.title}</p>
                    <p className="text-sm leading-8 text-left mb-2">
                      {work.description}
                    </p>

                    <a
                      className="text-sm leading-8 text-left mb-2 text-blue-600"
                      href={work.link}
                    >
                      {work.link}
                    </a>

                    <div className="flex flex-wrap gap-2">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
