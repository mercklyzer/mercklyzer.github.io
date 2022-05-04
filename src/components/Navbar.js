import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = props => {
    const brandRef = useRef()
    const positionRef = useRef()
    
    useEffect(() => {

    }, [])

    return (
    <div className="px-8 absolute left-0 top-0 pt-6 w-full flex justify-start items-center z-10 text-neon ">
        <div onClick={() => window.location.replace('#home')} className="flex flex-col font-maven duration-500 group cursor-pointer" >
            <div ref={brandRef} className="font-bold text-md lg:text-xl lg:tracking-wider nav-item group-hover:tracking-widest duration-500">LYZER BAUTISTA</div>
            <div ref={positionRef} className="font-semibold text-sm lg:text-md nav-item duration-300 ">Software Engineer</div>
        </div>
    </div>
    )
}

export default Navbar