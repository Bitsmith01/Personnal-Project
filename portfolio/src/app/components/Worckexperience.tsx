"use client"
import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';


type Props = {}

function Worckexperience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase md:tracking-[20px] tracking-[2px] text-gray-500 text-2xl md:mb-24 mb-24'>
                Experience
            </h3>
            <div className='w-full flex overflow-x-scroll p-10 snap-x snap-mandatory space-x-5 mt-10'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default Worckexperience