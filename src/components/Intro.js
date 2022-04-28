import React, { useEffect, useRef } from "react";
import gsap, {Expo} from "gsap";

const Intro = props => {
    const blackScreen = useRef()
    const neonLoader = useRef()

    useEffect(() => {
        document.querySelector("body").classList.add("disable-scroll")
        const tl = gsap.timeline()

        gsap.to(blackScreen.current, 2, {
            top: "-100%",
            ease: Expo.easeInOut,
            delay: 2.8,
            onComplete: () => document.querySelector("body").classList.remove("disable-scroll")
        });

        tl.to(neonLoader.current, 1.6, {
            y:40,
            scaleY: 1,
            ease: Expo.easeInOut,
            transformOrigin: "0% 100%"
        });
        
        tl.to(neonLoader.current, 1.6, {
            y:80,
            scaleY: 0,
            ease: Expo.easeInOut,
            transformOrigin: "0% -100%",
        });
        
    }, [])

    return (
        <div className="bg-black h-screen w-screen fixed top-0 left-0 z-40" ref={blackScreen}>
            <div 
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[30vh] w-[8%] z-20">
                <div 
                    ref={neonLoader}
                    className="bg-neon transform w-full h-full translate-y-1/2 scale-y-0">
                </div>
            </div>
        </div>
    )
}

export default Intro