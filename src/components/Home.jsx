import React from 'react'
import ProfileImage from "../assets/kanch.jpg";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b">
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-auto sm:justify-center items-center text-center pt-5">
                    <h2 className="text-4xl sm:text-7xl font-bold w-full">
                        Kanch Ruansiripiyakul
                    </h2>
                    <p className="py-4 mx-w-md">
                        I have 8 years of experience building and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r bg-black cursor-pointer">
                            Resume

                        </button>
                    </div>
                </div>
                <div>
                    <img src={ProfileImage} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-full sm:justify-center items-center md:ml-5 lg:ml-20"/>
                </div>
            </div>
        </div>
    )
}

export default Home