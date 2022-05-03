import React, { useEffect, useRef } from "react"
import UPTRace from '../assets/UPTrace.jpg'
import Trailyzer from '../assets/trailyzer.jpg'
import LyzIdeas from '../assets/LYZIdeas.jpg'
import LyzIdeasAdmin from '../assets/LYZIdeasAdmin.jpg'
import LyzCo from '../assets/lyzco.jpg'
import Brainly from '../assets/brainly.jpg'
import Project from "./Project"

import UPTraceGif from '../assets/UPTrace.gif'
import LYZIdeasGif from '../assets/LYZ Ideas.gif'
import LYZIdeasAdminGif from '../assets/LYZ Ideas Admin.gif'
import BrainlyGif from '../assets/Brainly.gif'
import TrailyzerGif from '../assets/Trailyzer.gif'
import LyzCoGif from '../assets/Lyz-Co.gif'

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
    }, [])

    return (
        <div className="bg-dark" id="projects">
            <div className="section lg:border-2 border-neon !border-x-0">
                <div 
                    ref={projectRef}
                    className="font-monument font-bold text-white text-4xl md:text-6xl lg:text-8xl text-center opacity-0">PROJECTS</div>
            </div>

            <div className="section grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-24 xl:gap-x-64 gap-y-20 md:gap-y-32 lg:gap-y-24 py-32">
                <Project preview={UPTraceGif} image={UPTRace} title="UPTrace" visitLink="https://mercklyzer.github.io/UPTrace-web/"/>
                <Project preview={LYZIdeasGif} image={LyzIdeas} title="LYZ Ideas" visitLink="http://lyz-ideas.herokuapp.com/" />
                <Project preview={LYZIdeasAdminGif} image={LyzIdeasAdmin} title="LYZ Ideas Admin" visitLink="https://lyz-ideas-admin.herokuapp.com/"/>
                <Project preview={BrainlyGif} image={Brainly} title="Brainly" visitLink="http://brainly-angular.s3-website-ap-southeast-1.amazonaws.com/"/>
                <Project preview={TrailyzerGif} image={Trailyzer} title="Trailyzer" visitLink="https://mercklyzer.github.io/trailyzer/" />
                <Project preview={LyzCoGif} image={LyzCo} title="Lyz & Co" visitLink="https://mercklyzer.github.io/Lyz-Co/"/>

            </div>
        </div>
    )
}

export default Projects