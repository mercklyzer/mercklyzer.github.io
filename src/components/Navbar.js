import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = props => {
    const brandRef = useRef()
    const positionRef = useRef()
    
    useEffect(() => {
        gsap.to(brandRef.current, {
            opacity: 1,
            delay:5.5,
            duration: 2
        })
        gsap.to(positionRef.current, {
            opacity: 1,
            delay: 5.7,
            duration: 2
        })
    }, [])

    return (
    <div className="px-8 fixed left-0 top-0 pt-6 w-full flex justify-start items-center z-10 mix-blend-difference text-silver duration-500 group hover:text-neon cursor-pointer">
        <div className="flex flex-col font-maven" >
            <div ref={brandRef} className="font-bold text-md lg:text-xl lg:tracking-wider opacity-0 nav-item group-hover:tracking-widest duration-500">LYZER BAUTISTA</div>
            <div ref={positionRef} className="font-semibold text-sm lg:text-md opacity-0 nav-item duration-300 ">Software Engineer</div>
        </div>
    </div>
    )
}

export default Navbar