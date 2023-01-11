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
        <div name="about" className="w-full  bg-gradient-to-b from-gray-800 to-black text-white h-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-2 pt-10">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum possimus iure, nihil iusto in inventore blanditiis omnis fugiat quasi nulla recusandae neque non vel incidunt laudantium voluptatum ipsam aliquam odit a enim. Ex a ab necessitatibus laborum, voluptates vero et eum repudiandae voluptatum dolores velit eaque atque perspiciatis fugiat.
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolorum repellat sapiente! Ex iusto id, quod, perspiciatis error enim molestiae corrupti odio accusamus accusantium, corporis est reprehenderit tempore quo delectus officia totam neque laboriosam? Cupiditate quae repudiandae harum voluptatibus totam, ad sapiente beatae dolorem similique, dolores illum iste perferendis eveniet.
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