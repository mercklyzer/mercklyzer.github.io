import React, { useEffect, useRef, useState } from "react";
import NeonAnimate from '../assets/neon-animate.gif'
import gsap from "gsap";

const Intro = props => {
    const [behind, setBehind] = useState(false)
    const headRef = useRef()


    useEffect(() => {
        document.querySelector("body").classList.add("disable-scroll")

        gsap.to(headRef.current, {
            opacity: 0,
            duration: 1,
            delay: 4.7,
            onComplete: () => {
                document.querySelector("body").classList.remove("disable-scroll")
                setBehind(true)
            }
        })

    }, [])

    return (
        <div ref={headRef} className={`bg-black h-screen w-screen fixed top-0 left-0 z-[999] ${behind? 'hidden':''} opacity-1`}>
            <div 
                className="flex justify-center items-center h-full">
                <img src={NeonAnimate} className="w-[80vw] md:w-[70vw] lg:w-[40vw] h-auto object-cover"/>
            </div>
        </div>
    )
}

export default Intro