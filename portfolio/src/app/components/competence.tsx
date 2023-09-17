"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = { directionleft?: boolean; imageSrc: string };

function Skill({ directionleft, imageSrc }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-24 h-24 rounded-full object-cover object-center relative"
      >
        <Image
          src={imageSrc}
          alt="Logo mef Benin"
          className="rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 w-full h-full object-cover ease-in-out"
        />
      </motion.div>
    </div>
  );
}

export default Skill;
