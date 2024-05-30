import React from 'react'
import aboutImg from '../assets/aman-removebg.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg mb-4'>
                    I am a dedicated B.Tech student studying computer science and engineering, and I have a strong interest in how technology can change the world. 
                    I thrive at fusing theory with real-world application, whether it be in programming or artificial intelligence, and I'm always looking to broaden my skill set. My capacity for analysis and problem-solving allows me to take on challenging tasks and make a significant contribution to initiatives. 
                    </p>
                    <p className='text-base lg:text-lg mb-4'>Outside of the classroom, I take part in cooperative projects because I know how important teamwork is to fostering creativity. I'm dedicated to having a good influence and have a goal to use technology to improve society. I'm ready to help create a world that is smarter and more connected, and
                    I'm eager to learn about new developments in technology and business trends.
                    </p>
                    <p className='text-base lg:text-lg mb-4'>
                    I am genuinely excited about the prospect of collaborating with someone who shares my passion for innovation and societal betterment. Together, I am confident that we can make a real impact and create meaningful opportunities for growth and development.
                    Let's get in touch and look at potential growth and cooperation.
                    </p>
                </div>
            </div>

            <img className="mx-auto rounded-3xl py-8 md:py-0 " src={aboutImg} alt="Pic"/>

        </div>
    </div>
  )
}

export default About