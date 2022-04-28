import React, { useState } from "react";

const Sidebar = props => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        document.querySelector("body").classList.toggle("disable-scroll")
        setOpen((val) => !val)
    }

    const handleNavigate = (id) => {
        setOpen(false)
        document.querySelector("body").classList.toggle("disable-scroll")
        window.location.replace(id)
    }

    return (
        <div className={`section z-10 sidebar ${open? 'open' : ''}`}>
            <div className="menu bg-neon opacity-1" onClick={toggleOpen}>
                {!open && <svg className="stroke-black" fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>}
                {open && <svg className="stroke-black" fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>}
            </div>

            <div className="flex flex-col justify-center w-full h-full">

                <div className="">
                    <span className="font-monument text-4xl lg:text-6xl mb-6 lg:mb-12 inline-block cursor-pointer" onClick={() => handleNavigate("#home")}> Home </span>
                </div>
                <div className="">
                    <span className="font-monument text-4xl lg:text-6xl mb-6 lg:mb-12 inline-block cursor-pointer" onClick={() => handleNavigate("#about")}> About </span>
                </div>
                <div className="">
                    <span className="font-monument text-4xl lg:text-6xl mb-6 lg:mb-12 inline-block cursor-pointer" onClick={() => handleNavigate("#projects")}> Projects </span>
                </div>
                <div className="">
                    <span className="font-monument text-4xl lg:text-6xl cursor-pointer" onClick={() => handleNavigate("#contact")}> Contact </span>
                </div>

            </div>
        </div>
    )
}

export default Sidebar