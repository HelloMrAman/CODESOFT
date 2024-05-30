import React from 'react';
import proj1 from '../assets/works/AlgorithmV.png';
import proj2 from '../assets/works/Nike.png';
import proj3 from '../assets/works/api.png';
import proj4 from '../assets/works/tic-tak-toe.png';



const Works = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='primary-color text-4xl mb-3 font-bold'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj1}/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj2}/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj3}/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj4}/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Works