import React, { useEffect, useRef } from "react";
import UPTRace from "../assets/UPTrace.jpg";
import Trailyzer from "../assets/trailyzer.jpg";
import LyzIdeas from "../assets/LYZIdeas.jpg";
import LyzIdeasAdmin from "../assets/LYZIdeasAdmin.jpg";
import LyzCo from "../assets/lyzco.jpg";
import Brainly from "../assets/brainly.jpg";
import Project from "./Project";

import UPTraceGif from "../assets/UPTrace.gif";
import LYZIdeasGif from "../assets/LYZ Ideas.gif";
import LYZIdeasAdminGif from "../assets/LYZ Ideas Admin.gif";
import BrainlyGif from "../assets/Brainly.gif";
import TrailyzerGif from "../assets/Trailyzer.gif";
import LyzCoGif from "../assets/Lyz-Co.gif";
import UPTracePDF from "../assets/UPTrace.pdf";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = (props) => {
  const projectRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(projectRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "center bottom",
      },
      duration: 3.5,
    });

    gsap.to(".project", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".project",
      },
      duration: 2,
      stagger: 0.7,
    });
  }, []);

  return (
    <div className="bg-dark" id="projects">
      <div className="section lg:border-2 border-neon !border-x-0">
        <div
          ref={projectRef}
          className="font-monument font-bold text-white text-4xl md:text-6xl lg:text-8xl text-center opacity-0"
        >
          PROJECTS
        </div>
      </div>

      <div className="section grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-24 xl:gap-x-64 gap-y-20 md:gap-y-32 lg:gap-y-24 py-32">
        <Project
          preview={UPTraceGif}
          image={UPTRace}
          title="UPTrace"
          documentationLink="https://firebasestorage.googleapis.com/v0/b/shop-c4574.appspot.com/o/UPTrace%20Paper.pdf?alt=media&token=391536e4-0a25-4efc-81f9-c158b9ae6ca7"
        />
        <Project
          preview={LYZIdeasGif}
          image={LyzIdeas}
          title="LYZ Ideas"
          visitLink="https://www.lyzideas.com/"
          documentationLink="https://github.com/mercklyzer/lyz-ideas-client"
        />
        <Project
          preview={LYZIdeasAdminGif}
          image={LyzIdeasAdmin}
          title="LYZ Ideas Admin"
          visitLink={"https://lyz-ideas-admin.vercel.app/login"}
          documentationLink="https://github.com/mercklyzer/lyz-ideas-admin"
        />
        <Project
          preview={BrainlyGif}
          image={Brainly}
          title="Brainly"
          visitLink={
            "http://brainly.lyzerbautista.com.s3-website-ap-southeast-1.amazonaws.com/"
          }
          documentationLink="https://github.com/mercklyzer/brainly-frontend"
        />
        <Project
          preview={TrailyzerGif}
          image={Trailyzer}
          title="Trailyzer"
          visitLink="https://mercklyzer.github.io/trailyzer/"
          documentationLink="https://github.com/mercklyzer/trailyzer"
        />
        <Project
          preview={LyzCoGif}
          image={LyzCo}
          title="Lyz & Co"
          visitLink="https://mercklyzer.github.io/Lyz-Co/"
          documentationLink="https://github.com/mercklyzer/Lyz-Co"
        />
      </div>
    </div>
  );
};

export default Projects;
