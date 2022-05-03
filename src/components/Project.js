import React, { useEffect } from "react"
import BrainlyGif from '../assets/Brainly.gif'
import TrailyzerGif from '../assets/Trailyzer.gif'


const Project = ({image, title, visitLink, preview, documentationLink}) => {
    return (
    <div className="project flex flex-col justify-center items-center w-full opacity-0 ">
        <a href={visitLink} target="__blank" className="group cursor-pointer">
            <img className="object-contain group-hover:hidden" src={image} alt="UPTrace website"/>
            <img className="object-contain hidden group-hover:block" src={preview} alt="UPTrace website"/>
        </a>
        <div className="flex justify-between items-center w-full  text-white mt-2 font-poppins">
            <div className="font-semibold text-md">{title}</div>
            <div>
                <a href={visitLink} target="__blank" className="text-sm font-medium cursor-pointer hover:text-neon duration-500">Visit</a>
                <div className="text-sm font-medium cursor-pointer hover:text-neon duration-500">Documentation</div>
            </div>
        </div>
    </div>
    )
}

export default Project