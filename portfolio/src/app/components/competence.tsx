"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import js from '@/app/Image/JavaScript-logo.png';
import nex from '@/app/Image/next.png';

type Props = { directionleft?: boolean };

function Skill({ directionleft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-24 h-24 rounded-full object-cover object-center relative' // Ajout de relative ici
      >
        <Image
          src={js}
          alt="Logo mef Benin"
          className='rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
      </motion.div>
    </div>
  );
}

export default Skill;

