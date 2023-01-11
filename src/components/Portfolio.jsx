import React from 'react';
import project1 from '../assets/portfolio/usestate.jpg';

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: project1
        }, {
            id: 2,
            src: project1
        }, {
            id: 3,
            src: project1
        }, {
            id: 4,
            src: project1
        },
        
    ]
  return (
      <div name="portfolio" className="w-full pt-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8 pl-4">
                  <p name="portfolio" className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
                  <p className="py-6">Check out some of my work right here</p>
            </div>
        </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 mb-20">
        {portfolios.map(({id, src}) =>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
                    <img src={src} alt="" className="rounded-md" />
                    <p className="flex items-center justify-center pt-5">hello</p>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 font-bold">Demo</button>
                        <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 font-bold">Code</button>
                    </div>
                </div>
        ))}
        </div>
    </div>
  )
}

export default Portfolio