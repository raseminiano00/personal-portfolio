import React from "react";
import phFlag from "../assets/ph-icon.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

const ReachMe = () => {
  return (
    <section id="reach-me" className="h-[180px] md:max-h-[1200px] mt-24">
      <div className="flex justify-center size-full bg-neutral-100 ">
        <div class="w-5/12 my-auto flex items-center flex-col gap-2">
          <p class="mx-auto text-md md:text-lg">Roi Angelo Seminiano</p>

          <span class="mx-auto flex flex-row items-center gap-2">
            <img className="size-4" src={email} alt="icon"></img>
            <a class="text-xs md:text-sm" href="mailto:raseminiano00@gmail.com">
              raseminiano00@gmail.com
            </a>
          </span>
          <span class="mx-auto flex flex-row items-center gap-2">
            <img className="size-4" src={phFlag} alt="icon"></img>
            <a class="text-xs md:text-sm" href="tel:+639208339508">
              +63 920 833 9508
            </a>
          </span>
          <span class="mx-auto flex flex-row items-center gap-2">
            <img className="size-5" src={linkedin} alt="icon"></img>
            <a
              class="text-xs md:text-sm"
              href="https://www.linkedin.com/in/roi-angelo-seminiano"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ReachMe;
