import React from 'react'
import reactpic from '../assets/react.png'
import nextjspic from '../assets/nextjs.png'
import tailwindpic from '../assets/tailwind.png'
import javascriptpic from '../assets/javascript.png'

const About = () => {
    const techs = [
        {
            id: 1,
            src: reactpic,
            title: 'React',
            style: 'shadow-orange-500'
        }, {
            id: 2,
            src: nextjspic,
            title: 'NextJS',
            style: 'shadow-orange-500'
        }, {
            id: 3,
            src: tailwindpic,
            title: 'Tailwind',
            style: 'shadow-orange-500'
        }, {
            id: 4,
            src: javascriptpic,
            title: 'Javascript',
            style: 'shadow-orange-500'
        },
    ]

    return (
        <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white h-full pt-10">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-2 pt-20">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-5">
                    Hi, my name is Kanch Ruansiripiyakul and I'm a 3 year student at Khonkaen University studying DigitalMedia Engineering. I have always been interested in technology and design, which led me to pursue a career in front-end development. Throughout my time at university, I have gained a strong foundation in JavaScript and web design through my coursework and personal projects.
                </p>
                <br />
                <p className="text-xl">
                    In my spare time, I enjoy staying up-to-date with the latest technologies and trends in the industry and working on personal projects to improve my skills. I am excited to continue learning and to growing as a full stack developer.
                </p>
                <div className="pt-10">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default About