import React from "react";
import git from "../assets/git.png";
import angular from "../assets/angular.png";
import nodejs from "../assets/nodejs.png";
import db from "../assets/db.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      class="about-me-section h-[900px] max-h-[1200px] grid grid-cols-12"
    >
      <div className="col-start-2 col-span-10">
        <div className="flex flex-col ml-auto mr-auto max-w-screen-lg pt-24">
          <p class="text-4xl mb-8">About Me</p>
          <div class="flex flex-col gap-10">
            <div class="">
              <p class="text-md leading-8 text-left">
                As a Front-End Developer Lead, I specialize in creating Single
                Page Applications (SPA) that deliver seamless and dynamic user
                experiences. My expertise spans both front-end and back-end
                development, with a strong emphasis on leveraging Microsoft
                Azure for robust and scalable solutions. I have a solid
                background in database creation and integration, ensuring that
                applications are not only visually appealing but also
                functionally powerful. As an agile practitioner, I actively
                participate in scrum ceremonies, fostering collaboration and
                continuous improvement within the development team.
              </p>
            </div>

            <div class="flex flex-col md:flex-row gap-10 w-full">
              <div class="md:max-w-[220px] bg-neutral-100 rounded-sm py-8 px-6 flex flex-col gap-3">
                <img class="w-8 h-8" src={git} alt="personal-memoji"></img>
                <p class="text-m">Cloud Platforms</p>
                <p class="text-sm">
                  Extensive experience in Microsoft Azure for project
                  management, utilizing Azure Pipelines and Azure Repos
                </p>
              </div>

              <div class="md:max-w-[220px] bg-neutral-100 rounded-sm py-8 px-6 flex flex-col gap-3">
                <img class="w-8 h-8" src={angular} alt="personal-memoji"></img>
                <p class="text-m">Front-end Technologies</p>
                <p class="text-sm">
                  Mainly works with the Angular and has extensive experience
                  using vanilla JavaScript as well
                </p>
              </div>

              <div class="md:max-w-[220px] bg-neutral-100 rounded-sm py-8 px-6 flex flex-col gap-3">
                <img class="w-8 h-8" src={nodejs} alt="personal-memoji"></img>
                <p class="text-m">Back-end Technologies</p>
                <p class="text-sm">
                  Primarily worked with Node.js and also possesses experience
                  with C# ASP.NET
                </p>
              </div>

              <div class="md:max-w-[220px] bg-neutral-100 rounded-sm py-8 px-6 flex flex-col gap-3">
                <img class="w-8 h-8" src={db} alt="personal-memoji"></img>
                <p class="text-m">Database Technologies</p>
                <p class="text-sm">
                  Experienced with relational databases like MySQL and
                  PostgreSQL, as well as non-relational databases such as
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

{
  /* <section
id="about-me"
class="about-me-section h-svh max-h-[1440px] grid grid-cols-12"
>
<div className="col-start-3 col-span-8">
  <div className="flex h-4/5 ml-auto mr-auto max-w-screen-lg md:my-auto md:gap-7 md:flex md:flex-row md:pt-48">
    <div class="max-w-lg">
      <h2 class="text-lg leading-10 text-justify leading-relaxe">
        As a Front-End Developer Lead, I specialize in creating Single
        Page Applications (SPA) that deliver seamless and dynamic user
        experiences. My expertise spans both front-end and back-end
        development, with a strong emphasis on leveraging Microsoft Azure
        for robust and scalable solutions. I have a solid background in
        database creation and integration, ensuring that applications are
        not only visually appealing but also functionally powerful. As an
        agile practitioner, I actively participate in scrum ceremonies,
        fostering collaboration and continuous improvement within the
        development team.
      </h2>
    </div>
    <div>
      <p class=" text-2xl text-justify flex-grow">
        Delivering enjoyable and functional web applications with a
        team-focused approach.
      </p>
    </div>
  </div>
</div>
</section> */
}
