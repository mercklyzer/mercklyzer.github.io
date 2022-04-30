import React, { useEffect, useRef } from "react";
import WhiteScrollDown from '../assets/white_scroll_down.png'
import Profile from '../assets/profile.jpg'
import Link from "./Link";

const Hero = ({className}) => {
    const whiteBox = useRef()
    const scrollDown = useRef()
    const imageRef = useRef()

    useEffect(() => {


    }, [])


    // 
    return (
        <div id="home" className={`relative w-full min-h-[var(--app-height)] pb-12 px-8 pt-32 ${className} flex flex-col justify-between content-between bg-dark text-silver font-poppins`}>
            <div className="flex flex-col md:flex-row justify-between ">
                <div className="text-[2.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] ">
                    <div className="inline-block h-full align-top mr-2">I AM</div>
                    <div className="inline-block">
                        <p className="block"><span className="text-neon font-semibold"> LYZER BAUTISTA. </span> BASED IN THE PHILIPPINES. </p>
                        <p className="block">ALSO, I AM A GRADUATING STUDENT AT THE </p>
                        <p className="block">UNIVERSITY OF THE PHILIPPINES WITH A </p>
                        <p className="block">DEGREE MAJORING IN COMPUTER SCIENCE. </p>
                    </div>
                </div>

                <div className="flex justify-end mt-14 md:mt-0">
                    <img src={Profile} className="object-cover w-[38vw] md:w-[30vw] lg:w-[26vw] xl:w-[18vw] "/>
                </div>
            </div>

            <div className="hidden lg:block w-[20vw] lg:w-[10vw] xl:w-[6vw] absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2">
                <img src={WhiteScrollDown} className="animate-spin-slow h-full w-full"/>
            </div>

            <div className="flex justify-between items-end h-full md:text-[1.4vw] lg:text-[1.1vw] ">
                <div className="flex justify-between items-end w-full flex-1">
                    <a 
                        className="font-bold hover:text-neon hover:tracking-widest duration-1000 text-[3.2vw] md:text-[2.2vw] lg:text-[1.5vw] "
                        href="https://mail.google.com/mail/u/0/?fs=1&to=mercklyzer@gmail.com&tf=cm" target="__blank">WORK WITH ME</a>
                    <div className="flex">
                        <Link className="mr-4 text-[2vw] md:text-[1.5vw] lg:text-[1.1vw]" name="LinkedIn"/>
                        <Link className="mr-4 text-[2vw] md:text-[1.5vw] lg:text-[1.1vw]" name="GitHub"/>
                        <Link className="mr-4 text-[2vw] md:text-[1.5vw] lg:text-[1.1vw]" name="Twitter"/>
                        <Link className="text-[2vw] md:text-[1.5vw] lg:text-[1.1vw]" name="Resume"/>
                    </div>
                </div>
                <div className="text-right flex-1 hidden md:block">
                    <div>I HAVE A PASSION AND EXPERIENCE IN BUILDING </div>
                    <div>CREATIVE FULL STACK WEBSITES AND MOBILE APPLICATIONS.</div>
                </div>
            </div>
        </div>

    )
}

export default Hero