import React from 'react'
import ProfileImage from "../assets/gudetama-hero.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b">
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-auto sm:justify-center items-center text-center pt-5">
                    <h2 className="text-4xl sm:text-7xl font-bold w-fit">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="py-4 mx-w-md">
                        I have 8 years of experience building and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={ProfileImage} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div>
    )
}

export default Home