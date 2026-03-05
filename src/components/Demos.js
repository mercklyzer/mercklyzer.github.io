import React, { useEffect, useRef } from "react";
import Demo from "./Demo";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const demos = [
  {
    videoUrl: "https://youtube.com/embed/TcT7ygobJlg",
    title: "AWS Auto Scaling Demo",
    description:
      "Demonstrating automatic scaling of ECS tasks on AWS Fargate based on CPU utilization using Auto Scaling policies and CloudWatch alarms.",
  },
  {
    videoUrl: "https://youtube.com/embed/88aRAzCQ6kI",
    title: "Notifications Service Demo",
    description:
      "Setting up a notifications service deployed to AWS Fargate using AWS SNS and SQS Queues to send alerts to users based on specific events or triggers.",
  },
];

const Demos = () => {
  const titleRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "center bottom",
      },
      duration: 3.5,
    });

    gsap.to(".demo", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".demo",
      },
      duration: 2,
      stagger: 0.7,
    });
  }, []);

  return (
    <div className="bg-dark" id="demos">
      <div className="section lg:border-2 border-neon !border-x-0">
        <div
          ref={titleRef}
          className="font-monument font-bold text-white text-4xl md:text-6xl lg:text-8xl text-center opacity-0"
        >
          DEMOS
        </div>
      </div>

      <div className="section grid grid-cols-1 max-w-3xl mx-auto gap-y-16 md:gap-y-24 py-32">
        {demos.map((demo, index) => (
          <Demo
            key={index}
            videoUrl={demo.videoUrl}
            title={demo.title}
            description={demo.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Demos;
