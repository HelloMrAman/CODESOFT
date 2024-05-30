import React from 'react'
import heroimage from '../assets/profile-pic (6).png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        <div className='col-span-1 my-auto mx-auto w-[275px] h-auto lg:w-[300px]'>
                <img src={heroimage} alt="hero image"/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-3xl sm:text-4xl lg:text-7xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Tech Fanatic",
                    1000,
                    "Web Designer",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className="block sm:inline"
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                I'm a passionate front-end developer eager to create captivating digital experiences.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Resume
                </a>
                <a href="#contact" className='px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br  from-yellow-400 to-purple-600 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero