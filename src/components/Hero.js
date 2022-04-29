import React, { useEffect, useRef } from "react";
import HeroImg from '../assets/hero-img.jpg'
import WhiteScrollDown from '../assets/white_scroll_down.png'
import gsap, { Expo } from "gsap";

const Hero = ({className}) => {
    const whiteBox = useRef()
    const scrollDown = useRef()
    const imageRef = useRef()

    useEffect(() => {
        gsap.to(whiteBox.current, 2.4, {
            yPercent: -110,
            ease: Expo.easeInOut,
            delay: 3.2
        })

        gsap.to(scrollDown.current, 1, {
            opacity: 2,
            ease: Expo.easeInOut,
            delay: 4.8
        })

        gsap.to(".letter", 1.6, {
            opacity: 1,
            top: -80,
            stagger: 0.1,
            delay: 5
        })

        gsap.to(".adjective", 1.5, {
            opacity: 1,
            top: "-=30",
            stagger: 0.3,
            delay: 5
        })

    }, [])


    // 
    return (
        <div id="home" className={`relative w-full min-h-screen py-[10vh] section ${className} flex justify-center items-start`}>
            <div className="relative">
                <div 
                    ref={whiteBox}
                    className="absolute inset-0 w-full h-full bg-light transform scale-105"></div>
                <div className="w-[80vw] md:w-[60vw] lg:w-auto lg:h-[90vh] overflow-hidden">
                    <img
                        className="object-fit h-full max-h-[800px]" 
                        src={HeroImg} alt="hero image" 
                        />

                    <div 
                        ref={scrollDown}
                        className="hidden md:block absolute transform top-1/2 right-0 translate-x-1/2 -translate-y-1/2 border-black border-2 rounded-full bg-white opacity-0">
                        <img 
                            className="animate-spin-slow w-16 h-16 lg:w-auto lg:h-auto"
                            src={WhiteScrollDown} />
                    </div>
                    
                </div>
            </div>

            {/* NAME */}
            <div className="absolute top-1/2 left-1/2 text-center lg:text-left lg:left-auto transform -translate-x-1/2 ">
                <div className="text-7xl lg:text-8xl font-bold font-monument neon-shadow italic">
                    {["L","Y","Z","E","R"].map((char, i) => <span className="letter opacity-0 relative">{char}</span>)}
                </div>
                <div className="text-5xl lg:text-8xl font-bold font-monument neon-shadow italic">
                    {["B","A","U","T","I", "S", "T", "A"].map((char, i) => <span className="letter opacity-0 relative">{char}</span>)}
                </div>
            </div>

            <div className="absolute top-[20%] right-[7%] text-fill-transparent adjective opacity-0">
                <div className="text-2xl md:text-4xl font-bold font-poppins italic ">PORTFOLIO</div>
            </div>

            <div className="hidden lg:block absolute top-[20%] left-[16%] adjective opacity-0">
                <div className="text-xl font-semibold font-maven italic neon-shadow">MALLEABLE.</div>
            </div>

            <div className="hidden lg:block absolute top-[70%] right-[24%] adjective opacity-0">
                <div className="text-xl font-semibold font-maven italic neon-shadow">CREATIVE.</div>
            </div>

            <div className="hidden lg:block absolute top-[80%] left-[24%] adjective opacity-0">
                <div className="text-xl font-semibold font-maven italic neon-shadow">PASSIONATE.</div>
            </div>


        </div>

    )
}

export default Hero