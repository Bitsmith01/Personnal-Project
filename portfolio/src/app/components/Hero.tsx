"use client"
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundcCrcles from './BackgroundcCrcles';


type Props = {};

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, I\'m Esperat DIMON',
            'Full-Stack Developer',
            'Skilled in both Front-end and Back-end',
            'Passionate about creating web applications',
            'Let\'s build something amazing together!',
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundcCrcles />
            {/* img */}
            <div className='z-20'>
                <h2 className='uppercase text-sm text-gray-500 pb-2 tracking-[15px]'>
                    Software Engeineer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold py-3 px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <a href='#about'>
                        <button className='heroButton'>About</button>
                    </a>
                    <a href='#hero'>
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </a>
                    <a href='#project'>
                        <button className='heroButton'>Project</button>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Hero;
