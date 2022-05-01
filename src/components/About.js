import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

const About = ({className}) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".description > div > span", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".description",
                start: "center 90%",
            },
            stagger: 0.3
        })

    }, [])


    return (
        <div className={`h-screen v-screen bg-dark flex section items-center ${className}`} id="about">
            <div className="font-maven text-3xl md:text-5xl lg:text-8xl font-bold text-white description ">

                <div>
                    <span className="opacity-0">I</span> <span className="opacity-0">help</span> <span className="text-neon opacity-0">clients</span>
                </div>
                <div>
                    <span className="opacity-0">formulate</span> <span className="opacity-0">ideas</span> <span className="opacity-0">and</span></div>
                <div><span className="opacity-0">launch</span> <span className="opacity-0">projects</span> <span className="text-neon opacity-0">on</span></div>
                <div><span className="opacity-0 text-neon">time,</span> <span className="opacity-0">with</span> <span className="opacity-0 text-neon">no</span> <span className="opacity-0 text-neon">hassle.</span></div>
            </div>
        </div>
    )
}

export default About