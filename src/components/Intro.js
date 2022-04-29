import React, { useEffect, useRef, useState } from "react";
import Head from '../assets/head.gif'

const Intro = props => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        document.querySelector("body").classList.add("disable-scroll")
        setTimeout(() => {
            document.querySelector("body").classList.remove("disable-scroll")
            setShow(false)
        }, 3000)

        
    }, [])

    return (
        <div className={`bg-black h-[var(--app-height)] w-screen fixed top-0 left-0 z-40 opacity-${show? '1':'0'} duration-[1000ms]`}>
            <div 
                className="flex justify-center items-center h-full">
                <img src={Head} className="w-[40vw] h-auto object-cover"/>
            </div>
        </div>
    )
}

export default Intro