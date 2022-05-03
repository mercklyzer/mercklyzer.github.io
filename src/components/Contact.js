import React from "react";
import Link from "./Link";
import Resume from '../assets/Bautista_Resume.pdf'

const Contact = props => {
    return (
        <div className="section bg-dark">
            <div className="font-monument text-white font-bold text-4xl md:text-4xl lg:text-6xl" id="contact">GET IN TOUCH</div>
            <a 
                href="https://mail.google.com/mail/u/0/?fs=1&to=mercklyzer@gmail.com&tf=cm"
                target={"__blank"}
                className="font-poppins font-semibold text-neon text-lg md:text-xl lg:text-2xl cursor-pointer">
                mercklyzer@gmail.com
            </a>

            <div className="flex flex-col md:flex-row my-16 md:my-32">
                <Link className="mr-4" name="Resume" link={Resume}/>
                <Link className="mr-4" name="LinkedIn" link="https://www.linkedin.com/in/lyzer-merck-bautista/"/>
                <Link className="mr-4" name="GitHub" link="https://github.com/mercklyzer"/>
                <Link className="" name="Twitter" link="https://twitter.com/LyzerBautista"/>
                
            </div>

            <div className="text-zinc-400 font-poppins mb-12 md:mb-16 lg:mb-24">© Lyzer Bautista. All Rights Reserved.</div>

        </div>
    )
}

export default Contact