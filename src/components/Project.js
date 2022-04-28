import React, { useEffect } from "react"


const Project = ({image, title, visitLink, documentationLink}) => {
    return (
    <div className="project flex flex-col justify-center items-center w-full opacity-0 ">
        <img className="cursor-pointer object-contain" src={image} alt="UPTrace website"/>
        <div className="flex justify-between items-center w-full  text-white mt-2 font-poppins">
            <div className="font-semibold text-md">{title}</div>
            <div>
                <div className="text-sm font-medium cursor-pointer">Visit</div>
                <div className="text-sm font-medium cursor-pointer">Documentation</div>
            </div>
        </div>
    </div>
    )
}

export default Project