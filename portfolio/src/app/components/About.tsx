"use client"
import React from 'react';
import me from '@/app/Image/IMG_20230217_123913_795.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration:2 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:mb-24'>
                About
            </h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                <Image
                    src={me}
                    alt="Your Name"
                    objectFit="cover"
                    className="rounded-full w-56 h-56 object-contain md:rounded-lg md:w-[400px] md:h-[500px]"
                />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10 md:w-1/2'>
                <h4 className='text-4xl font-semibold'>The Creativity Behind the Screen</h4>
                <p className='px-3'>
                    I'm a passionate Full-Stack Developer, a web application creator determined to push the boundaries of what's possible online.
                    My journey has equipped me with a strong expertise in both front-end and back-end development, enabling me to turn ideas into robust
                    and high-performing applications.
                    <br className='mb-2' />
                    My mission? Crafting exceptional digital experiences that solve problems, inspire engagement, and bring value.
                    My love for technology and attention to detail are reflected in every line of code I write. Whether it's using the latest technologies or tackling complex challenges,
                    I'm always ready to take on new endeavors. My desire for perfection and my pursuit of innovation drive me to continuously seek elegant and effective solutions.
                </p>

            </div>
        </motion.div>
    );
}

export default About;

