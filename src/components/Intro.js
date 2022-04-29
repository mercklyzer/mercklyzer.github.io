import React, { useEffect, useRef, useState } from "react";
import Head from '../assets/head.gif'
import Animation from '../assets/animation.gif'
import useImageLoaded from "../hooks/useImageLoad";
import Try from '../assets/try.gif'

const Intro = props => {
    const [show, setShow] = useState(true)
    const [behind, setBehind] = useState(false)
    const headRef = useRef()


    useEffect(() => {
        document.querySelector("body").classList.add("disable-scroll")

        new Promise((fulfill, reject) => {
            setTimeout(() => {
                document.querySelector("body").classList.remove("disable-scroll")
                setShow(false)
                fulfill()
            },5000)
        })
        .then(() => {
            setTimeout(() => {
                setBehind(true)
            }, 1000)
        })        
    }, [])

    return (
        <div ref={headRef} className={`bg-black h-[var(--app-height)] w-screen fixed top-0 left-0 z-[999] ${behind? 'hidden':''} opacity-${show? '1':'0'} duration-[1000ms]`}>
            <div 
                className="flex justify-center items-center h-full">
                <img src={Try} className="w-[80vw] md:w-[70vw] lg:w-[40vw] h-auto object-cover"/>
            </div>
        </div>
    )
}

export default Intro