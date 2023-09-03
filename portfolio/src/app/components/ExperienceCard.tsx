"use client"
import React from 'react';
import mef from '@/app/Image/armoiries-removebg-preview.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import vscode from '@/app/Image/Visual_Studio_Code_1.35_icon.svg-removebg-preview.png'
import laravel from '@/app/Image/1200px-Laravel.svg.png'
import mysql from '@/app/Image/sql.png'

type Props = {};

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] 
            snap-center bg-[#292929] px-10 py-2 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full object-cover object-center'
            >
                <Image
                    src={mef}
                    alt="Logo mef Benin"
                />
            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='text-1xl font-light'>
                    Academic Internship
                </h4>
                <p className='font-bold text-1xl mt-1'>
                    MINISTERE DE L'ECONOMIE <br />ET DES FINANCES
                </p>
                <div className='flex space-x-2 my-2'>
                    <Image
                        src={vscode}
                        width={30}
                        height={30}
                        alt='vscode'
                    />
                    <Image
                        src={laravel}
                        width={30}
                        height={30}
                        alt='vscode' />
                    <Image
                        src={mysql}
                        width={30}
                        height={30}
                        alt='vscode' />
                    {/* tech use */}
                </div>
                <p className='uppercase py-2 text-gray-300 text-sm'>June 2021 - August 2021</p>
                <ul className='list-disc space-y-1 ml-5 text-sm'>
                    <li>Designed and developed the user interface for the suggestion box, providing a smooth and user-friendly experience</li>
                    <li>Integrated real-time suggestion features, enabling users to receive relevant recommendations.</li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
