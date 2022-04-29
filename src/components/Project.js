import React, { useEffect } from "react"


const Project = ({image, title, visitLink, documentationLink}) => {
    return (
    <div className="project flex flex-col justify-center items-center w-full opacity-0 ">
        <a href={visitLink} target="__blank">
            <img className="cursor-pointer object-contain" src={image} alt="UPTrace website"/>
        </a>
        <div className="flex justify-between items-center w-full  text-white mt-2 font-poppins">
            <div className="font-semibold text-md">{title}</div>
            <div>
                <a href={visitLink} target="__blank" className="text-sm font-medium cursor-pointer">Visit</a>
                <div className="text-sm font-medium cursor-pointer">Documentation</div>
            </div>
        </div>
    </div>
    )
}

export default Project