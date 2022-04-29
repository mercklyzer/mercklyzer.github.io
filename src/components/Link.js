import React from "react"

const Link = ({className, name, link}) => {

    return (
        <div className={`text-silver cursor-pointer duration-300 hover:text-neon relative overflow-hidden group ${className}`}>
            <div className="absolute h-[2px] w-full bg-neon top-[95%] right-full  group-hover:translate-x-[100%] duration-300"></div>
            <div className="py-1">{name}</div>
        </div>
    )
}

export default Link