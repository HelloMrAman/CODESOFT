import React from 'react'
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import javascript from '../assets/icons/javascript.png'
import tailwind from '../assets/icons/tailwind.png'
import react from '../assets/icons/react.png'


const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-700 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>


      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My <br /> Tech <br /> Stack
      </h2>

      <div className='flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html} alt="HTML Icon" />
        <p className='mt-2'>HTML</p>
      </div>

      <div className='flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css} alt="CSS Icon"  />
        <p className='mt-2'>CSS</p>
      </div>

      <div className='flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={javascript} alt="Javascript Icon"/>
        <p className='mt-2'>Javascript</p>
      </div>

      <div className='flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tailwind} alt="Tailwind Icon"/>
        <p className='mt-2'>Tailwind</p>
      </div>

      <div className='flex flex-col  items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt="React Icon"/>
        <p className='mt-2'>React</p>
      </div>
    </div>

  )
}

export default Skills