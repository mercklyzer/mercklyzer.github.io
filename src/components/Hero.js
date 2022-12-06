import React, { useEffect, useRef } from "react";
import WhiteScrollDown from '../assets/white_scroll_down.png'
import Profile from '../assets/profile.jpg'
import Resume from '../assets/Bautista_Resume.pdf'
import Link from "./Link";
import gsap, { Expo } from "gsap";

const Hero = ({className}) => {


    useEffect(() => {
        const tl = gsap.timeline()

        tl.to(".line-block", {
            yPercent: -100,
            duration: 0.5, 
            delay: 5.5,
            ease: Expo.easeOut,
            stagger: 0.3
        })
        tl.to(".image-block", {
            yPercent: -100,
            duration: 1, 
            ease: Expo.easeOut,
        })
        tl.to(".work-with-me-block, .link-block", {
            xPercent: 100,
            duration: 0.5,
            ease: Expo.easeOut
        })
        .to(".bottom-line-block", {
            yPercent: -100,
            duration: 1, 
            ease: Expo.easeOut
        })

    }, [])


    return (
        <div id="home" className={`relative w-full min-h-screen pb-12 section pt-24 ${className} flex flex-col justify-between content-between bg-dark text-silver font-poppins`}>
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className="text-md md:text-xl lg:text-xl xl:text-2xl ">
                    <div className="inline-block h-full align-top mr-2 overflow-hidden">
                        I AM
                        <div className="absolute inset-0 bg-dark line-block"></div>
                    </div>
                    <div className="inline-block">
                        <div className="block relative overflow-hidden">
                            <span className="text-neon font-semibold"> LYZER BAUTISTA, </span> BASED IN THE PHILIPPINES. 
                            <div className="absolute inset-0 bg-dark line-block"></div>
                        </div>
                        <div className="block relative overflow-hidden">
                            I HAVE A MAJOR IN COMPUTER SCIENCE
                            <div className="absolute inset-0 bg-dark line-block"></div>
                        </div>
                        <div className="block relative overflow-hidden">
                            AND GRADUATED AS <span className="text-neon font-semibold"> SUMMA CUM LAUDE </span>
                            <div className="absolute inset-0 bg-dark line-block"></div>
                        </div>
                        <div className="block relative overflow-hidden">
                            AT THE UNIVERSITY OF THE PHILIPPINES DILIMAN.
                            <div className="absolute inset-0 bg-dark line-block"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end my-6 sm:my-4 md:mt-14 lg:mt-0 relative overflow-hidden">
                    <div className="lg:block w-[25vw] sm:w-[16vw] lg:w-[10vw] xl:w-[6vw] absolute top-1/2 left-0 trasnform -translate-x-1/2 -translate-y-1/2">
                        <img src={WhiteScrollDown} className="animate-spin-slow h-full w-full"/>
                    </div>
                    <div className="absolute inset-0 bg-dark image-block"></div>
                    <img src={Profile} className="object-cover max-w-[50vw] sm:max-w-[35vw] md:max-w-[30vw] lg:max-w-[26vw] xl:max-w-[18vw] "/>

                </div>
            </div>



            <div className="flex justify-between items-end h-full  ">
                <div className="flex justify-between items-end w-full flex-1 md:mr-12">
                    <div className="relative overflow-hidden">
                        <a 
                            className="font-bold hover:text-neon hover:tracking-wider duration-1000 text-md sm:text-lg lg:text-2xl xl:text-2xl "
                            href="https://mail.google.com/mail/u/0/?fs=1&to=mercklyzer@gmail.com&tf=cm" target="__blank">WORK WITH ME</a>
                        <div className="work-with-me-block bg-dark absolute inset-0"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end items-end ml-12">
                        <div className="relative overflow-hidden">
                            {/* <Link className="md:mr-4 text-sm md:text-md lg:text-lg mb-4 md:mb-0" name="Resume" link="https://firebasestorage.googleapis.com/v0/b/shop-c4574.appspot.com/o/Bautista%20-%20Resume.pdf?alt=media&token=4f442393-3cd8-4a17-a05b-7cf95ba4d7c6"/> */}
                            <Link className="md:mr-4 text-sm md:text-md lg:text-lg mb-4 md:mb-0" name="Resume" link={Resume}/>
                            <div className="link-block bg-dark inset-0 absolute"></div>
                        </div>
                        <div className="relative overflow-hidden">
                            <Link className="md:mr-4 text-sm md:text-md lg:text-lg mb-4 md:mb-0" name="LinkedIn" link="https://www.linkedin.com/in/lyzer-merck-bautista/"/>
                            <div className="link-block bg-dark inset-0 absolute"></div>
                        </div>
                        <div className="relative overflow-hidden">
                            <Link className="md:mr-4 text-sm md:text-md lg:text-lg mb-4 md:mb-0" name="GitHub" link="https://github.com/mercklyzer"/>
                            <div className="link-block bg-dark inset-0 absolute"></div>
                        </div>
                    </div>
                </div>
                <div className="text-right hidden md:block 2xl:hidden lg:text-lg xl:text-2xl">
                    <div className="relative overflow-hidden">
                        <div>I HAVE A PASSION AND EXPERIENCE IN  </div>
                        <div>BUILDING CREATIVE FULL STACK</div>
                        <div>WEBSITES AND MOBILE APPLICATIONS.</div>
                        <div className="bottom-line-block bg-dark absolute inset-0"></div>
                    </div> 
                </div>
                <div className="text-right flex-1 hidden 2xl:block">
                <div className="relative overflow-hidden">
                        <div>I HAVE A PASSION AND EXPERIENCE IN BUILDING </div>
                        <div>CREATIVE FULL STACK WEBSITES AND MOBILE APPLICATIONS.</div>
                        <div className="bottom-line-block bg-dark absolute inset-0"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero