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


    return (
        <div id="home" className={`relative w-full min-h-[var(--app-height)] pb-12 section pt-24 ${className} flex flex-col justify-between content-between bg-dark text-silver font-poppins`}>
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className="text-md md:text-xl lg:text-xl xl:text-2xl ">
                    <div className="inline-block h-full align-top mr-2">I AM</div>
                    <div className="inline-block">
                        <p className="block"><span className="text-neon font-semibold"> LYZER BAUTISTA. </span> BASED IN THE PHILIPPINES. </p>
                        <p className="block">ALSO, I AM A GRADUATING STUDENT AT THE </p>
                        <p className="block">UNIVERSITY OF THE PHILIPPINES WITH A </p>
                        <p className="block">DEGREE IN COMPUTER SCIENCE. </p>
                    </div>
                </div>

                <div className="flex justify-end my-6 sm:my-4 md:mt-14 lg:mt-0">
                    <img src={Profile} className="object-cover max-w-[50vw] sm:max-w-[35vw] md:max-w-[30vw] lg:max-w-[26vw] xl:max-w-[18vw] "/>
                </div>
            </div>

            <div className="hidden lg:block w-[20vw] lg:w-[10vw] xl:w-[6vw] absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2">
                <img src={WhiteScrollDown} className="animate-spin-slow h-full w-full"/>
            </div>

            <div className="flex justify-between items-end h-full  ">
                <div className="flex justify-between items-end w-full flex-1 md:mr-12">
                    <a 
                        className="font-bold hover:text-neon hover:tracking-wider duration-1000 text-md sm:text-lg lg:text-2xl xl:text-2xl "
                        href="https://mail.google.com/mail/u/0/?fs=1&to=mercklyzer@gmail.com&tf=cm" target="__blank">WORK WITH ME</a>
                    <div className="flex flex-col md:flex-row justify-end items-end ml-12">
                        <Link className="md:mr-4 text-sm md:text-md lg:text-lg" name="LinkedIn"/>
                        <Link className="md:mr-4 text-sm md:text-md lg:text-lg" name="GitHub"/>
                        <Link className="md:mr-4 text-sm md:text-md lg:text-lg" name="Twitter"/>
                        <Link className="text-sm md:text-md lg:text-lg" name="Resume"/>
                    </div>
                </div>
                <div className="text-right hidden md:block 2xl:hidden lg:text-lg xl:text-2xl">
                    <div>I HAVE A PASSION AND EXPERIENCE IN  </div>
                    <div>BUILDING CREATIVE FULL STACK</div>
                    <div>WEBSITES AND MOBILE APPLICATIONS.</div>
                </div>
                <div className="text-right flex-1 hidden 2xl:block">
                    <div>I HAVE A PASSION AND EXPERIENCE IN BUILDING </div>
                    <div>CREATIVE FULL STACK WEBSITES AND MOBILE APPLICATIONS.</div>
                </div>
            </div>
        </div>

    )
}

export default Hero