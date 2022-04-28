import React from "react"

const Link = ({name, link}) => {

    return (
        <div className="mr-8 text-zinc-400 font-medium cursor-pointer duration-300 hover:text-white relative overflow-hidden group ">
            <div className="absolute h-[2px] w-full bg-white top-[95%] right-full  group-hover:translate-x-[100%] duration-300"></div>
            <div className="py-1 lg:text-lg">{name}</div>
        </div>
    )
}

export default Link