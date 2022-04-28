import React, { useEffect, useRef } from "react"
import UPTRace from '../assets/UPTrace.jpg'
import Trailyzer from '../assets/trailyzer.jpg'
import LyzIdeas from '../assets/LYZIdeas.jpg'
import LyzIdeasAdmin from '../assets/LYZIdeasAdmin.jpg'
import LyzCo from '../assets/lyzco.jpg'
import Brainly from '../assets/brainly.jpg'
import Project from "./Project"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = props => {
    const projectRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(projectRef.current, {
            opacity: 1,
            scrollTrigger: {
                trigger: projectRef.current,
                start: "center bottom",
            },
            duration: 3.5,
        })

        gsap.to(".project", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".project",
            },
            duration: 2,
            stagger: 0.7
        })

    })

    return (
        <div className="bg-dark" id="projects">
            <div className="section border-2 border-neon border-x-0">
                <div 
                    ref={projectRef}
                    className="font-monument font-bold text-white text-4xl md:text-6xl lg:text-8xl text-center opacity-0">PROJECTS</div>
            </div>

            <div className="section grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-24 xl:gap-x-64 gap-y-20 md:gap-y-32 lg:gap-y-24 py-32">
                <Project image={UPTRace} title="UP Trace"/>
                <Project image={LyzIdeas} title="LYZ Ideas"/>
                <Project image={LyzIdeasAdmin} title="LYZ Ideas Admin"/>
                <Project image={Brainly} title="Brainly"/>
                <Project image={Trailyzer} title="Trailyzer"/>
                <Project image={LyzCo} title="Lyz Co"/>

            </div>
        </div>
    )
}

export default Projects